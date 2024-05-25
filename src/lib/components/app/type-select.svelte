<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';
	import { appStore } from '@/stores/app-store';
	import type { Selected } from 'bits-ui';
    
	const contentTypes = [
		{ value: 'text', label: 'Text' },
		{ value: 'html', label: 'Html' }
	];

    $:selectedItem = contentTypes.find((item)=>item.value === $appStore.contentType);
    const handleSelectChange  = (e:Selected<string>|undefined)=>{
        if (e) {
            $appStore.contentType = e.value  as 'text' | 'html'
        }
    }
</script>

<Select.Root selected={selectedItem} onSelectedChange={handleSelectChange}>
	<Select.Trigger >
		<Select.Value placeholder="Select a contentType" />
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			<Select.Label>contentTypes</Select.Label>
			{#each contentTypes as contentType}
				<Select.Item value={contentType.value} label={contentType.label}>{contentType.label}</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
	<Select.Input name="favoritecontentType" />
</Select.Root>
