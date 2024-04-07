import { z } from 'zod';
const enumProvider = z.enum(['google','custom'])
export const formSchema = z.discriminatedUnion('provider', [
	z.object({
		provider:  enumProvider.extract(['google']),
		contentType: z.enum(['text', 'html']).default('text'),
		content: z.string().min(5),
		fromAddress: z.string(),
		toAddresses: z.string().email().array().min(1).default([]),
		subject: z.string().min(5),
		googleSmtpAppPassword: z.string().length(16),
		googleSmtpUserName: z.string().email(),
		attachments: z.string().url().array().default([]),
	}),
	z.object({
		provider: enumProvider.extract(['custom']),
		contentType: z.enum(['text', 'html']).default('text'),
		content: z.string().min(5),
		fromAddress: z.string(),
		toAddresses: z.string().email().array().min(1).default([]),
		subject: z.string().min(5),
		smtpPassword: z.string(),
		smtpPort: z.number(),
		smtpServer: z.string(),
		smtpUserName: z.string().email(),
		smtpHost: z.string(),
		ssl: z.boolean().default(true),
		attachments: z.string().url().array().default([]),
	})
]);


export type FormSchema = typeof formSchema;

