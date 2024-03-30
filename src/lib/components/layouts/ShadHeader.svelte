<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { buttonVariants } from '../ui/button';
	import Icon from '@iconify/svelte';
	import { LightSwitch } from '../ui/light-switch';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 max-w-screen-2xl items-center">
		<!-- <MainNav />
		<MobileNav /> -->
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Zenith Mails</h2>
		<div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
			<div class="w-full flex-1 md:w-auto md:flex-none">
				<!-- <CommandMenu /> -->
			</div>
			<nav class="flex items-center">
				<a
					href={'https://github.com/anasmohammed361/emailer-saas'}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div
						class={cn(
							buttonVariants({
								size: 'sm',
								variant: 'ghost'
							}),
							'w-9 px-0'
						)}
					>
						<Icon icon="mdi:github" class="size-6" />
						<span class="sr-only">GitHub</span>
					</div>
				</a>
			</nav>
			<LightSwitch />
		</div>
	</div>
</header>
