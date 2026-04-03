<script lang="ts">
	let isMenuOpen = $state(false);

	const navLinks = [
		{ name: 'HOME', href: '/' },
		{ name: 'WHY US', href: '/why-us' },
		{ name: 'SERVICE', href: '/services' },
		{ name: 'CONTACT', href: '/contact' },
		{ name: 'OUR TEAM', href: '/our-team' } // Added Our Team link and removed Pricing link
	];
</script>

<nav class="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 glass rounded-full border border-blue-100/50 shadow-[0_20px_50px_rgba(37,99,235,0.08)] overflow-hidden">
	<div class="max-w-[1600px] mx-auto px-6 lg:px-12">
		<div class="flex justify-between items-center h-16 md:h-20">
			<!-- Logo -->
			<a href="/" class="flex-shrink-0 flex items-center group relative z-50">
				<img 
					src="/images/image-removebg-preview.png" 
					alt="Coded Clouds Logo" 
					class="w-20 h-20 md:w-28 md:h-28 object-contain hover:scale-110 transition-transform duration-500 drop-shadow-xl" 
				/>
			</a>

			<!-- Desktop Nav -->
			<div class="hidden md:flex items-center space-x-12">
				{#each navLinks as link}
					<a href={link.href} class="group relative text-xs font-black text-slate-900 hover:text-blue-600 transition-all uppercase tracking-widest">
						{link.name}
						<span class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
					</a>
				{/each}
			</div>

			<!-- CTA Button -->
			<div class="hidden md:block">
				<a href="/contact" class="btn-primary py-2.5 px-8 text-[10px] tracking-[0.2em] uppercase hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all">
					CONSULTATION
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
		backdrop-filter: blur(25px) saturate(200%);
		-webkit-backdrop-filter: blur(25px) saturate(200%);
		border: 1px solid rgba(255, 255, 255, 0.4);
	}

	.btn-primary {
		@apply bg-blue-600 text-white rounded-full font-black shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center;
	}
</style>
