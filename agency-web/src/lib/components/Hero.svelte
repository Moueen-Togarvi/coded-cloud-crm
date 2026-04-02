<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let visible = $state(false);

	onMount(() => {
		visible = true;
	});
</script>

<section class="relative min-h-screen pt-20 flex flex-col items-center justify-center overflow-hidden bg-slate-50">
	<!-- Background Decorations -->
	<div class="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -z-10"></div>
	<div class="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-8 z-10">
		{#if visible}
			<div in:fly={{ y: 20, duration: 800, delay: 200 }}>
				<h1 class="text-4xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
					<span class="text-gray-400">STOP PLANNING.</span> 
					<span class="text-gray-900">START LAUNCHING.</span><br/>
					<span class="text-gray-900">WE BUILD APPS THAT GO LIVE FAST</span>
				</h1>
			</div>

			<div in:fade={{ duration: 1000, delay: 600 }}>
				<p class="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
					We craft AI-powered software solutions that help startups and SMEs move faster and grow smarter in the digital age.
				</p>
			</div>

			<div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4" in:fade={{ duration: 1000, delay: 1000 }}>
				<button class="btn-outline px-10 py-3.5">
					VIEW PORTFOLIO
				</button>
				<button class="btn-primary px-10 py-3.5">
					GET A QUOTE
				</button>
			</div>
		{/if}
	</div>

	<!-- Hero Image Container (Isometric 3D) -->
	<div class="relative w-full max-w-6xl mx-auto mt-8 md:mt-16 px-4 pb-20" in:fly={{ y: 50, duration: 1200, delay: 1400 }}>
		<div class="relative rounded-3xl shadow-2xl shadow-blue-200/50 overflow-hidden border-8 border-white/50 glass">
			<img 
				src="/images/hero_bg.png" 
				alt="Coded Clouds Digital Ecosystem" 
				class="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
			/>
		</div>
		
		<!-- Floating Elements (Simulated) -->
		<div class="absolute -top-12 -left-8 w-24 h-24 bg-white/80 rounded-2xl shadow-xl flex items-center justify-center animate-bounce duration-[3000ms] delay-500">
			<div class="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M11 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/><path d="M15.5 16.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>
			</div>
		</div>
		<div class="absolute bottom-1/4 -right-12 w-32 h-16 glass rounded-2xl shadow-xl p-3 flex items-center gap-3 animate-pulse">
			<div class="w-8 h-8 bg-blue-500 rounded-full"></div>
			<div class="flex-1 space-y-1">
				<div class="w-full h-1.5 bg-gray-200 rounded"></div>
				<div class="w-1/2 h-1.5 bg-gray-200 rounded"></div>
			</div>
		</div>
	</div>
</section>

<style>
	@reference "../../routes/layout.css";

	.btn-primary {
		@apply bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center;
	}

	.btn-outline {
		@apply border-2 border-slate-300 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center;
	}

	.glass {
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(8px);
	}
</style>
