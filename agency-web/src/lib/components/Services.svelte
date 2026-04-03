<script lang="ts">
	const services = [
		{
			id: 'graphic',
			title: 'Graphic Designing',
			desc: 'We craft elite visual identities and immersive brand experiences that define the digital future.',
			tags: ['Branding', 'UI Architecture', 'Visual Identity', 'Social Graphics'],
			image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800',
			cta: 'START A DESIGN PROJECT'
		},
		{
			id: 'web',
			title: 'Web Development',
			desc: 'High-performance ecosystems built with the latest architectures to scale your global operations.',
			tags: ['Next.js', 'SvelteKit', 'Enterprise Portals', 'E-Commerce'],
			image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800',
			cta: 'START A WEB PROJECT'
		},
		{
			id: 'app',
			title: 'App Development',
			desc: 'Premium mobile experiences that bridger the gap between complex engineering and intuitive design.',
			tags: ['iOS/Android', 'SaaS Mobile', 'React Native', 'Firebase'],
			image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800',
			cta: 'START AN APP PROJECT'
		},
		{
			id: 'marketing',
			title: 'Marketing',
			desc: 'Data-driven intelligence and strategic outreach to position your hardware or software in top markets.',
			tags: ['Strategy', 'Global SEO', 'Social Media', 'Social Growth'],
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
			cta: 'START A MARKETING PROJECT'
		}
	];
</script>

<section id="services" class="py-16 bg-white overflow-hidden">
	<div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
		<div class="flex flex-col lg:flex-row gap-12 lg:gap-16">
			
			<!-- Left Sidebar Heading (Airly Style) -->
			<div class="lg:w-1/4">
				<div class="sticky top-32">
					<h2 class="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter mb-6 leading-none">
						Services<span class="text-blue-600">.</span>
					</h2>
					<p class="text-base text-gray-500 font-medium max-w-xs leading-relaxed">
						We deliver end-to-end digital excellence powered by elite design and software architecture.
					</p>
				</div>
			</div>

			<!-- Services Cards Grid -->
			<div class="flex-1">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{#each services as service}
						<div class="group relative bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all duration-700 flex flex-col overflow-hidden hover:-translate-y-1">
							
							<!-- Compact Visual Area -->
							<div class="h-44 relative bg-gray-100 overflow-hidden">
								<img 
									src={service.image} 
									alt={service.title} 
									class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
								/>
								<div class="absolute inset-0 bg-blue-950/10 group-hover:bg-transparent transition-colors duration-700"></div>
							</div>

							<!-- Content Zone (Compact Padding) -->
							<div class="p-8 flex flex-col flex-1">
								<h3 class="text-2xl font-black text-gray-900 mb-3 tracking-tight">{service.title}</h3>
								<p class="text-sm text-gray-500 font-medium leading-relaxed mb-6">
									{service.desc}
								</p>

								<!-- Service Tags (Airly Style Chips) -->
								<div class="flex flex-wrap gap-2 mb-8">
									{#each service.tags as tag}
										<span class="px-3 py-1 bg-gray-50 text-gray-400 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-gray-100 group-hover:border-blue-100 group-hover:text-blue-600 transition-colors">
											{tag}
										</span>
									{/each}
								</div>

								<!-- Compact CTA Button -->
								<button class="w-full py-4 bg-gray-950 text-white rounded-xl font-bold text-[10px] tracking-widest uppercase hover:bg-blue-600 transition-all duration-500 shadow-lg hover:shadow-blue-600/20">
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
