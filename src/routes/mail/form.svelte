<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import SuperDebug, { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { formSchema, type FormSchema } from './schema';
	import TagInput from '@/components/ui/tag-input/tag-input.svelte';
	import { Textarea } from '@/components/ui/textarea';
	import { Separator } from '$lib/components/ui/separator';
	import { Button } from '@/components/ui/button';
	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
        
	});

	const { form: formData, enhance } = form;
	$: selectedEmail = $formData.provider
		? {
				label: $formData.provider,
				value: $formData.provider
			}
		: undefined;
	$: selectedType = $formData.contentType
		? {
				label: $formData.contentType,
				value: $formData.contentType
			}
		: undefined;
  
</script>

<form method="POST" use:enhance>
	<Form.Field {form} name="fromAddress">
		<Form.Control let:attrs>
			<Form.Label>From Address</Form.Label>
			<Input
				placeholder={`"My Name" <example@mail.com>`}
				{...attrs}
				bind:value={$formData.fromAddress}
			/>
		</Form.Control>
		<!-- <Form.Description></Form.Description> -->
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="toAddresses">
		<Form.Control let:attrs>
			<Form.Label>To Address</Form.Label>
			<TagInput {form} bind:inputTags={$formData.toAddresses} />
			<!-- <Input {...attrs} bind:value={$formData.toAddresses} /> -->
		</Form.Control>
		<Form.Description>Press Enter after typing in your email.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
 
	<Form.Field {form} name="subject">
		<Form.Control let:attrs>
			<Form.Label>Subject</Form.Label>
			<Input
				{...attrs}
				placeholder="Your Email Subject goes here."
				bind:value={$formData.subject}
			/>
		</Form.Control>
		<!-- <Form.Description>This is your public display name.</Form.Description> -->
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="contentType">
		<Form.Control let:attrs>
			<Form.Label>Content Type</Form.Label>
			<Select.Root
				selected={selectedType}
				onSelectedChange={(v) => {
					v && ($formData.contentType = v.value);
				}}
			>
				<Select.Trigger {...attrs}>
					<Select.Value class="capitalize" placeholder="Select a verified email to display" />
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="text" label="Text" />
					<Select.Item value="html" label="Html" />
				</Select.Content>
			</Select.Root>
			<input hidden bind:value={$formData.contentType} name={attrs.name} />
		</Form.Control>
		<Form.Description
			>Choose if you wanna send <strong>text</strong> or <strong>html</strong>.</Form.Description
		>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="content">
		<Form.Control let:attrs>
			<Form.Label>Email Body</Form.Label>
			<Textarea
				placeholder="Your Email Body goes here..."
				{...attrs}
				bind:value={$formData.content}
			/>
		</Form.Control>
		<!-- <Form.Description>This is your public display name.</Form.Description> -->
		<Form.FieldErrors />
	</Form.Field>

	<Separator class="my-10" />
	<Form.Field {form} name="provider">
		<Form.Control let:attrs>
			<Form.Label>Provider</Form.Label>
			<Select.Root
				selected={selectedEmail}
				onSelectedChange={(v) => {
					v && ($formData.provider = v.value);
				}}
			>
				<Select.Trigger {...attrs}>
					<Select.Value class="capitalize" placeholder="Select a verified email to display" />
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="google" label="Google" />
				</Select.Content>
			</Select.Root>
			<input hidden bind:value={$formData.provider} name={attrs.name} />
		</Form.Control>
		<Form.Description>Currently We only support Google SMTP Server.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
    <Form.Field {form} name="googleSmtpUserName">
		<Form.Control let:attrs>
			<Form.Label>SMTP Username</Form.Label>
			<Input
				{...attrs}
				placeholder="Your SMTP Email Address..."
				bind:value={$formData.googleSmtpUserName}
			/>
		</Form.Control>
		<!-- <Form.Description>This is your public display name.</Form.Description> -->
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="googleSmtpAppPassword">
		<Form.Control let:attrs>
			<Form.Label>SMTP Password</Form.Label>
			<Input
				{...attrs}
				placeholder="Your Email Subject goes here."
				bind:value={$formData.googleSmtpAppPassword}
			/>
		</Form.Control>
		<Form.Description
			>Your Google <a href="https://support.google.com/accounts/answer/185833?hl=en" target="_blank"
				>App Password</a
			> goes here.</Form.Description
		>
		<Form.FieldErrors />
	</Form.Field>
	
	<div class="flex justify-end">
		<Button
            type="submit"
			class="flex cursor-pointer items-center gap-1 rounded-md bg-blue-500 px-4 py-2  transition-all font-semibold tracking-widest text-white duration-300 hover:translate-x-1 hover:gap-1 hover:bg-blue-400"
			>Send
			<svg
				class="h-5 w-5"
				stroke="currentColor"
				stroke-width="1.5"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
					stroke-linejoin="round"
					stroke-linecap="round"
				></path>
			</svg></Button
		>
	</div>
</form>
<SuperDebug data={$formData} />