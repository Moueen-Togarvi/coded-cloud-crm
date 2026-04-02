<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	const services = [
		{
			title: 'Enterprise Web',
			desc: 'High-performance, secure software built for global corporations to manage complex data at scale.',
			size: 'col-span-1 md:col-span-2 row-span-2',
			bg: 'bg-blue-600 text-white',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 3v18"/><path d="M3 12h18"/></svg>`,
			tag: 'POPULAR'
		},
		{
			title: 'Mobile Ecosystems',
			desc: 'Seamless iOS & Android experiences crafted with native precision and cloud-first logic.',
			size: 'col-span-1 md:col-span-1 row-span-2',
			bg: 'bg-white text-gray-900 border border-gray-100',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/></svg>`,
			tag: 'FUTURE'
		},
		{
			title: 'Cloud Inventory (POS)',
			desc: 'Scale your retail empire with real-time stock and sales analytics across multiple regions.',
			size: 'col-span-1',
			bg: 'bg-gray-900 text-white',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
			tag: 'RETAIL'
		},
		{
			title: 'Health Systems',
			desc: 'HIPAA-grade hospital management with secure patient data and administrative automation.',
			size: 'col-span-1',
			bg: 'bg-white text-blue-600 border border-gray-100 shadow-sm',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
			tag: 'TECH'
		},
		{
			title: 'UI/UX Dynamics',
			desc: 'Crafting high-fidelity, intuitive interfaces that convert users into loyal digital advocates.',
			size: 'col-span-1',
			bg: 'bg-blue-50 text-blue-900 border border-blue-100',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
			tag: 'ELITE'
		}
	];
</script>

<section id="services" class="py-32 bg-white overflow-hidden relative">
	<!-- Decorative Backdrop -->
	<div class="absolute inset-0 bg-slate-50/50 pointer-events-none -z-10"></div>
	
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
		<!-- Section Header -->
		<div class="flex flex-col md:flex-row pb-20 justify-between items-end gap-10">
			<div class="max-w-2xl">
				<h2 class="text-blue-600 font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-3">
					<span class="w-10 h-0.5 bg-blue-600"></span>
					OUR EXPERTISE
				</h2>
				<h3 class="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
					Software That <br /> Power Global <span class="text-blue-600">Futures.</span>
				</h3>
			</div>
			<p class="text-xl text-gray-500 max-w-sm pb-2 font-medium tracking-tight">
				We don't build projects. We build scalable digital entities for the most ambitious firms in the MEASA region.
			</p>
		</div>

		<!-- Bento Grid Redesign -->
		<div class="grid grid-cols-1 md:grid-cols-3 grid-rows-1 md:grid-rows-3 gap-6">
			{#each services as service}
				<div class="group relative {service.size} rounded-[2.5rem] overflow-hidden p-10 flex flex-col justify-between transition-all duration-700 hover:shadow-3xl hover:shadow-blue-900/10 hover:-translate-y-2 {service.bg}">
					<!-- Background Pattern (Subtle) -->
					<div class="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-125 transition-transform duration-1000">
						{@html service.icon}
					</div>

					<div class="space-y-4">
						<span class="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-black tracking-[0.2em] outline outline-1 outline-white/20 {service.bg.includes('white') ? 'bg-blue-600/5 text-blue-600 outline-blue-600/20' : ''}">
							{service.tag}
						</span>
						<h4 class="text-3xl font-black tracking-tight leading-tight">{service.title}</h4>
						<p class="text-lg opacity-80 font-medium leading-relaxed max-w-xs">{service.desc}</p>
					</div>

					<div class="mt-12 flex items-center gap-4">
						<div class="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 bg-white/10 group-hover:bg-white group-hover:text-blue-600 shadow-xl shadow-transparent group-hover:shadow-blue-600/20 {service.bg.includes('white') ? 'bg-blue-600/5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : ''}">
							{@html service.icon}
						</div>
						<span class="text-xs font-black tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">EXPLORE CORE STACK</span>
					</div>
					
					<!-- Corner Flare -->
					<div class="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
				</div>
			{/each}
		</div>

		<!-- Action Bar -->
		<div class="mt-20 flex flex-col md:row items-center justify-center gap-8">
			<p class="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">Ready to modernize your ecosystem?</p>
			<a href="/contact" class="px-12 py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-2xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all">
				SCHEDULE A STRATEGY CALL
			</a>
		</div>
	</div>
</section>

<style>
	@reference "../../routes/layout.css";

	h1, h2, h3, h4 {
		font-family: 'Outfit', sans-serif;
	}
</style>

