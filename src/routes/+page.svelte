<script lang="ts">
	import { page } from "$app/stores";
</script>

<p>{$page.data.session?.user?.email}</p>