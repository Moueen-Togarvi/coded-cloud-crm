<script lang="ts">
	let isMenuOpen = $state(false);

	const navLinks = [
		{ name: 'HOME', href: '/' },
		{ name: 'WHY US', href: '/why-us' },
		{ name: 'SERVICE', href: '#services' },
		{ name: 'PRICING', href: '#pricing' },
		{ name: 'CONTACT', href: '/contact' }
	];
</script>

<nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300 glass border-b border-gray-100">
	<div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-20 md:h-24">
			<!-- Logo -->
			<a href="/" class="flex-shrink-0 flex items-center group">
				<img 
					src="/images/image-removebg-preview.png" 
					alt="Coded Clouds Logo" 
					class="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300" 
				/>
			</a>

			<!-- Desktop Nav -->
			<div class="hidden md:flex items-center space-x-10">
				{#each navLinks as link}
					<a href={link.href} class="text-xs font-bold text-gray-600 hover:text-blue-600 transition-all uppercase tracking-widest hover:scale-105">{link.name}</a>
				{/each}
			</div>

			<!-- CTA Button -->
			<div class="hidden md:block">
				<a href="/contact" class="btn-primary py-3 px-8 text-xs tracking-widest uppercase hover:shadow-xl hover:scale-105 transition-all">
					BOOK FREE CONSULTATION
				</a>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden flex items-center">
				<button 
					onclick={() => isMenuOpen = !isMenuOpen}
					class="p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						{#if isMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Nav -->
	{#if isMenuOpen}
		<div class="md:hidden glass border-t border-gray-100">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				{#each navLinks as link}
					<a href={link.href} class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 uppercase tracking-widest">{link.name}</a>
				{/each}
				<a href="/contact" class="mt-4 block w-full text-center btn-primary py-3">
					BOOK FREE CONSULTATION
				</a>
			</div>
		</div>
	{/if}
</nav>

<style>
	@reference "../../routes/layout.css";

	.glass {
		background: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}

	.btn-primary {
		@apply bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center;
	}
</style>
