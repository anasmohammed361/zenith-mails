<script lang="ts">
	import type { BlockToolConstructable } from '@editorjs/editorjs';
	import { createEditor } from './editorjs';
	import Header from '@editorjs/header';
	import List from '@editorjs/list';

	const { data, isReady, editor } = createEditor({
		autofocus: true,
		tools: {
			header: {
				class: Header as unknown as BlockToolConstructable,
				config: {
					placeholder: 'Enter a header',
					levels: [1, 2, 3, 4, 5, 6],
					defaultLevel: 1
				},
				inlineToolbar: true
			},
			list: {
				class: List as any,
				inlineToolbar: true
			}
		}
	});
</script>

<section class="container">
	<div class="prose" use:editor></div>
</section>
