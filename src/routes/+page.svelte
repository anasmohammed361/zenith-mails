<script lang="ts">
	import Blog from '@/components/Home/Blog.svelte';
	import CallToAction from '@/components/Home/CallToAction.svelte';
	import Features from '@/components/Home/Features.svelte';
	import HeroSection from '@/components/Home/HeroSection.svelte';
	import Testimonials from '@/components/Home/Testimonials.svelte';
	import Stats from '@/components/Home/Stats.svelte';
	import Header from '@/components/layouts/Header.svelte';
	
</script>
<Header />
<main class="space-y-40 mb-40">
	<HeroSection/>
	<Features/>
	<Stats/>
	<Testimonials/>
	<CallToAction/>
	<Blog/>
</main>