<script lang="ts">
	const partners = [
		{ name: 'Partner 1', logo: '/images/image-removebg-preview.png' },
		{ name: 'Partner 2', logo: '/images/image-removebg-preview (1).png' },
		{ name: 'Partner 3', logo: '/images/image-removebg-preview (2).png' },
		{ name: 'Partner 4', logo: '/images/image-removebg-preview (3).png' },
		// Duplicate for seamless loop
		{ name: 'Partner 1', logo: '/images/image-removebg-preview.png' },
		{ name: 'Partner 2', logo: '/images/image-removebg-preview (1).png' },
		{ name: 'Partner 3', logo: '/images/image-removebg-preview (2).png' },
		{ name: 'Partner 4', logo: '/images/image-removebg-preview (3).png' }
	];
</script>

<section id="partners" class="py-12 bg-white border-y border-gray-100 overflow-hidden relative">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
		<p class="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2">Trusted Global Partnerships</p>
	</div>

	<div class="flex relative overflow-hidden">
		<!-- Infinite Scroll Ticker Container -->
		<div class="flex animate-ticker whitespace-nowrap gap-16 md:gap-32 items-center">
			{#each partners as partner}
				<div class="flex-shrink-0 flex items-center justify-center opacity-40 h-12 md:h-16 px-4">
					<img 
						src={partner.logo} 
						alt={partner.name} 
						class="h-full w-auto object-contain select-none pointer-events-none"
					/>
				</div>
			{/each}
		</div>
		
		<!-- Overlay to fade edges -->
		<div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
		<div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
	</div>
</section>

<style>
	@keyframes ticker {
		0% { transform: translateX(0); }
		100% { transform: translateX(-50%); }
	}

	.animate-ticker {
		display: flex;
		width: fit-content;
		animation: ticker 40s linear infinite;
	}
</style>
