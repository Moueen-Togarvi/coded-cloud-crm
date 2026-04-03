<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let visible = $state(false);
	
	// Reactive Health Value
	let healthValue = $state(98);
	const healthTween = tweened(98, { duration: 1500, easing: cubicOut });

	// Reactive List Sorting/Cycling
	let stats = $state([
		{ name: 'Web Architecture', value: '98%', icon: 'globe', color: 'text-blue-500 bg-blue-50' },
		{ name: 'App Interface', value: '94%', icon: 'phone', color: 'text-sky-500 bg-sky-50' },
		{ name: 'CRM Systems', value: '88%', icon: 'database', color: 'text-indigo-500 bg-indigo-50' },
		{ name: 'POS Softwares', value: '92%', icon: 'shopping-cart', color: 'text-violet-500 bg-violet-50' }
	]);

	function cycleList() {
		const first = stats.shift();
		if (first) stats.push(first);
	}

	function fluctuateHealth() {
		const newVal = Math.floor(Math.random() * (100 - 94 + 1)) + 94;
		healthValue = newVal;
		healthTween.set(newVal);
	}

	onMount(() => {
		visible = true;
		
		const healthInterval = setInterval(fluctuateHealth, 3000);
		const listInterval = setInterval(cycleList, 4000);

		return () => {
			clearInterval(healthInterval);
			clearInterval(listInterval);
		};
	});

	// Derived offset for the dial
	let dashOffset = $derived(282.7 - (282.7 * $healthTween) / 100);
</script>

