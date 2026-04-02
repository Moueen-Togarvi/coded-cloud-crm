<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let visible = $state(false);

	onMount(() => {
		visible = true;
	});
</script>

<section id="animations" class="py-24 bg-white overflow-hidden relative">
	<!-- Animated Background Elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-50/20 rounded-full blur-[100px] animate-pulse"></div>
		<div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="flex flex-col lg:flex-row items-center gap-20">
			<!-- Text Content -->
			<div class="flex-1 space-y-8">
				{#if visible}
					<div in:fly={{ x: -50, duration: 1000 }}>
						<h2 class="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Innovation Lab</h2>
						<h3 class="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1]">
							We Bring Your <br /> 
							<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Ideas To Life</span> 
							<br /> Through Motion.
						</h3>
					</div>
					
					<p class="text-xl text-gray-600 leading-relaxed max-w-lg" in:fade={{ delay: 400 }}>
						Our custom software isn't just functional; it's intuitive and alive. We use high-fidelity micro-interactions to create memorable digital experiences.
					</p>

					<div class="flex gap-6" in:fade={{ delay: 800 }}>
						<button class="btn-primary px-10 py-4 shadow-xl shadow-blue-200">START TRANSFORMING</button>
					</div>
				{/if}
			</div>

			<!-- Large Animation Showcase -->
			<div class="flex-1 relative w-full h-[500px]">
				<!-- Floating Tech Cards with 3D animation -->
				<div class="absolute top-0 left-0 w-64 h-80 glass rounded-[2.5rem] border border-white shadow-2xl p-8 transform -rotate-12 animate-float hover:rotate-0 transition-transform duration-700">
					<div class="w-12 h-12 bg-blue-600 rounded-xl mb-6 shadow-lg shadow-blue-200 flex items-center justify-center text-white">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
					</div>
					<div class="space-y-3">
						<div class="w-full h-2 bg-gray-100 rounded-full"></div>
						<div class="w-2/3 h-2 bg-gray-100 rounded-full"></div>
						<div class="w-full h-2 bg-gray-100 rounded-full"></div>
					</div>
				</div>

				<div class="absolute bottom-10 right-0 w-72 h-48 glass rounded-[2.5rem] border border-white shadow-2xl p-8 transform rotate-6 animate-float-delayed hover:rotate-0 transition-transform duration-700">
					<div class="flex items-center gap-4 mb-6">
						<div class="w-10 h-10 bg-green-500 rounded-lg shadow-lg shadow-green-100"></div>
						<div class="space-y-1">
							<div class="w-24 h-2 bg-gray-100 rounded-full"></div>
							<div class="w-12 h-2 bg-gray-100 rounded-full"></div>
						</div>
					</div>
					<div class="w-full h-8 bg-blue-50/50 rounded-xl border border-blue-100/50"></div>
				</div>

				<!-- Central Orbiting Elements -->
				<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600 rounded-full shadow-[0_0_100px_rgba(37,99,235,0.4)] flex items-center justify-center text-white animate-pulse">
					<img src="/images/image-removebg-preview.png" alt="Coded Clouds" class="w-24 h-24 object-contain invert hue-rotate-180" />
				</div>
				
				<div class="absolute inset-0 border-2 border-dashed border-blue-100 rounded-full animate-spin-slow"></div>
				<div class="absolute inset-20 border-2 border-dotted border-blue-50 rounded-full animate-spin-reverse-slow"></div>
			</div>
		</div>
	</div>
</section>

<style>
	@reference "../../routes/layout.css";

	.glass {
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(16px);
	}

	@keyframes float {
		0%, 100% { transform: translateY(0) rotate(-12deg); }
		50% { transform: translateY(-20px) rotate(-10deg); }
	}

	@keyframes float-delayed {
		0%, 100% { transform: translateY(0) rotate(6deg); }
		50% { transform: translateY(20px) rotate(8deg); }
	}

	@keyframes spin-slow {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}

	@keyframes spin-reverse-slow {
		from { transform: rotate(360deg); }
		to { transform: rotate(0deg); }
	}

	.animate-float { animation: float 6s ease-in-out infinite; }
	.animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
	.animate-spin-slow { animation: spin-slow 20s linear infinite; }
	.animate-spin-reverse-slow { animation: spin-reverse-slow 25s linear infinite; }
</style>
