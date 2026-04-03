<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let visible = $state(false);
	let typewriterIndex = $state(0);
	const typewriterWords = ['YOUR FUTURE.', 'IDEAS.', 'A LEGACY.', 'THE UNKNOWN.'];
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

<section class="relative h-screen min-h-[600px] pt-48 pb-12 flex items-center overflow-hidden bg-white">
	<!-- Background Subtle Blur -->
	<div class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/4"></div>
	<div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/20 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

	<!-- Add Starry Sky Animation -->
	<style>
		/* Starry Sky Animation */
		@keyframes twinkle {
			0%, 100% {
				opacity: 0.8;
			}
			50% {
				opacity: 0.2;
			}
		}

		@keyframes shooting-star {
			0% {
				transform: translate(0, 0);
				opacity: 1;
			}
			100% {
				transform: translate(100px, -100px);
				opacity: 0;
			}
		}

		.starry-sky {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
			z-index: -1;
		}

		.star {
			position: absolute;
			width: 2px;
			height: 2px;
			background: white;
			border-radius: 50%;
			animation: twinkle 2s infinite ease-in-out;
		}

		.shooting-star {
			position: absolute;
			width: 3px;
			height: 3px;
			background: white;
			border-radius: 50%;
			animation: shooting-star 2s infinite ease-in-out;
		}
	</style>

	<script>
		// Generate stars dynamically
		import { onMount } from 'svelte';

		let stars = [];
		let shootingStars = [];

		function generateStars(count) {
			return Array.from({ length: count }, () => ({
				x: Math.random() * 100 + '%',
				y: Math.random() * 100 + '%',
			}));
		}

		onMount(() => {
			stars = generateStars(100);
			shootingStars = generateStars(5);
		});
	</script>

	<div class="starry-sky">
		{#each stars as star}
			<div
				class="star"
				style="top: {star.y}; left: {star.x}; animation-duration: {Math.random() * 2 + 1}s;"
			></div>
		{/each}
		{#each shootingStars as star}
			<div
				class="shooting-star"
				style="top: {star.y}; left: {star.x}; animation-duration: {Math.random() * 2 + 1}s;"
			></div>
		{/each}
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<!-- Text Content -->
			<div class="text-left">
				{#if visible}
					<div in:fly={{ x: -20, duration: 800 }}>
						<h2 class="text-blue-800 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 flex items-center gap-3">
							<span class="w-10 h-0.5 bg-blue-800"></span>
							ESTABLISHED 2026
						</h2>
						<h1 class="text-5xl md:text-6xl xl:text-7xl font-black text-black tracking-tighter leading-[1.1] mb-8">
							WE ARCHITECT <br />
							<span class="text-blue-600">{currentWord}<span class="animate-pulse">|</span></span>
						</h1>
					</div>

					<div in:fade={{ duration: 1000, delay: 400 }}>
						<p class="text-lg md:text-xl text-gray-500 max-w-lg font-medium tracking-tight leading-relaxed mb-10">
							We architect premium software ecosystems that scale effortlessly across global markets. From Pakistan to the UAE, we build the elite digital future.
						</p>
					</div>

					<div class="flex flex-col sm:flex-row items-center gap-4" in:fade={{ duration: 1000, delay: 600 }}>
						<a href="/contact" class="btn-primary w-full sm:w-auto px-10 py-4 text-base shadow-2xl shadow-blue-200">
							GET A QUOTE
						</a>
						<button class="btn-outline w-full sm:w-auto px-10 py-4 text-base">
							OUR PORTFOLIO
						</button>
					</div>
				{/if}
			</div>

			<!-- Hero Image Column -->
			<div class="relative hidden lg:block" in:fly={{ x: 30, duration: 1000, delay: 800 }}>
				<div class="relative group">
					<!-- Glow Effects -->
					<div class="absolute inset-0 bg-blue-500/10 rounded-full scale-110 opacity-100 transition-opacity duration-1000"></div>
					<div class="absolute -inset-2 bg-gradient-to-tr from-blue-600/5 to-transparent rounded-[2.5rem]"></div>
					
					<img 
						src="/images/Whisk_bab681451ce2130a0da460fdae48800adr-removebg-preview.png" 
						alt="Coded Clouds Premium Interface" 
						class="relative w-full max-w-lg mx-auto h-auto object-contain transform hover:scale-[1.01] transition-all duration-1000 select-none pointer-events-none drop-shadow-[0_25px_50px_rgba(79,128,240,0.15)]"
					/>
				</div>
			</div>
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
