<script lang="ts">
	const services = [
		{
			title: 'Web Development',
			desc: 'Custom enterprise-grade web applications built with the latest frameworks for scale and performance.',
			icon: '🌐'
		},
		{
			title: 'App Development',
			desc: 'Premium mobile experiences for iOS and Android, focusing on user engagement and seamless design.',
			icon: '📱'
		},
		{
			title: 'POS Systems',
			desc: 'Robust point-of-sale software solutions tailored for retail and hospitality businesses.',
			icon: '💳'
		},
		{
			title: 'Health Systems',
			desc: 'Advanced hospital management and health websites ensuring compliance and operational excellence.',
			icon: '🏥'
		},
		{
			title: 'Cloud Solutions',
			desc: 'Secure and scalable cloud infrastructure to power your business growth globally.',
			icon: '☁️'
		},
		{
			title: 'AI Integration',
			desc: 'Smart automation and AI-driven insights to transform your data into a competitive advantage.',
			icon: '🤖'
		}
	];
</script>

<section id="services" class="py-24 bg-white overflow-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">OUR SERVICES</h2>
			<h3 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
				Comprehensive Software Solutions <br /> For Every Digital Frontier.
			</h3>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each services as service}
				<div class="group p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-2">
					<div class="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
						{service.icon}
					</div>
					<h4 class="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
					<p class="text-gray-600 leading-relaxed">
						{service.desc}
					</p>
					<div class="mt-6 flex items-center gap-2 text-blue-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
						LEARN MORE 
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
