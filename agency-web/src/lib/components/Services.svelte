<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	const services = [
		{
			id: 'graphic',
			title: 'Graphic Designing',
			desc: 'We craft elite visual identities and brand experiences.',
			tags: ['Branding', 'UI Architecture', 'Visual Identity'],
			image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800',
			cta: 'START DESIGN'
		},
		{
			id: 'web',
			title: 'Web Dev',
			desc: 'Scalable ecosystems built with world-class architectures.',
			tags: ['Next.js', 'SvelteKit', 'Enterprise Portals'],
			image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800',
			cta: 'START WEB'
		},
		{
			id: 'app',
			title: 'App Dev',
			desc: 'Intuitive mobile experiences from Pakistan to Dubai.',
			tags: ['iOS/Android', 'SaaS Mobile', 'React Native'],
			image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800',
			cta: 'START APP'
		},
		{
			id: 'marketing',
			title: 'Marketing',
			desc: 'Data-driven strategy to position your brand globally.',
			tags: ['Strategy', 'Global SEO', 'Social Growth'],
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
			cta: 'START MARKETING'
		}
	];
</script>

<section id="services" class="py-20 bg-white overflow-hidden" use:reveal>
	<div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
		<div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
			
			<!-- Sticky Header Alignment (Airly Style) -->
			<div class="lg:w-1/6">
				<div class="sticky top-32">
					<h2 class="text-6xl md:text-7xl font-black text-gray-900 tracking-tighter mb-4 leading-none">
						Services<span class="text-blue-600">.</span>
					</h2>
					<p class="text-xs text-gray-400 font-bold uppercase tracking-[0.2em] max-w-xs">
						Elite Digital Architecture
					</p>
				</div>
			</div>

			<!-- Exact Row-Based Grid (4 Columns) -->
			<div class="flex-1">
				<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-6">
					{#each services as service}
						<div class="group relative bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-700 flex flex-col h-full overflow-hidden hover:-translate-y-1">
							
							<!-- Fitted Visual Area (Reduced Height) -->
							<div class="h-44 relative bg-gray-50 overflow-hidden">
								<img 
									src={service.image} 
									alt={service.title} 
									class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110"
								/>
								<div class="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-700"></div>
							</div>

							<!-- Content Zone (Narrower & Taller Proportions) -->
							<div class="p-6 md:p-8 flex flex-col flex-1">
								<h3 class="text-xl font-bold text-gray-900 mb-2 tracking-tight">{service.title}</h3>
								<p class="text-[13px] text-gray-500 font-medium leading-relaxed mb-6 flex-1">
									{service.desc}
								</p>

								<!-- Tags Area -->
								<div class="flex flex-wrap gap-1.5 mb-8">
									{#each service.tags as tag}
										<span class="px-3 py-1 bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest rounded-lg border border-gray-100 group-hover:border-blue-100 group-hover:text-blue-600 transition-colors">
											{tag}
										</span>
									{/each}
								</div>

								<!-- Direct Action Button -->
								<button class="w-full py-4 bg-gray-950 text-white rounded-xl font-black text-[9px] tracking-[0.3em] uppercase hover:bg-blue-600 transition-all duration-500 shadow-lg hover:shadow-blue-600/30">
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
	@reference "../../routes/layout.css";
</style>
