<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let visible = $state(false);
	let typewriterIndex = $state(0);
	const typewriterWords = ['SYSTEMS.', 'NETWORKS.', 'EXPERIENCES.', 'YOUR FUTURE.'];
	let currentWord = $state('');
	let isDeleting = $state(false);
	let typeSpeed = $state(150);

	function type() {
		const fullWord = typewriterWords[typewriterIndex];
		
		if (isDeleting) {
			currentWord = fullWord.substring(0, currentWord.length - 1);
			typeSpeed = 50;
		} else {
			currentWord = fullWord.substring(0, currentWord.length + 1);
			typeSpeed = 100;
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

	let mouseX = $state(0);
	let mouseY = $state(0);

	function handleMouseMove(e: MouseEvent) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	}

	onMount(() => {
		visible = true;
		type();
	});
</script>

<svelte:window onmousemove={handleMouseMove} />

<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
	<!-- 1. Mesh Gradient Experience -->
	<div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
		<div class="mesh-blob mesh-1"></div>
		<div class="mesh-blob mesh-2"></div>
		<div class="mesh-blob mesh-3"></div>
		<div class="mesh-blob mesh-4"></div>
		<!-- Grain Overlay -->
		<div class="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>
	</div>

	<!-- 2. Architectural Grid Overlay with Spotlight -->
	<div 
		class="absolute inset-0 z-10 pointer-events-none opacity-[0.15]"
		style="background-image: radial-gradient(circle at {mouseX}px {mouseY}px, rgba(59, 130, 246, 0.4) 0%, transparent 40%), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIuNSI+PHBhdGggZD0iTTYwIDBIMHY2MGg2MFYwek0wIDYwaDYwVjBIMHY2MHoiLz48L2c+PC9nPjwvc3ZnPg=='); background-size: cover, 60px 60px;"
	></div>

	<div class="max-w-6xl mx-auto px-6 pt-40 pb-20 relative z-20">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
			
			<!-- Left Column: Content -->
			<div class="lg:col-span-7 text-left space-y-6">
				{#if visible}
					<!-- Brand Reveal -->
					<div in:fade={{ duration: 1000 }} class="flex items-center gap-4 group cursor-default">
						<div class="h-[1px] w-10 bg-blue-600 transition-all group-hover:w-16"></div>
						<span class="text-[9px] font-bold tracking-[0.4em] uppercase text-blue-600/80">Coded Clouds Agency</span>
					</div>

					<!-- Main Headline -->
					<div in:fly={{ y: 20, duration: 1000, delay: 200 }} class="relative">
						<h1 class="text-4xl md:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight">
							WE ARCHITECT <br />
							<span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-400">
								{currentWord}<span class="text-blue-600 animate-pulse">_</span>
							</span>
						</h1>
					</div>

					<!-- Subtext -->
					<div in:fade={{ duration: 1000, delay: 400 }} class="max-w-lg">
						<p class="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
							Engineering elite software ecosystems that scale effortlessly across global markets. From Pakistan to the UAE, we build the digital infrastructure of tomorrow.
						</p>
					</div>

					<!-- Actions -->
					<div in:fade={{ duration: 1000, delay: 600 }} class="flex flex-col sm:flex-row items-center gap-4 pt-2">
						<a 
							href="/contact" 
							class="group relative w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold transition-all hover:scale-[1.02] hover:bg-blue-700 active:scale-95 flex items-center justify-center overflow-hidden"
						>
							<span class="relative z-10">INITIATE PROJECT</span>
							<div class="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 linear"></div>
						</a>
						<button class="w-full sm:w-auto px-8 py-4 border-2 border-slate-100 text-slate-800 rounded-2xl font-bold backdrop-blur-sm transition-all hover:border-blue-200 hover:bg-blue-50/50 flex items-center justify-center">
							VIEW ARCHIVE
						</button>
					</div>

					<!-- Trusted Clients Social Proof -->
					<div in:fade={{ duration: 1000, delay: 800 }} class="flex flex-col sm:flex-row items-center gap-5 pt-8 border-t border-slate-50">
						<!-- Avatar Stack -->
						<div class="flex -space-x-3 items-center">
							<div class="w-10 h-10 rounded-full border-2 border-white bg-blue-100 overflow-hidden ring-4 ring-blue-50/30">
								<img src="https://i.pravatar.cc/100?u=1" alt="Client 1" class="w-full h-full object-cover" />
							</div>
							<div class="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 overflow-hidden ring-4 ring-blue-50/30">
								<img src="https://i.pravatar.cc/100?u=2" alt="Client 2" class="w-full h-full object-cover" />
							</div>
							<div class="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden ring-4 ring-blue-50/30">
								<img src="https://i.pravatar.cc/100?u=3" alt="Client 3" class="w-full h-full object-cover" />
							</div>
							<div class="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center ring-4 ring-blue-50/30 z-10 transition-transform hover:scale-110">
								<span class="text-[9px] font-bold text-white uppercase italic">+50</span>
							</div>
						</div>
						
						<!-- Proof Text -->
						<div class="text-left">
							<div class="flex items-center gap-1 mb-0.5">
								{#each Array(5) as _}
									<svg class="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
								{/each}
							</div>
							<p class="text-[11px] font-bold text-slate-800 tracking-tight">Trusted by 50+ Global Enterprises</p>
							<p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Pakistan · UAE · UK</p>
						</div>
					</div>
				{/if}
			</div>

			<!-- Right Column: Visual Component -->
			<div class="lg:col-span-5 relative">
				{#if visible}
					<div class="relative w-full aspect-square flex items-center justify-center" in:fade={{ duration: 1500, delay: 800 }}>
						<!-- Centerpiece Image with Float -->
						<div class="relative z-20 animate-float">
							<img 
								src="/images/Whisk_bab681451ce2130a0da460fdae48800adr-removebg-preview.png" 
								alt="Coded Clouds Architecture" 
								class="w-full max-w-md mx-auto drop-shadow-[0_40px_80px_rgba(37,99,235,0.15)]"
							/>
						</div>

						<!-- Bento Glass Cards -->
						<!-- Card 1: System Status -->
						<div 
							in:fly={{ y: 20, duration: 1000, delay: 1200 }}
							class="absolute top-0 -right-4 md:-right-8 p-4 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl z-30 animate-pulse-slow"
						>
							<div class="flex items-center gap-3">
								<div class="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
								<div class="text-xs font-bold tracking-widest text-slate-800">SYSTEM: ONLINE</div>
							</div>
						</div>

						<!-- Card 2: Scale Stats -->
						<div 
							in:fly={{ x: -20, duration: 1000, delay: 1400 }}
							class="absolute bottom-12 -left-4 md:-left-12 p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl z-30"
						>
							<div class="space-y-1">
								<div class="text-3xl font-black text-blue-600">100+</div>
								<div class="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Nodes Deployed</div>
							</div>
						</div>

						<!-- Decorative Rings -->
						<div class="absolute inset-0 border border-blue-100 rounded-full animate-spin-slow opacity-50"></div>
						<div class="absolute inset-4 border border-indigo-50 rounded-full animate-reverse-spin opacity-30"></div>
					</div>
				{/if}
			</div>

		</div>
	</div>
</section>

<style>
	@reference "../../routes/layout.css";

	/* 1. Mesh Gradient Styles */
	.mesh-blob {
		position: absolute;
		width: 800px;
		height: 800px;
		border-radius: 50%;
		filter: blur(120px);
		opacity: 0.4;
		z-index: 0;
	}

	.mesh-1 {
		background: radial-gradient(circle, #3b82f6 0%, transparent 70%);
		top: -20%;
		right: -10%;
		animation: mesh-move-1 20s infinite alternate cubic-bezier(0.45, 0.05, 0.55, 0.95);
	}

	.mesh-2 {
		background: radial-gradient(circle, #818cf8 0%, transparent 70%);
		bottom: -10%;
		left: -5%;
		animation: mesh-move-2 25s infinite alternate-reverse cubic-bezier(0.45, 0.05, 0.55, 0.95);
	}

	.mesh-3 {
		background: radial-gradient(circle, #60a5fa 0%, transparent 70%);
		top: 40%;
		left: 20%;
		animation: mesh-move-3 18s infinite linear;
	}

	.mesh-4 {
		background: radial-gradient(circle, #bfdbfe 0%, transparent 70%);
		bottom: 20%;
		right: 15%;
	}

	@keyframes mesh-move-1 {
		from { transform: translate(0, 0) scale(1); }
		to { transform: translate(100px, 50px) scale(1.1); }
	}

	@keyframes mesh-move-2 {
		from { transform: translate(0, 0) rotate(0deg); }
		to { transform: translate(-50px, 100px) rotate(15deg); }
	}

	@keyframes mesh-move-3 {
		0% { transform: translate(0, 0); }
		50% { transform: translate(100px, -100px); }
		100% { transform: translate(0, 0); }
	}

	/* 2. Textures */
	.bg-noise {
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Y%3Cfilter id='noiseFilter'%3Y%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3Y%3C/filter%3Y%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3Y%3C/svg%3Y");
	}

	/* 3. Utility Animations */
	@keyframes float {
		0%, 100% { transform: translateY(0) rotate(0deg); }
		50% { transform: translateY(-20px) rotate(1deg); }
	}

	.animate-float {
		animation: float 6s ease-in-out infinite;
	}

	@keyframes spin-slow {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}

	.animate-spin-slow {
		animation: spin-slow 20s linear infinite;
	}

	@keyframes reverse-spin {
		from { transform: rotate(360deg); }
		to { transform: rotate(0deg); }
	}

	.animate-reverse-spin {
		animation: reverse-spin 25s linear infinite;
	}

	.animate-pulse-slow {
		animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.9; transform: scale(0.98); }
	}
</style>

