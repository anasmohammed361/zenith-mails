<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import Github from '@/components/svgs/github.svelte';
	import Google from '@/components/svgs/google.svelte';
	import { signIn } from '@auth/sveltekit/client';
	
</script>

<section class="grid min-h-[calc(100vh-16rem)]  place-items-center">
	<div class="space-y-5">
		<h2
			class="scroll-m-20 text-center text-3xl font-bold tracking-tight transition-colors first:mt-0"
		>
			Zenith Mails
		</h2>
		<Card.Root class="w-96">
			<Card.Header>
				<Card.Title class="text-2xl text-center">Authenticate</Card.Title>
				<Card.Description class="text-center">Choose your favourite Provider.</Card.Description>
			</Card.Header>
			<Card.Content class="grid gap-4">
				<Button
					class="flex w-full items-center"
					on:click={() => {
						signIn('google');
					}}
				>
					<Google class="mr-2 h-5 w-5" />
					Continue with Google</Button
				>
				<Button
					class="flex w-full items-center"
					on:click={() => {
						signIn('github');
					}}
				>
					<Github  class="mr-2 h-5 w-5" />
					Continue with Github</Button
				>
			</Card.Content>
		</Card.Root>
	</div>
</section>
