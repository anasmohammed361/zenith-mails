<script lang="ts">
	import Icon from '@iconify/svelte';
	import { badgeVariants } from '$lib/components/ui/badge';
	import { fade } from 'svelte/transition';
	import { cn } from '@/utils';
	import { z } from 'zod';
	import { toast } from 'svelte-sonner';
	export let inputTags: string[]=[];
	import * as Form from '$lib/components/ui/form';
	import type { SuperForm } from 'sveltekit-superforms';

	export let form: SuperForm<
		{
			toAddresses: string[];
		} & any
	>;
	let currentInput = '';
	function add() {
		if (!z.string().email().safeParse(currentInput).success) {
			toast.error('Please enter a valid email address');
			return;
		}
		if (inputTags.includes(currentInput)) {
			toast.error('Email already added');
			return;
		}
		inputTags = [...inputTags, currentInput];
		currentInput = '';
	}
	function remove(index: number) {
		inputTags = inputTags?.filter((_, i) => i !== index);
	}
</script>

<div class="flex flex-col items-start justify-center gap-2">
	<div
		class="text-magnum-700 focus-within:ring-magnum-400 flex min-h-10 min-w-[280px] flex-row flex-wrap gap-2.5 rounded-md bg-primary-foreground px-3
      py-2 focus-within:ring"
	>
		{#if inputTags?.length === 0}
			<p class="text-sm text-muted-foreground">
				Your Emails are listed here. Start typing Below.....
			</p>
		{:else}
			{#each inputTags as t, i}
				<Form.ElementField {form} name="toAddresses[{i}]">
					<Form.Control let:attrs>
						<div
							transition:fade={{ duration: 300 }}
							class={cn(badgeVariants({ variant: 'default' }), `cursor-pointer hover:bg-primary`)}
						>
							<input
								{...attrs}
								type="text"
								class="flex items-center border-r border-white/10 bg-primary px-1.5 hover:bg-primary"
								bind:value={inputTags[i]}
							/>
							<Form.FieldErrors />
							<button
								on:click={() => remove(i)}
								class="enabled:hover:bg-magnum-300 flex h-full items-center px-1"
							>
								<Icon icon="ri:close-fill" class="size-3" />
							</button>
						</div>
					</Form.Control>
				</Form.ElementField>
			{/each}
		{/if}
	</div>

	<div class="flex w-full gap-4">
		<input
			type="text"
			bind:value={currentInput}
			on:keydown={(e) => {
				if (e.key === 'Enter') {
					add();
					e.preventDefault();
				}
			}}
			placeholder="Enter Emails..."
			class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
		/>
		<!-- <Button size="icon" on:click={add} variant="outline"><Icon icon="mingcute:add-fill" class="size-4" /></Button> -->
	</div>
</div>
