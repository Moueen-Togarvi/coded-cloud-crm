<script lang="ts">
	const tiers = [
		{
			name: 'SaaS Growth',
			price: '$4,999',
			period: 'starting from',
			description: 'Ideal for startups looking to launch their first high-performance software product.',
			features: [
				'Custom UI/UX Design',
				'Responsive Web App',
				'Database Architecture',
				'API Integrations',
				'3 Months Support'
			],
			button: 'Launch My Idea',
			popular: false
		},
		{
			name: 'Enterprise Hub',
			price: '$12,499',
			period: 'starting from',
			description: 'Scalable infrastructure for established firms moving to a cloud-first ecosystem.',
			features: [
				'Everything in Growth',
				'Native iOS & Android Apps',
				'Advanced Security Protocols',
				'Infrastructure Auto-scaling',
				'Dedicated Support Manager',
				'12 Months Support'
			],
			button: 'Scale My Business',
			popular: true
		},
		{
			name: 'Institutional Custom',
			price: 'Custom',
			period: 'Contact for Quote',
			description: 'Tailored ERP, POS, or Hospital Management systems for large-scale operations.',
			features: [
				'Full System Audit',
				'Legacy Data Migration',
				'HIPAA/GDPR Compliance',
				'On-Premise or Cloud',
				'White-Glove Maintenance',
				'Lifetime Architecture Support'
			],
			button: 'Request Consultation',
			popular: false
		}
	];
</script>

<section id="pricing" class="py-20 bg-white relative overflow-hidden">
	<!-- Decorative Background -->
	<div class="absolute top-0 right-0 w-full h-full bg-slate-50/50 -z-10"></div>
	
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-3">TRANSPARENT VALUE</h2>
			<h3 class="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">Investment for <span class="text-blue-600">Growth.</span></h3>
			<p class="mt-4 text-lg text-gray-500 max-w-xl mx-auto font-medium">We don't sell hours. We sell elite software outcomes that drive revenue and operational excellence.</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each tiers as tier}
				<div class="relative group p-8 rounded-[2rem] bg-white border border-gray-100 transition-all duration-700 hover:shadow-3xl hover:shadow-blue-900/10 hover:-translate-y-2 flex flex-col justify-between {tier.popular ? 'ring-4 ring-blue-600 ring-offset-4 ring-offset-white' : ''}">
					{#if tier.popular}
						<div class="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-xs font-black tracking-widest uppercase">
							MOST POPULAR
						</div>
					{/if}

					<div>
						<h4 class="text-xl font-bold text-gray-400 uppercase tracking-widest mb-4">{tier.name}</h4>
						<div class="flex items-baseline gap-2 mb-6">
							<span class="text-5xl font-black text-gray-900 tracking-tighter">{tier.price}</span>
							<span class="text-gray-400 text-sm font-bold uppercase tracking-widest">{tier.period}</span>
						</div>
						<p class="text-gray-500 font-medium leading-relaxed mb-8">{tier.description}</p>
						
						<div class="space-y-4 mb-12">
							{#each tier.features as feature}
								<div class="flex items-center gap-3">
									<div class="w-5 h-5 rounded-full bg-blue-600/10 flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
											<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<span class="text-gray-600 font-medium">{feature}</span>
								</div>
							{/each}
						</div>
					</div>

					<a href="/contact" class="w-full py-5 rounded-2xl font-black tracking-widest text-center uppercase transition-all duration-300 {tier.popular ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.02]' : 'bg-gray-50 text-gray-900 border border-gray-100 hover:bg-blue-600 hover:text-white hover:scale-[1.02]'}">
						{tier.button}
					</a>
				</div>
			{/each}
		</div>

		<!-- Custom Note -->
		<div class="mt-20 text-center">
			<p class="text-gray-400 font-medium italic">
				All project quotes include a fixed-price guarantee with no hidden fees and a detailed development roadmap.
			</p>
		</div>
	</div>
</section>
