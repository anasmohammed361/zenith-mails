<script lang="ts">
	import { createTagsInput, melt } from '@melt-ui/svelte';
	import Icon from '@iconify/svelte';
	import { badgeVariants } from '$lib/components/ui/badge';
	import { fade } from 'svelte/transition';
	import { cn } from '@/utils';
	import { z } from 'zod';
	import { toast } from 'svelte-sonner';
	export let inputTags: string[];
	import * as Form from '$lib/components/ui/form';
	import type { SuperForm } from 'sveltekit-superforms';
	export let form: SuperForm<{
		provider: 'google';
		contentType: 'text' | 'html';
		content: string;
		fromAddress: string;
		toAddresses: string[];
		subject: string;
		googleSmtpAppPassword: string;
		googleSmtpUserName: string;
	}>;
	const {
		elements: { root, input, tag, deleteTrigger, edit },
		states: { tags }
	} = createTagsInput({
		defaultTags: [...inputTags],
		unique: true,
		add(tag) {
			if (!z.string().email().safeParse(tag).success) {
				toast.error('Invalid email address');
				throw new Error('Invalid email address');
			}
			return { id: tag, value: tag };
		},
		addOnPaste: true,

	});
    tags.subscribe((tags) => {
        inputTags = tags.map((t) => t.value);
    })
    
</script>

<div class="flex flex-col items-start justify-center gap-2">
	<div
		use:melt={$root}
		class="text-magnum-700 focus-within:ring-magnum-400 flex min-h-10 min-w-[280px] flex-row flex-wrap gap-2.5 rounded-md bg-primary-foreground px-3
      py-2 focus-within:ring"
	>
		{#if $tags.length === 0}
			<p class="text-sm text-muted-foreground">
				Your Emails are listed here. Start typing Below.....
			</p>
		{:else}
			{#each $tags as t, i}
				<Form.ElementField {form} name="toAddresses[{i}]">
					
						<div
							transition:fade={{ duration: 300 }}
							use:melt={$tag(t)}
							
							class={cn(
								`bg-magnum-200 text-magnum-900 data-[disabled]:bg-magnum-300 data-[selected]:bg-magnum-400 flex items-center overflow-hidden
                            rounded-md [word-break:break-word] data-[disabled]:hover:cursor-default
                            data-[disabled]:focus:!outline-none data-[disabled]:focus:!ring-0`,
								badgeVariants({ variant: 'default' })
							)}
						>
							<span class="flex items-center border-r border-white/10 px-1.5">{t.value}</span>
							<button
								use:melt={$deleteTrigger(t)}
								class="enabled:hover:bg-magnum-300 flex h-full items-center px-1"
							>
								<Icon icon="ri:close-fill" class="size-3" />
							</button>
						</div>
					
				</Form.ElementField>
				<div
					use:melt={$edit(t)}
					class="flex items-center overflow-hidden rounded-md px-1.5 [word-break:break-word] data-[invalid-edit]:focus:!ring-red-500"
				/>
			{/each}
		{/if}
	</div>

	<div class="flex w-full gap-4">
		<input
			use:melt={$input}
			type="text"
			placeholder="Enter Emails..."
			class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
		/>
		<!-- <Button size="icon" on:click={add} variant="outline"><Icon icon="mingcute:add-fill" class="size-4" /></Button> -->
	</div>
</div>
