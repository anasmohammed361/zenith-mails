<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import Dashboard from '../svgs/dashboard.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import Analytics from '../svgs/analytics.svelte';
	import { cn } from '@/utils';
	import { page } from '$app/stores';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import type { Session } from '@auth/sveltekit';
	import { signOut } from '@auth/sveltekit/client';
	import Logout from '../svgs/logout.svelte';
	import Data from '../svgs/data.svelte';
	import Template from '../svgs/template.svelte';
	import Hamburger from '../svgs/hamburger.svelte';
	import SendMail from '../svgs/send-mail.svelte';
	import ThemeSwitcher from '../globals/theme-switcher.svelte';

	const sideBarItems: {
		title: string;
		icon: any;
		badge?: number;
		href: string;
		disabled?: boolean;
	}[] = [
	
		{
			title: 'Mails',
			icon: SendMail,
			href: '/app'
		},	{
			title: 'Dashboard',
			icon: Dashboard,
			href: '/dashboard',
			disabled: true
		},
		{
			title: 'Analytics',
			icon: Analytics,
			href: '/analytics',
			disabled: true
		},
		{
			title: 'Data Imports',
			icon: Data,
			href: '/data',
			disabled: true
		},
		{
			title: 'Templates',
			icon: Template,
			href: '/templates',
			disabled: true
		}
	];

	export let session: Session | undefined | null = undefined;
</script>

<div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] no-scrollbar overflow-y-hidden">
	<div class="hidden border-r bg-muted/40 md:block">
		<div class="flex h-full  max-h-screen flex-col gap-2">
			<div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
				<a href="/" class="flex items-center gap-2 font-semibold">
					<!-- <Package2 class="h-6 w-6" /> -->
					<span class="">Zenith Mails</span>
				</a>
			</div>
			<div class="flex-1">
				<nav class="grid items-start px-2 text-sm font-medium lg:px-4">
					{#each sideBarItems as item}
						<a
							aria-disabled={item.disabled}
							href={item.disabled ? '#' : item.href}
							class={cn(
								'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all',
								!item.disabled && 'hover:text-primary',
								item.disabled && 'text-muted-foreground',
								item.href === $page.url.pathname && 'bg-muted text-primary'
							)}
						>
							{#if item.icon}
								<svelte:component this={item.icon} />
							{/if}

							{item.title}
							{#if item.badge}
								<Badge
									class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
								>
									{item.badge}
								</Badge>
							{/if}
							{#if item.disabled}
								<Badge class="ml-auto">coming soon</Badge>
							{/if}
						</a>
					{/each}
				</nav>
			</div>
			<div class="mt-auto p-4">
				<Card.Root>
					<Card.Header class="p-2 pt-0 md:p-4">
						<Card.Title
							>Powered by <a target="_blank" href="https://www.webzenith.tech/">Webzenith</a
							></Card.Title
						>
						<Card.Description>
							This is made possible by the amazing team at Webzenith.
						</Card.Description>
					</Card.Header>
					<Card.Content class="p-2 pt-0 md:p-4 md:pt-0">
						<Button href="https://www.webzenith.tech/" target="_blank" size="sm" class="w-full"
							>Get in Touch</Button
						>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</div>
	<div class="flex flex-col">
		<header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
			<Sheet.Root>
				<Sheet.Trigger asChild let:builder>
					<Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
						<Hamburger />
						<span class="sr-only">Toggle navigation menu</span>
					</Button>
				</Sheet.Trigger>
				<Sheet.Content side="left" class="flex flex-col">
					<nav class="grid items-start px-2 text-sm font-medium lg:px-4">
						{#each sideBarItems as item}
							<a
								aria-disabled={item.disabled}
								href={item.disabled ? '#' : item.href}
								class={cn(
									'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all',
									!item.disabled && 'hover:text-primary',
									item.disabled && 'text-muted-foreground',
									item.href === $page.url.pathname && 'bg-muted text-primary'
								)}
							>
								{#if item.icon}
									<svelte:component this={item.icon} />
								{/if}

								{item.title}
								{#if item.badge}
									<Badge
										class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
									>
										{item.badge}
									</Badge>
								{/if}
								{#if item.disabled}
									<Badge class="ml-auto">coming soon</Badge>
								{/if}
							</a>
						{/each}
					</nav>
					<div class="mt-auto">
						<Card.Root class="pt-3">
							<Card.Header class="p-2 pt-0 md:p-4">
								<Card.Title
									>Powered by <a target="_blank" href="https://www.webzenith.tech/">Webzenith</a
									></Card.Title
								>
								<Card.Description>
									This is made possible by the amazing team at Webzenith.
								</Card.Description>
							</Card.Header>
							<Card.Content class="p-2 pt-0 md:p-4 md:pt-0">
								<Button href="https://www.webzenith.tech/" target="_blank" size="sm" class="w-full"
									>Get in Touch</Button
								>
							</Card.Content>
						</Card.Root>
					</div>
				</Sheet.Content>
			</Sheet.Root>
			<div class="w-full flex-1"></div>
			<Button class="" variant="default" href="/app">Send Mails</Button>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} variant="secondary" size="icon" class="rounded-full">
						<Avatar.Root>
							<Avatar.Image src={session?.user?.image} alt="Profile" />
							<Avatar.Fallback
								>{session?.user?.name?.slice(0, 2) ||
									session?.user?.email?.slice(0, 2) ||
									'ZM'}</Avatar.Fallback
							>
						</Avatar.Root>

						<span class="sr-only">Toggle user menu</span>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Label
					><div class="flex flex-col space-y-1">
						<p class="text-sm font-medium leading-none">{session?.user?.name}</p>
						<p class="text-xs leading-none text-muted-foreground">{session?.user?.email}</p>
					</div></DropdownMenu.Label
					>
					<DropdownMenu.Separator />
					<ThemeSwitcher/>
					<DropdownMenu.Item
						on:click={() => {
							signOut();
						}}>Logout <span class="ml-auto"><Logout /></span></DropdownMenu.Item
					>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</header>
		<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 overflow-y-scroll max-h-[calc(100vh-4rem)] lg:p-6" id="custom-scrollbar">
			<slot />
		</main>
	</div>
</div>
