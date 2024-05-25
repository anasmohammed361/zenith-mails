<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';
	import { appStore } from '@/stores/app-store';
	import type { Selected } from 'bits-ui';

	const providers = [
		{ value: 'google', label: 'Google' },
		{ value: 'custom', label: 'Custom' }
	];

    $:selectedProvider = providers.find((item) => item.value === $appStore.provider);
    const handleSelectChange = (e: Selected<string> | undefined) => {
        if (e) {
            $appStore.provider = e.value as 'google' | 'custom';
        }
    };
</script>

<Select.Root selected={selectedProvider} onSelectedChange={handleSelectChange}>
	<Select.Trigger class="">
		<Select.Value placeholder="Select a provider" />
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			<Select.Label>providers</Select.Label>
			{#each providers as provider}
				<Select.Item value={provider.value} label={provider.label}>{provider.label}</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
	<Select.Input name="favoriteprovider" />
</Select.Root>
