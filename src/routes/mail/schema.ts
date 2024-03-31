import { z } from 'zod';

export const formSchema = z.object({
	provider: z.enum(['google']).default('google'),
	contentType: z.enum(['text', 'html']).default('text'),
	content: z.string().min(5),
	fromAddress: z.string(),
	toAddresses: z.string().email().array().min(1),
	subject: z.string().min(5),
	googleSmtpAppPassword: z.string().length(16),
	googleSmtpUserName: z.string().email(),
});

export type FormSchema = typeof formSchema;