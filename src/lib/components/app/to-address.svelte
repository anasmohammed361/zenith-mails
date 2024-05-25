<script lang="ts">
	import Icon from '@iconify/svelte';
	import { badgeVariants } from '$lib/components/ui/badge';
	import { fade } from 'svelte/transition';
	import { cn } from '@/utils';
	import { z } from 'zod';
	import { toast } from 'svelte-sonner';
	import { read, utils } from 'xlsx';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import Button from '../ui/button/button.svelte';
	import Label from '../ui/label/label.svelte';
	import { appStore } from '@/stores/app-store';
	let currentInput = '';
	function add() {
		if (!z.string().email().safeParse(currentInput).success) {
			toast.error('Please enter a valid email address');
			return;
		}
		if ($appStore.toAddresses.includes(currentInput)) {
            toast.error('Email already added');
			return;
		}
        $appStore.toAddresses = [...$appStore.toAddresses, currentInput];
		currentInput = '';
	}
	function remove(index: number) {
		$appStore.toAddresses = $appStore.toAddresses.filter((_, i) => i !== index);
	}
	function handleFileChange(e: Event & {
    currentTarget: EventTarget & HTMLInputElement;
}) {
		if (e.currentTarget.files && e.currentTarget.files.length > 0) {
			const file = e.currentTarget.files.item(0)!;
			const reader = new FileReader();
			reader.onload = (e) => {
				const data = e.target?.result as string;
				const workbook = read(data, { type: 'binary' });
				const sheetName = workbook.SheetNames[0];
				if (!sheetName) {
					toast.error('No Sheet Name found.');
					return;
				}
				const sheet = workbook.Sheets[sheetName];
				if (!sheet) {
					toast.error('No Sheet found.');
					return;
				}
				const jsonData = utils.sheet_to_json(sheet, { header: 1 });
				const emails= jsonData.flat().filter((e) => z.string().email().safeParse(e).success) as string[];
				const emailsWithoutDuplicates = [...new Set([...$appStore.toAddresses, ...emails])];
				$appStore.toAddresses = emailsWithoutDuplicates
				toast.success('Emails added successfully');
			};
			reader.readAsArrayBuffer(file);
		}
	}
</script>

<div class="flex flex-col items-start justify-center gap-2">
	<div
		class="text-magnum-700 focus-within:ring-magnum-400 flex min-h-10 min-w-[280px] flex-row flex-wrap gap-2.5 rounded-md bg-primary-foreground px-3
      py-2 focus-within:ring"
	>
		{#if $appStore.toAddresses.length === 0}
			<p class="text-sm text-muted-foreground">
				Your Emails are listed here. Start typing Below.....
			</p>
		{:else}
			{#each $appStore.toAddresses as t, i}
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
								<Icon icon="ri:close-fill" class="size-3" />
							</button>
						</div>
			
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
			placeholder="Add Email and press Enter."
			class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
		/>
		<div class="flex gap-2">
			<Tooltip.Root openDelay={100}>
				<Tooltip.Trigger asChild let:builder>
					<Button builders={[builder]} size="icon" variant="outline" class=" p-0 ">
						<Label for="file" class={cn('grid h-full w-full cursor-pointer place-items-center')}
							><Icon icon="fluent:document-arrow-up-16-filled" class="size-4 " /></Label
						>
						<input
							on:change={handleFileChange}
							type="file"
							id="file"
							name="file"
							accept=".xlsx"
							alt="file"
							class="hidden"
						/>
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>Upload from Xl</p>
				</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root openDelay={100}>
				<Tooltip.Trigger asChild let:builder>
					<Button
						href="/sample_mails_zenith_mails.xlsx"
						target="_blank"
						builders={[builder]}
						size="icon"
						variant="outline"
						class=" "
					>
						<Icon icon="fluent:document-arrow-down-16-filled" class="size-4" />
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>Download Sample Document</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</div>
	</div>
</div>
