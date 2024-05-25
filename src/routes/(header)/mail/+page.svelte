<script lang="ts">
	import { toast } from 'svelte-sonner';
	import Form from './form.svelte';
	import * as Card from '@/components/ui/card';
	import Container from '@/components/Home/Container.svelte';
	import type { ActionData } from './$types.js';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import Triangle from '@/components/svgs/triangle.svelte';
	import Button from '@/components/ui/button/button.svelte';

	export let data;
	export let form: ActionData;
	
	$: {
		if (form?.success) {
			toast.success(form.message);
		}
		if (form?.failed) {
			toast.error(form.message);
		}
	}
</script>

<main class="mt-10">
	<Container>
		<h1 class="mb-3 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
			Send Automated Mails
		</h1>
<!-- <button class="w-full"> -->
	<Alert.Root variant="destructive" class="mb-3">
		<Triangle class="h-4 w-4" />
		<Alert.Title>You are Not Logged in</Alert.Title>
		<Alert.Description>Don't send bulk mails without logging in. This is just for testing  purposes. <a class="text-primary hover:underline" href="/auth">Login to send bulk mails. </a></Alert.Description>
	</Alert.Root>
<!-- </button> -->


		<Card.Root class="container py-10">
			<Form data={data.form} />
		</Card.Root>
	</Container>
</main>
