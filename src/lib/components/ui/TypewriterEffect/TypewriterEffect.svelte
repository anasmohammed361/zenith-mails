<script lang="ts">
	import { cn } from '$lib/utils';
	import { Motion } from 'svelte-motion';

	export let words: {
		text: string;
		className?: string;
	}[];
	export let className: string | undefined = undefined;
	export let cursorClassName: string | undefined = undefined;

	const wordsArray = words.map((word) => {
		return {
			...word,
			text: word.text.split('')
		};
	});
</script>

<div class={cn('text-center text-base font-bold sm:text-xl md:text-3xl lg:text-5xl', className)}>
	<Motion
		let:motion
		animate={{
			display: 'inline-block',
			opacity: 1
		}}
		transition={{
			duration: 0.3,
			delay: 0.1,
			ease: 'easeInOut',
			staggerChildren: 0.1
		}}
	>
		<div use:motion class="inline">
			{#each wordsArray as word, idx (`word-${idx}`)}
				<div class="inline-block">
					{#each word.text as char, index (`char-${index}`)}
						<Motion let:motion initial={{}}>
							<span
								use:motion
								class={cn(`hidden text-black opacity-0 dark:text-white`, word.className)}
							>
								{char}
							</span>
						</Motion>
					{/each}
					&nbsp;
				</div>
			{/each}
		</div>
	</Motion>
	<Motion
		let:motion
		initial={{
			opacity: 0
		}}
		animate={{
			opacity: 1
		}}
		transition={{
			duration: 0.8,
			repeat: Infinity,
			repeatType: 'reverse'
		}}
	>
		<span
			use:motion
			class={cn('inline-block h-4 w-[4px] rounded-sm bg-blue-500 md:h-6 lg:h-10', cursorClassName)}
		></span>
	</Motion>
</div>