import { z } from "zod";

export const formSchema = z.object({
    provider: z.enum(['google', 'custom']),
    contentType: z.enum(['text', 'html']),
    content: z.string().min(5,{message: 'Email Body should be atleast 5 characters long.'}),
    fromAddress: z.string().email({ message: 'Invalid email address.' }),
    fromName: z.string().optional(),
    toAddresses: z
        .string()
        .email()
        .array()
        .min(1,{message: 'Please add atleast one email in To Address.'})
        .max(200, { message: 'We  only support  maximum of 200 emails.' })
        .default([]),
    subject: z.string().min(3,{message: 'Subject should be atleast 3 characters long.'}),
    smtpPassword: z.string().min(1,{message: 'Password should be atleast 1 character long.'}),
    smtpUserName: z.string().min(1,{message: 'Username should be atleast 1 character long.'}),
    attachments: z.string().url().array().default([]),
    smtpHost: z.string({ message: 'Invalid SMTP host.'}),
    smtpPort: z.number({ message: 'Invalid SMTP port.'}),
    ssl: z.boolean()
});


