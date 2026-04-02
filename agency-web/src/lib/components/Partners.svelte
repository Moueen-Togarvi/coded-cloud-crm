<script lang="ts">
	const partners = [
		{ name: 'TechCorp', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft.svg' },
		{ name: 'Innovate', logo: 'https://cdn.worldvectorlogo.com/logos/google-2015.svg' },
		{ name: 'LogicGate', logo: 'https://cdn.worldvectorlogo.com/logos/amazon-2.svg' },
		{ name: 'CloudNet', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' },
		{ name: 'Visionary', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-2.svg' },
		{ name: 'NexGen', logo: 'https://cdn.worldvectorlogo.com/logos/cisco-2.svg' }
	];
</script>

<section class="py-16 bg-white border-y border-gray-50 overflow-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Trusted by Global Leaders</p>
		</div>
		
		<div class="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
			{#each partners as partner}
				<div class="flex items-center justify-center h-8 md:h-10 group">
					<img 
						src={partner.logo} 
						alt={partner.name} 
						class="h-full w-auto object-contain filter group-hover:scale-110 transition-transform"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>
