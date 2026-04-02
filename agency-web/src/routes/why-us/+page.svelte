<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	let visible = $state(false);

	onMount(() => {
		visible = true;
	});

	const values = [
		{ title: 'Global Excellence', desc: 'Operating across Pakistan, Dubai, and Saudi Arabia with unified international standards.', icon: '🌍' },
		{ title: 'Innovation First', desc: 'We don\'t just follow trends; we set them through high-performance software architecture.', icon: '💡' },
		{ title: 'Client Centric', desc: 'Your success is our metric. We build partnerships, not just projects.', icon: '🤝' }
	];
</script>

<svelte:head>
	<title>Why Coded Clouds? | Our Values & Expertise</title>
</svelte:head>

<Navbar />

<main class="pt-32 pb-24 bg-white min-h-screen">
	<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if visible}
			<div class="text-center mb-20" in:fly={{ y: 20, duration: 800 }}>
				<h1 class="text-5xl md:text-7xl font-black text-gray-900 mb-6">Why Choose <br/><span class="text-blue-600">Coded Clouds?</span></h1>
				<p class="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
					We combine world-class engineering with deep localized expertise to help multinational enterprises scale with confidence.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8" in:fade={{ delay: 400 }}>
				{#each values as value}
					<div class="p-10 rounded-[2.5rem] bg-slate-50 border border-gray-50 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500">
						<div class="text-4xl mb-6">{value.icon}</div>
						<h3 class="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
						<p class="text-gray-600 leading-relaxed">{value.desc}</p>
					</div>
				{/each}
			</div>

			<div class="mt-24 p-12 lg:p-20 rounded-[3rem] bg-blue-600 text-white relative overflow-hidden" in:fly={{ y: 50, delay: 800 }}>
				<div class="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
				<div class="relative z-10 max-w-3xl">
					<h2 class="text-4xl md:text-5xl font-black mb-8">Our Multinational <br/> Legacy.</h2>
					<p class="text-xl text-blue-100 leading-relaxed mb-10">
						Strategically headquartered in Lahore, with strong operational hubs in Dubai and Riyadh, we understand the unique digital landscapes of the MEASA region like no one else.
					</p>
					<a href="/contact" class="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-2xl shadow-xl hover:bg-blue-50 transition-all">
						JOIN OUR JOURNEY
					</a>
				</div>
			</div>
		{/if}
	</div>
</main>
