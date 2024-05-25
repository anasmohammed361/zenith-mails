<script lang="ts">
	import { appStore } from '@/stores/app-store';
	import Input from '../ui/input/input.svelte';
	import { z } from 'zod';
	import { toast } from 'svelte-sonner';
	import { fade } from 'svelte/transition';
	import { badgeVariants } from '../ui/badge';
	import { cn } from '@/utils';
	import Exit from '../svgs/exit.svelte';

	let currentUrl = '';
	function add() {
		const parsedUrl = z.string().url().safeParse(currentUrl);
		if (!parsedUrl.success) {
			toast.error('Please enter a valid url');
			return;
		}
		if ($appStore.attachments.includes(currentUrl)) {
			toast.error('Url already added');
			return;
		}
		$appStore.attachments = [...$appStore.attachments, currentUrl];
		currentUrl = '';
	}
    function remove(index:number) {
        $appStore.attachments = $appStore.attachments.filter((_, i) => i !== index);
    }
</script>
<div
		class="text-magnum-700 mb-3 focus-within:ring-magnum-400 flex min-h-10 min-w-[280px] flex-row flex-wrap gap-2.5 rounded-md bg-primary-foreground px-3
      py-2 focus-within:ring"
	>
		{#if $appStore.attachments.length === 0}
			<p class="text-sm text-muted-foreground">
				Your Attachments are listed here. Start typing Below.....
			</p>
		{:else}
			{#each $appStore.attachments as t, i}
						<div
							transition:fade={{ duration: 300 }}
							class={cn(badgeVariants({ variant: 'default' }), `cursor-pointer hover:bg-primary`)}
						>
                            <p class="flex items-center border-r border-white/10 bg-primary px-1.5 hover:bg-primary">
                            {t}
                            </p>
							<button
                                type="button"
								on:click={() => remove(i)}
								class="enabled:hover:bg-magnum-300 flex h-full items-center px-1"
							>
                                <Exit class="size-3" />
							</button>
						</div>
			
			{/each}
		{/if}
	</div>
<Input
	type="text"
	bind:value={currentUrl}
	on:keydown={(e) => {
        if (e.key === 'Enter') {
            add();
            e.preventDefault();
		}
	}}
	placeholder="Paste your Document Url and press Enter"
/>
