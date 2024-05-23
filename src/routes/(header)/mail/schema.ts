import { z } from 'zod';

export const formSchema = z.object({
	provider: z.enum(['google', 'custom']),
	contentType: z.enum(['text', 'html']).default('text'),
	content: z.string().min(5),
	fromAddress: z.string(),
	toAddresses: z
		.string()
		.email()
		.array()
		.min(1)
		.max(20, { message: 'We  support  maximum of 20 emails.' })
		.default([]),
	subject: z.string().min(5),
	smtpPassword: z.string().length(16),
	smtpUserName: z.string().email(),
	attachments: z.string().url().array().default([]),
	smtpHost: z.string(),
	smtpPort: z.number(),
	ssl: z.boolean()
});

export type FormSchema = typeof formSchema;
