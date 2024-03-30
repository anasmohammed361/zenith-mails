import { z } from 'zod';

export const formSchema = z.object({
	provider: z.enum(['google']).default('google'),
	contentType: z.enum(['text', 'html']).default('text'),
	content: z.string().min(5),
	fromAddress: z.string().email(),
	toAddresses: z.array(z.string().email()).min(1),
	subject: z.string().min(5)
});

export type FormSchema = typeof formSchema;
