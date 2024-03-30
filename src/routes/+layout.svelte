<script>
	import '../app.pcss';
	import '@fontsource-variable/inter';
	import { Toaster } from '$lib/components/ui/sonner';
	import { ModeWatcher } from "mode-watcher";
	import LightSwitch from '@/components/ui/light-switch/light-switch.svelte';
</script>
<slot class="font-inter" />
<Toaster />
<ModeWatcher defaultMode="dark" />
