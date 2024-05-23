import { z } from 'zod';
import { t } from '..';
import { protectedProcedure } from '../procedures';
import nodemailer from 'nodemailer'
import { mailHistory } from '@/db/schema';
type MailHistory = typeof mailHistory.$inferInsert;
const formSchema = z.object({
	provider: z.enum(['google', 'custom']),
	contentType: z.enum(['text', 'html']).default('text'),
	content: z.string().min(5),
	fromAddress: z.string(),
	toAddresses: z
		.string()
		.email()
		.array()
		.min(1)
		.max(20, { message: 'We  support  maximum of 50 emails.' })
		.default([]),
	subject: z.string().min(5),
	smtpPassword: z.string().length(16),
	smtpUserName: z.string().email(),
	attachments: z.string().url().array().default([]),
	smtpHost: z.string(),
	smtpPort: z.number(),
	ssl: z.boolean()
});

export const mailRouter = t.router({
	sendBulkMails: protectedProcedure.input(formSchema).mutation(async ({ ctx, input }) => {
		const db = ctx.db;
		const mailHistoryData: MailHistory = {
			attachments: input.attachments,
			content: input.content,
			type: input.contentType,
			fromAddress: input.fromAddress,
			provider: input.provider,
			subject: input.subject,
			sentUserId: ctx.user.id!,
			toAddresses: []
		}
		try {
			if (input.provider === 'google') {
				const transport = nodemailer.createTransport({
					host: 'smtp.gmail.com',
					port: 465,
					secure: true,
					auth: {
						user: input.smtpUserName,
						pass: input.smtpPassword
					},
					pool: true
				});


				const result = await transport.sendMail({
					from: input.fromAddress,
					to: input.toAddresses,
					subject: input.subject,
					text: input.contentType === 'text' ? input.content : undefined,
					html: input.contentType === 'html' ? input.content : undefined,
					attachments: input.attachments.map((url) => {
						return {
							path: url
						};
					}),
				})

				result.accepted.forEach((to) => {
					mailHistoryData.toAddresses.push({
						to,
						status: "success"
					})
				})
				result.rejected.forEach((to) => {
					mailHistoryData.toAddresses.push({
						to,
						status: "failed",
						message: result.rejectedErrors?.map((error) => {
							error.message
						}).join(",")
					})
				})
			} else if (input.provider === 'custom') {
				const transport = nodemailer.createTransport({
					host: input.smtpHost,
					port: input.smtpPort,
					secure: input.ssl,
					auth: {
						user: input.smtpUserName,
						pass: input.smtpPassword
					},
					attachments: input.attachments.map((url) => {
						return {
							path: url
						};
					}),
					pool: true,
					maxMessages: Infinity
				});


				const res = await transport.sendMail({
					from: input.fromAddress,
					to: input.toAddresses,
					subject: input.subject,
					text: input.contentType === 'text' ? input.content : undefined,
					html: input.contentType === 'html' ? input.content : undefined,
				})

				res.accepted.forEach((to) => {
					mailHistoryData.toAddresses.push({
						to,
						status: "success"
					})
				})
				res.rejected.forEach((to) => {
					mailHistoryData.toAddresses.push({
						to,
						status: "failed",
						message: res.rejectedErrors?.map((error) => {
							error.message
						}).join(",")
					})
				})
			}


			await db.insert(mailHistory).values(mailHistoryData)
			return {
				message: `${mailHistoryData.toAddresses.filter(e => e.status === "success").length} mails sent successfully , ${mailHistoryData.toAddresses.filter(e => e.status === "failed").length} mails were unsuccessful .`
			}
		} catch (error) {
			return {
				message: "Failed to send mail"
			}
		}
	})
});
