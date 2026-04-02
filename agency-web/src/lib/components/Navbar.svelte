<script lang="ts">
	let isMenuOpen = $state(false);

	const navLinks = [
		{ name: 'HOME', href: '/' },
		{ name: 'WHY US', href: '#why-us' },
		{ name: 'SERVICE', href: '#services' },
		{ name: 'PROJECT', href: '#projects' },
		{ name: 'PRICING', href: '#pricing' },
		{ name: 'CONTACT', href: '#contact' }
	];
</script>

<nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300 glass border-b border-gray-100">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-20">
			<!-- Logo -->
			<div class="flex-shrink-0 flex items-center gap-2">
				<div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-md">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19c.7 0 1.2-.6 1.2-1.2V6.2c0-.7-.5-1.2-1.2-1.2h-11c-.7 0-1.2.5-1.2 1.2v11.6c0 .6.5 1.2 1.2 1.2h11z"/><path d="m10 10 3 3-3 3"/><path d="M14 18h.01"/></svg>
				</div>
				<span class="text-xl font-bold tracking-tight text-gray-900">CODED CLOUDS</span>
			</div>

			<!-- Desktop Nav -->
			<div class="hidden md:flex items-center space-x-8">
				{#each navLinks as link}
					<a href={link.href} class="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-wider">{link.name}</a>
				{/each}
			</div>

			<!-- CTA Button -->
			<div class="hidden md:block">
				<a href="#consultation" class="btn-primary py-2.5 text-xs tracking-widest uppercase">
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
					<a href={link.href} class="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">{link.name}</a>
				{/each}
				<a href="#consultation" class="mt-4 block w-full text-center btn-primary py-3">
					BOOK FREE CONSULTATION
				</a>
			</div>
		</div>
	{/if}
</nav>

<style>
	.glass {
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}
</style>
