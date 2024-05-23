<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '@/components/ui/button';
	import { Card } from '@/components/ui/card';
	import { Input } from '@/components/ui/input';
	import Label from '@/components/ui/label/label.svelte';
	import { trpc } from '@/trpc/client';

	import { z } from 'zod';
	const formSchema = z.object({
		provider: z.enum(['google', 'custom']),
		contentType: z.enum(['text', 'html']),
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
	const handleSubmit = async (
		e: SubmitEvent & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) => {
		const data = new FormData(e.target as HTMLFormElement);
	};
</script>

<main class="space-y-6">
	<h1 class="text-4xl font-bold">Send Emails.</h1>
	<Card class="container py-10">
		<form class="space-y-3" on:submit|preventDefault={handleSubmit}>
			<div>
				<Label>From Address</Label>
				<Input name="fromAddress" type="email" placeholder="From Address" required />
			</div>
			<div>
				<Label>To Address</Label>
				<Input name="fromAddress" type="email" placeholder="From Address" required />
			</div>
			<div>
				<Label>Type</Label>
				<Input name="fromAddress" type="email" placeholder="From Address" required />
			</div>
			<div>
				<Label>From Address</Label>
				<Input name="fromAddress" type="email" placeholder="From Address" required />
			</div>
			<Button class="w-full" type="submit">Submit</Button>
		</form>
	</Card>
</main>
