<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '@/components/ui/button';
	import { Card } from '@/components/ui/card';
	import { Input } from '@/components/ui/input';
	import Label from '@/components/ui/label/label.svelte';
	import { trpc } from '@/trpc/client';
	import { formSchema } from './schema';
	import { appStore } from '@/stores/app-store';
	import ToAddress from '@/components/app/to-address.svelte';
	import TypeSelect from '@/components/app/type-select.svelte';
	import Textarea from '@/components/ui/textarea/textarea.svelte';
	import Attachments from '@/components/app/attachments.svelte';
	import Separator from '@/components/ui/separator/separator.svelte';
	import SmtpConfig from '@/components/app/smtp-config.svelte';
	import { toast } from 'svelte-sonner';
	import Reload from 'svelte-radix/Reload.svelte';
	let loading = false;
	const handleSubmit = async (
		e: SubmitEvent & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) => {
		loading = true;
		const parsedData = formSchema.safeParse($appStore);
		if (!parsedData.success) {
			console.log(parsedData.error.errors);
			
			toast.error(parsedData.error.errors.at(0)?.message ?? 'Unknown error. Please try again.');
			loading = false;
			return;
		}
		const data = parsedData.data;
		try {
			const res = await trpc($page).mail.sendBulkMails.mutate(data);
			toast.info(res.message);
		} catch (error) {
			toast.error('Something went wrong. Please try again.');
		} finally {
			loading = false;
		}
	};
</script>

<main class="space-y-6">
	<h1 class="text-3xl font-bold">Send Automated Emails.</h1>
	<Card class="container py-10">
		<form class="space-y-3" on:submit|preventDefault={handleSubmit}>
			<div>
				<Label>From Address</Label>
				<Input
					name="fromAddress"
					bind:value={$appStore.fromAddress}
					type="email"
					placeholder="email@webzenith.tech"
					required
				/>
			</div>
			<div>
				<Label>From Name <span class="text-xs text-muted-foreground">(optional)</span></Label>
				<Input
					name="fromName"
					bind:value={$appStore.fromName}
					type="text"
					placeholder="your name"
				/>
			</div>
			<div>
				<Label>To Address</Label>
				<ToAddress />
			</div>
			<div>
				<Label>Subject</Label>
				<Input
					name="subject"
					bind:value={$appStore.subject}
					type="text"
					required
					placeholder="your email subject goes here."
				/>
			</div>
			<div>
				<Label>Content Type</Label>
				<TypeSelect />
			</div>
			<div>
				<Label>Email Body</Label>
				<Textarea name="emailBody" bind:value={$appStore.content} placeholder="Your Email body goes here" required />
			</div>
			<div>
				<Label>Attachments <span class="text-xs text-muted-foreground">(optional)</span> </Label>
				<Attachments />
			</div>
			<Separator />
			<SmtpConfig />
			{#if loading}
				<Button disabled class="mt-4 w-full">
					<Reload class="mr-2 h-4 w-4 animate-spin" />
					Please wait
				</Button>
			{:else}
				<Button class="mt-4 w-full" type="submit" disabled={loading}>Submit</Button>
			{/if}
		</form>
	</Card>
</main>
