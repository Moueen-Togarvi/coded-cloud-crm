<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	const services = [
		{
			id: 'design',
			title: 'Design',
			desc: 'We are a design-first agency. We handle everything from elite landing pages to complex SaaS platform architectures.',
			tags: ['Branding', 'UI/UX Research', 'Prototyping', 'App Design', 'Web Design'],
			cta: 'START A DESIGN PROJECT',
			color: 'from-sky-400 to-blue-600'
		},
		{
			id: 'engineering',
			title: 'Engineering',
			desc: 'Our engineering team specializes in high-performance web systems, custom mobile apps, and enterprise legacy transitions.',
			tags: ['Next.js', 'SvelteKit', 'Mobile Apps', 'Hospital Systems', 'POS Software'],
			cta: 'START A DEVELOPMENT PROJECT',
			color: 'from-blue-600 to-indigo-700'
		},
		{
			id: 'intelligence',
			title: 'Intelligence',
			desc: 'Advanced digital strategy and intelligence to scale your operations globally across Pakistan, Dubai, and beyond.',
			tags: ['AI Integration', 'Cloud Scaling', 'CRM Systems', 'Digital Strategy', 'Global SEO'],
			cta: 'START A STRATEGY PROJECT',
			color: 'from-blue-900 to-slate-900'
		}
	];
</script>

<section id="services" class="py-16 bg-white overflow-hidden">
	<div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
		<div class="flex flex-col lg:flex-row gap-12 lg:gap-20">
			
			<!-- Left Sidebar Heading (Airly Style) -->
			<div class="lg:w-1/4">
				<div class="sticky top-32">
					<h2 class="text-7xl md:text-8xl font-black text-gray-900 tracking-tighter mb-6 leading-none">
						Services<span class="text-blue-600">.</span>
					</h2>
					<p class="text-lg text-gray-500 font-medium max-w-xs">
						We deliver end-to-end digital excellence powered by elite design and software architecture.
					</p>
				</div>
			</div>

			<!-- Services Cards Grid -->
			<div class="flex-1">
				<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
					{#each services as service}
						<div class="group relative bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-700 flex flex-col overflow-hidden hover:-translate-y-2">
							
							<!-- Visual Area (Custom Abstract Graphics) -->
							<div class="h-64 relative bg-gray-50 overflow-hidden flex items-center justify-center">
								<div class="absolute inset-0 bg-gradient-to-br {service.color} opacity-[0.03] group-hover:opacity-[0.07] transition-opacity"></div>
								
								{#if service.id === 'design'}
									<!-- Abstract Orbit Graphic -->
									<div class="relative w-32 h-32 border-2 border-dashed border-blue-200 rounded-full animate-spin-slow">
										<div class="absolute -top-3 -left-3 w-8 h-8 bg-sky-400 rounded-full blur-sm opacity-60"></div>
										<div class="absolute -bottom-3 -right-3 w-6 h-6 bg-blue-600 rounded-full blur-sm opacity-60 animate-pulse"></div>
									</div>
									<div class="absolute w-16 h-16 bg-white shadow-xl rounded-2xl rotate-12 flex items-center justify-center text-blue-600">
										<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 20 20"/><path d="M8 8 2 2"/></svg>
									</div>
								{:else if service.id === 'engineering'}
									<!-- Moving Code Blocks -->
									<div class="flex gap-3">
										<div class="w-12 h-32 bg-blue-500/10 rounded-full animate-bounce-slow"></div>
										<div class="w-12 h-48 bg-blue-600 rounded-full animate-bounce mt-4 shadow-xl shadow-blue-200"></div>
										<div class="w-12 h-24 bg-indigo-800/10 rounded-full animate-bounce-slow delay-75"></div>
									</div>
								{:else}
									<!-- Intelligence Network -->
									<div class="relative w-40 h-40">
										<div class="absolute inset-0 border-2 border-blue-100 rounded-lg rotate-45 animate-pulse"></div>
										<div class="absolute inset-4 border-2 border-blue-50 rounded-lg -rotate-45"></div>
										<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-950 rounded-full shadow-[0_0_20px_rgba(15,23,42,0.5)]"></div>
									</div>
								{/if}
							</div>

							<!-- Content Zone -->
							<div class="p-8 lg:p-10 flex flex-col flex-1">
								<h3 class="text-3xl font-black text-gray-900 mb-4 tracking-tight">{service.title}</h3>
								<p class="text-gray-500 font-medium leading-relaxed mb-8 flex-1">
									{service.desc}
								</p>

								<!-- Service Tags (Chips) -->
								<div class="flex flex-wrap gap-2 mb-10">
									{#each service.tags as tag}
										<span class="px-4 py-1.5 bg-gray-50 text-gray-400 text-[11px] font-bold uppercase tracking-widest rounded-full border border-gray-100 group-hover:border-blue-100 group-hover:text-blue-600 transition-colors">
											{tag}
										</span>
									{/each}
								</div>

								<!-- CTA Button -->
								<button class="w-full py-5 bg-gray-950 text-white rounded-2xl font-black text-xs tracking-[0.2em] uppercase hover:bg-blue-600 transition-all duration-500 shadow-xl hover:shadow-blue-600/30">
									{service.cta}
								</button>
							</div>
						</div>
					{/each}
				</div>
			</div>

		</div>
	</div>
</section>

<style>
	@keyframes spin-slow {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}
	.animate-spin-slow {
		animation: spin-slow 12s linear infinite;
	}

	@keyframes bounce-slow {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-30px); }
	}
	.animate-bounce-slow {
		animation: bounce-slow 4s ease-in-out infinite;
	}
</style>
