<script lang="ts">
	import { toast } from 'svelte-sonner';
	import Form from './form.svelte';
	import * as Card from '@/components/ui/card';
	import Container from '@/components/Home/Container.svelte';
	import type { ActionData } from './$types.js';

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
		<h1
			class="mb-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
		>
			Send Automated Mails
		</h1>
		<Card.Root class="container py-10">
			<Form data={data.form} />
		</Card.Root>
	</Container>
</main>
