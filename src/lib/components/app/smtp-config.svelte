<script lang="ts">
	import { appStore } from '@/stores/app-store';
	import Label from '../ui/label/label.svelte';
	import Input from '../ui/input/input.svelte';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';


	import SmtpProvider from './smtp-provider.svelte';
	import { fade } from 'svelte/transition';
</script>

<div>
	<Label>Provider</Label>
	<SmtpProvider />
</div>

{#if $appStore.provider === 'custom'}
	<div transition:fade>
		<Label>SMTP Host</Label>
		<Input
			name="smtpHost"
			bind:value={$appStore.smtpHost}
			type="text"
			placeholder="my-smtp-host.com"
			required
		/>
	</div>
{/if}

<div>
	<Label>SMTP Username</Label>
	<Input
		name="smtpUserName"
		bind:value={$appStore.smtpUserName}
		type="text"
		placeholder="SMTP Username"
		required
	/>
</div>
<div>
	<Label>SMTP Password</Label>
	<Input
		name="smtpPassword"
		bind:value={$appStore.smtpPassword}
		type="password"
		placeholder="* * * *"
		required
	/>
</div>
{#if $appStore.provider == 'custom'}
	<div transition:fade>
		<Label>SMTP Port</Label>
		<Input
			name="smtpPort"
			bind:value={$appStore.smtpPort}
			type="number"
			placeholder="SMTP Port"
			required
		/>
	</div>
	<div transition:fade>
        <Checkbox id="terms" bind:checked={$appStore.ssl} />
        <Label
          for="terms"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Use SSL
        </Label>
	</div>
{/if}
