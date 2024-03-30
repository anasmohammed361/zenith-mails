<script lang="ts">
	import Container from './Container.svelte';
</script>

<div class="relative" id="home">
	<div
		aria-hidden="true"
		class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
	>
		<div
			class="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"
		></div>
		<div
			class="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"
		></div>
	</div>
	<Container>
		<div class="relative ml-auto pt-36">
			<div class="mx-auto text-center lg:w-2/3">
				<h1 class="text-5xl font-bold text-gray-900 dark:text-white md:text-6xl xl:text-7xl">
					Elevate Your Inbox <span class="text-base">with</span>
					<span class="text-primary dark:text-white"
						>Zenith <span class="text-lg">Mails.</span></span
					>
				</h1>
				<p class="mt-8 text-gray-700 dark:text-gray-300">
					Elevate your email game with WebZenith, the <a
						href="https://github.com/anasmohammed361/emailer-saas"
						target="_blank"
						class="text-primary underline">open source</a
					> email automation tool. Send personalized emails, automate campaigns, and track performance
					with ease.
				</p>
				<div class="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-4">
					<a
						href="/mail"
						class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
					>
						<span class="relative text-base font-semibold text-white">Get started</span>
					</a>
					<a
						href="#"
						class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
					>
						<span class="relative text-base font-semibold text-primary dark:text-white"
							>Learn more</span
						>
					</a>
				</div>
				<div
					class="mt-16 hidden justify-between border-y border-gray-100 py-8 dark:border-gray-800 sm:flex"
				>
					<div class="text-left">
						<h6 class="text-lg font-semibold text-gray-700 dark:text-white">The Cold Mailer</h6>

						<p class="mt-2 text-gray-500">
							Send hassle-free Cold emails 
						</p>
					</div>
					<div class="text-left">
						<h6 class="text-lg font-semibold text-gray-700 dark:text-white">
							Personalized
						</h6>
						<p class="mt-2 text-gray-500">Your Mails, Your Wish</p>
					</div>
					<div class="text-left">
						<h6 class="text-lg font-semibold text-gray-700 dark:text-white">Starter Templates</h6>
						<p class="mt-2 text-gray-500">Get Started with our Templates</p>
					</div>
				</div>
			</div>
			<!-- <div class="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
				<div class="p-4 grayscale transition duration-200 hover:grayscale-0">
					<img
						src="./images/clients/microsoft.svg"
						class="mx-auto h-12 w-auto"
						loading="lazy"
						alt="client logo"
						width=""
						height=""
					/>
				</div>
				<div class="p-4 grayscale transition duration-200 hover:grayscale-0">
					<img
						src="./images/clients/airbnb.svg"
						class="mx-auto h-12 w-auto"
						loading="lazy"
						alt="client logo"
						width=""
						height=""
					/>
				</div>
				<div class="flex p-4 grayscale transition duration-200 hover:grayscale-0">
					<img
						src="./images/clients/google.svg"
						class="m-auto h-9 w-auto"
						loading="lazy"
						alt="client logo"
						width=""
						height=""
					/>
				</div>
				<div class="p-4 grayscale transition duration-200 hover:grayscale-0">
					<img
						src="./images/clients/ge.svg"
						class="mx-auto h-12 w-auto"
						loading="lazy"
						alt="client logo"
						width=""
						height=""
					/>
				</div>
				<div class="flex p-4 grayscale transition duration-200 hover:grayscale-0">
					<img
						src="./images/clients/netflix.svg"
						class="m-auto h-8 w-auto"
						loading="lazy"
						alt="client logo"
						width=""
						height=""
					/>
				</div>
				<div class="p-4 grayscale transition duration-200 hover:grayscale-0">
					<img
						src="./images/clients/google-cloud.svg"
						class="mx-auto h-12 w-auto"
						loading="lazy"
						alt="client logo"
						width=""
						height=""
					/>
				</div>
			</div> -->
		</div>
	</Container>
</div>
