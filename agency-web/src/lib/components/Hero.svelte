<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let visible = $state(false);
	let typewriterIndex = $state(0);
	const typewriterWords = ['LAUNCHING.', 'BUILDING.', 'INNOVATING.', 'SCALING.'];
	let currentWord = $state('');
	let isDeleting = $state(false);
	let typeSpeed = $state(150);

	function type() {
		const fullWord = typewriterWords[typewriterIndex];
		
		if (isDeleting) {
			currentWord = fullWord.substring(0, currentWord.length - 1);
			typeSpeed = 100;
		} else {
			currentWord = fullWord.substring(0, currentWord.length + 1);
			typeSpeed = 200;
		}

		if (!isDeleting && currentWord === fullWord) {
			isDeleting = true;
			typeSpeed = 2000; // Pause at end
		} else if (isDeleting && currentWord === '') {
			isDeleting = false;
			typewriterIndex = (typewriterIndex + 1) % typewriterWords.length;
			typeSpeed = 500;
		}

		setTimeout(type, typeSpeed);
	}

	onMount(() => {
		visible = true;
		type();
	});
</script>

<section class="relative min-h-[70vh] pt-28 pb-12 flex flex-col items-center overflow-hidden bg-white">
	<!-- Background Subtle Blur -->
	<div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-50/20 rounded-full blur-[100px] -z-10"></div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
		{#if visible}
			<div in:fly={{ y: 20, duration: 800 }}>
				<h1 class="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[1] mb-6">
					<span class="text-gray-400 block mb-2">STOP PLANNING.</span> 
					<span class="text-gray-900">START <span class="text-blue-600 inline-block min-w-[280px] text-left">{currentWord}<span class="animate-pulse">|</span></span></span>
				</h1>
			</div>

			<div in:fade={{ duration: 1000, delay: 400 }}>
				<p class="mt-4 text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-medium tracking-tight">
					We build premium software solutions that go live fast and scale effortlessly across the globe.
				</p>
			</div>

			<div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6" in:fade={{ duration: 1000, delay: 600 }}>
				<button class="btn-primary px-12 py-4 text-lg shadow-2xl shadow-blue-200">
					GET A QUOTE
				</button>
				<button class="btn-outline px-12 py-4 text-lg">
					OUR PORTFOLIO
				</button>
			</div>
		{/if}
	</div>

	<!-- New Hero Image (Whisk Asset) at the Bottom -->
	<div class="relative w-full max-w-5xl mx-auto mt-16 md:mt-24 px-4 flex justify-center" in:fly={{ y: 100, duration: 1000, delay: 800 }}>
		<div class="relative group">
			<!-- Subtle glow behind the main asset -->
			<div class="absolute inset-0 bg-blue-400/10 blur-3xl rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
			
			<img 
				src="/images/Whisk_bab681451ce2130a0da460fdae48800adr-removebg-preview.png" 
				alt="Coded Clouds Premium Interface" 
				class="w-full h-auto object-contain transform hover:scale-[1.01] transition-all duration-700 select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(79,128,240,0.15)]"
			/>
		</div>
	</div>
</section>

<style>
	@reference "../../routes/layout.css";

	.btn-primary {
		@apply bg-blue-600 text-white rounded-2xl font-bold shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center;
	}

	.btn-outline {
		@apply border-2 border-gray-100 text-gray-900 rounded-2xl font-bold bg-white/50 backdrop-blur-sm shadow-sm hover:border-blue-600 hover:text-blue-600 hover:-translate-y-1 transition-all flex items-center justify-center;
	}
</style>

