import type { PageServerLoad, Actions } from './$types.js';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		console.log(form.data);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const transport = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: form.data.googleSmtpUserName,
				pass: form.data.googleSmtpAppPassword
			}
		});
		const promises = [];
		for (const to of form.data.toAddresses) {
			promises.push(
				transport.sendMail({
					from: form.data.fromAddress,
					to,
					subject: form.data.subject,
					text: form.data.contentType === 'text' ? form.data.content : undefined,
					html: form.data.contentType === 'html' ? form.data.content : undefined
				})
			);
		}
		try {
			const res = await Promise.allSettled(promises);
			const sentMails = res.filter((r) => r.status === 'fulfilled');
			const failedMails = res.filter((r) => r.status === 'rejected');
			console.log(res);
			
			return {
				form,
				success: true,
				message: `Sent ${res.filter((r) => r.status === 'fulfilled').length} mails , ${res.filter((r) => r.status === 'rejected').length} failed`,
				sentMails,
				failedMails
			};
		} catch (error) {
			console.log(error);
			return {
				form,
				failed: true,
				message: 'Error Sending Mails'
			};
		}
	}
};