<section id="animations" class="py-24 bg-slate-50/50 overflow-hidden relative">
	<!-- Animated Background Glows -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[100px] animate-pulse"></div>
		<div class="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sky-100/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
			
			<!-- Left Column: Primary Text -->
			<div class="flex-1 space-y-10">
				{#if visible}
					<div in:fly={{ x: -30, duration: 1000 }}>
						<h2 class="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 flex items-center gap-3">
							<span class="w-10 h-0.5 bg-blue-600"></span>
							INNOVATION LAB
						</h2>
						<h3 class="text-4xl md:text-6xl font-black text-gray-900 leading-[1.05] tracking-tighter">
							We Bring Your <br /> 
							<span class="text-blue-600">Ideas To Life</span> <br /> 
							Through Motion.
						</h3>
					</div>
					
					<div in:fade={{ delay: 400, duration: 1000 }}>
						<p class="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg font-medium">
							Our custom software isn't just functional; it's intuitive and alive. We use high-fidelity micro-interactions to create memorable digital experiences.
						</p>
					</div>

					<div class="flex flex-wrap gap-4" in:fade={{ delay: 700, duration: 1000 }}>
						<button class="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all">
							START TRANSFORMING
						</button>
						<button class="px-10 py-4 border-2 border-gray-100 text-gray-900 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all">
							VIEW CASE STUDIES
						</button>
					</div>
				{/if}
			</div>

			<!-- Right Column: Dashboard Mosaic -->
			<div class="flex-1 relative w-full">
				{#if visible}
					<div class="grid grid-cols-2 gap-4 pointer-events-none select-none" in:fly={{ y: 50, duration: 1200, delay: 300 }}>

						<!-- ═══════════════════════════════════════════ -->
						<!-- LEFT PANEL — spans full left col (col 1)   -->
						<!-- ═══════════════════════════════════════════ -->
						<div class="flex flex-col gap-4">

							<!-- User Card -->
							<div class="bg-lime-400 rounded-[2rem] p-5 flex items-center gap-4 shadow-xl shadow-lime-900/10 animate-float">
								<div class="w-11 h-11 bg-white/30 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-white/50">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-lime-950"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
								</div>
								<div>
									<p class="text-[13px] font-black text-lime-950 uppercase tracking-widest leading-none mb-1">Hi, Hashim</p>
									<p class="text-[9px] font-bold text-lime-900/60 uppercase tracking-wider leading-none">FOUNDER & CEO | 7 SYSTEMS ACTIVE</p>
								</div>
							</div>

							<!-- Architecture Hub -->
							<div class="bg-white rounded-[2rem] p-6 shadow-xl shadow-blue-950/5 border border-gray-100 animate-float-delayed flex flex-col flex-1">
								<!-- Header -->
								<div class="flex items-center justify-between mb-6">
									<div>
										<h4 class="text-sm font-black text-gray-900 uppercase tracking-widest">Architecture Hub</h4>
										<p class="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Global Purity Index</p>
									</div>
									<div class="w-10 h-10 bg-black rounded-full flex-shrink-0 flex items-center justify-center text-white shadow-xl">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="animate-pulse"><path d="m13 2-2 10h9L7 22l2-10H3z"/></svg>
									</div>
								</div>

								<!-- Stats List -->
								<div class="space-y-3 flex-1">
									{#each stats as stat (stat.name)}
										<div class="flex items-center gap-3 w-full px-4 py-3.5 bg-gray-50 rounded-2xl border border-gray-100 group transition-all duration-500 hover:bg-white hover:shadow-lg">
											<!-- Icon -->
											<div class="w-9 h-9 {stat.color} rounded-xl flex-shrink-0 flex items-center justify-center shadow-inner">
												{#if stat.icon === 'globe'}
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
												{:else if stat.icon === 'phone'}
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
												{:else if stat.icon === 'database'}
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
												{:else}
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
												{/if}
											</div>
											<!-- Name + Badge -->
											<div class="flex-1 min-w-0">
												<p class="text-[11px] font-black text-gray-900 uppercase tracking-wider leading-none mb-1">{stat.name}</p>
												<div class="flex items-center gap-1.5">
													<span class="w-1.5 h-1.5 bg-lime-500 rounded-full animate-blink flex-shrink-0"></span>
													<span class="text-[8px] font-bold text-gray-400 uppercase tracking-widest">OPERATIONAL</span>
												</div>
											</div>
											<!-- Value -->
											<span class="text-[13px] font-black text-blue-600 flex-shrink-0">{stat.value}</span>
											<!-- Chevron -->
											<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="text-gray-300 flex-shrink-0"><path d="m9 18 6-6-6-6"/></svg>
										</div>
									{/each}
								</div>
							</div>
						</div>

						<!-- ═══════════════════════════════════════════ -->
						<!-- RIGHT PANEL — spans full right col (col 2)  -->
						<!-- ═══════════════════════════════════════════ -->
						<div class="flex flex-col gap-4">

							<!-- Health Dial Card -->
							<div class="bg-white rounded-[2rem] p-6 shadow-xl shadow-blue-950/5 border border-gray-100 flex items-center gap-5 animate-float">
								<!-- Dial -->
								<div class="relative w-28 h-28 flex-shrink-0 flex items-center justify-center">
									<svg class="w-full h-full -rotate-90" viewBox="0 0 100 100">
										<circle cx="50" cy="50" r="42" fill="none" stroke="#f1f5f9" stroke-width="8"/>
										<circle 
											cx="50" cy="50" r="42" 
											fill="none" 
											stroke="#2563eb" 
											stroke-width="10"
											stroke-linecap="round"
											stroke-dasharray="263.9" 
											style="stroke-dashoffset: {dashOffset}; transition: stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)"
										/>
									</svg>
									<div class="absolute inset-0 flex flex-col items-center justify-center">
										<p class="text-xl font-black text-gray-900 leading-none">{Math.round($healthTween)}<span class="text-[10px] font-bold text-blue-600">%</span></p>
										<p class="text-[7px] font-black text-gray-400 uppercase tracking-widest mt-0.5">Purity</p>
									</div>
								</div>
								<!-- Label -->
								<div class="flex flex-col gap-1.5">
									<h4 class="text-[13px] font-black text-gray-900 uppercase tracking-widest leading-none">System Health</h4>
									<span class="text-[8px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-widest w-fit">OPTIMIZED</span>
									<div class="flex gap-1.5 mt-1">
										<span class="w-2 h-2 bg-blue-600 rounded-full animate-ping opacity-60"></span>
										<span class="w-2 h-2 bg-gray-100 rounded-full"></span>
										<span class="w-2 h-2 bg-gray-100 rounded-full"></span>
									</div>
								</div>
							</div>

							<!-- Environment Grid — two equal-height cards -->
							<div class="grid grid-cols-2 gap-4">
								<!-- Production Card -->
								<div class="bg-blue-600 rounded-[2rem] p-5 text-white flex flex-col justify-between shadow-2xl shadow-blue-900/30 animate-float h-44">
									<div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M15.89 16.7c.35.3.4.82.1 1.17l-.37.44a.8.8 0 0 1-1.13.11l-3.34-2.8a.8.8 0 0 0-1.1 0l-3.35 2.8a.8.8 0 0 1-1.13-.1l-.37-.45a.8.8 0 0 1 .1-1.16l3.35-2.8a2.5 2.5 0 0 1 3.3 0l3.34 2.8z"/></svg>
									</div>
									<p class="text-[10px] font-black uppercase tracking-wider leading-snug">Production<br/>Environment</p>
								</div>

								<!-- Deployment Card -->
								<div class="bg-white rounded-[2rem] p-5 border border-gray-100 flex flex-col justify-between shadow-xl shadow-blue-950/5 animate-float-delayed h-44">
									<div class="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center shadow-md">
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-lime-950"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="m6.34 17.66-1.41 1.41"/></svg>
									</div>
									<p class="text-[10px] font-black text-gray-900 uppercase tracking-wider leading-snug">Deployment<br/>Scene</p>
								</div>
							</div>

							<!-- Data Center Bar -->
							<div class="bg-gray-950 rounded-[2rem] p-5 flex items-center justify-between shadow-2xl shadow-black/40 animate-float">
								<div class="flex items-center gap-3">
									<div class="w-9 h-9 bg-white/10 rounded-full flex-shrink-0 flex items-center justify-center border border-white/20">
										<div class="w-3 h-3 rounded-full border-2 border-lime-400 animate-ping opacity-60"></div>
									</div>
									<div>
										<p class="text-[10px] font-black text-white uppercase tracking-widest leading-none mb-1">Systems Online</p>
										<p class="text-[8px] font-bold text-gray-500 uppercase tracking-widest leading-none">48 CLUSTERS ACTIVE</p>
									</div>
								</div>
								<button class="px-4 py-2 bg-blue-600 text-white text-[8px] font-black rounded-full uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-lg flex-shrink-0">DATA CENTER</button>
							</div>

						</div>
						<!-- END RIGHT PANEL -->

					</div>
				{/if}
			</div>

		</div>
	</div>
</section>

<style>
	@reference "../../routes/layout.css";

	@keyframes float {
		0%, 100% { transform: translateY(0) rotate(0deg); }
		50% { transform: translateY(-6px) rotate(0.3deg); }
	}

	@keyframes float-delayed {
		0%, 100% { transform: translateY(0) rotate(0deg); }
		50% { transform: translateY(6px) rotate(-0.3deg); }
	}

	@keyframes blink {
		0%, 100% { opacity: 1; transform: scale(1); }
		50% { opacity: 0.4; transform: scale(0.8); }
	}

	.animate-float { animation: float 6s ease-in-out infinite; }
	.animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
	.animate-blink { animation: blink 2s ease-in-out infinite; }
</style>
