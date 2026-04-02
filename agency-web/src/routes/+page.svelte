<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import Locations from '$lib/components/Locations.svelte';
	import CEO from '$lib/components/CEO.svelte';
</script>

<svelte:head>
	<title>Coded Clouds | Premium Software Solutions</title>
	<meta name="description" content="Multinational software agency specialized in Web, App, POS, and Hospital Management systems across Pakistan, Dubai, and Saudi Arabia." />
</svelte:head>

<Navbar />

<main class="min-h-screen">
	<Hero />
	<Services />
	<Locations />
	<CEO />
</main>

<footer class="bg-gray-900 py-16 text-white overflow-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
			<div class="col-span-1 md:col-span-2">
				<div class="flex items-center gap-2 mb-6">
					<div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19c.7 0 1.2-.6 1.2-1.2V6.2c0-.7-.5-1.2-1.2-1.2h-11c-.7 0-1.2.5-1.2 1.2v11.6c0 .6.5 1.2 1.2 1.2h11z"/><path d="m10 10 3 3-3 3"/><path d="M14 18h.01"/></svg>
					</div>
					<span class="text-xl font-black tracking-tight">CODED CLOUDS</span>
				</div>
				<p class="text-gray-400 max-w-sm text-lg leading-relaxed mb-8">
					Empowering global businesses with elite software architecture and intuitive design. From Pakistan to Saudi Arabia, we build the future.
				</p>
				<div class="flex gap-4">
					<div class="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
					</div>
					<div class="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
					</div>
				</div>
			</div>
			
			<div>
				<h4 class="text-lg font-bold mb-6">Services</h4>
				<ul class="space-y-4 text-gray-400">
					<li><a href="#services" class="hover:text-blue-500 transition-colors">Web Development</a></li>
					<li><a href="#services" class="hover:text-blue-500 transition-colors">Mobile Apps</a></li>
					<li><a href="#services" class="hover:text-blue-500 transition-colors">POS Softwares</a></li>
					<li><a href="#services" class="hover:text-blue-500 transition-colors">Hospital Management</a></li>
				</ul>
			</div>

			<div>
				<h4 class="text-lg font-bold mb-6">Company</h4>
				<ul class="space-y-4 text-gray-400">
					<li><a href="#ceo" class="hover:text-blue-500 transition-colors">Our CEO</a></li>
					<li><a href="#locations" class="hover:text-blue-500 transition-colors">Global Hubs</a></li>
					<li><a href="#projects" class="hover:text-blue-500 transition-colors">Success Stories</a></li>
					<li><a href="#contact" class="hover:text-blue-500 transition-colors">Contact Us</a></li>
				</ul>
			</div>
		</div>
		
		<div class="pt-12 border-t border-gray-800 flex flex-col md:row items-center justify-between gap-6">
			<p class="text-sm text-gray-500 italic">© 2026 Coded Clouds. All rights reserved. Registered in PK, AE, & SA.</p>
			<div class="flex gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
				<a href="#privacy" class="hover:text-white">Privacy Policy</a>
				<a href="#terms" class="hover:text-white">Terms of Service</a>
			</div>
		</div>
	</div>
</footer>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
