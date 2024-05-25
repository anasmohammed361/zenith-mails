<script lang="ts">
	import Dashboard from "@/components/layouts/Dashboard.svelte";
	export let data;
</script>

<Dashboard session={data.session}>
	<slot/>
</Dashboard>