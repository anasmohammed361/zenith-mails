<script lang="ts">
	import { createEditor } from './editorjs';
	import Header from '@editorjs/header';
	import List from '@editorjs/list';
	const { data, isReady, editor } = createEditor({
		tools: {
			header: Header,
			list: List
		}
	});
</script>

<section class="container">
    <div class="prose" use:editor></div>

</section>