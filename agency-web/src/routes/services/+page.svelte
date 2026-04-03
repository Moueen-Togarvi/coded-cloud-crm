<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Services from '$lib/components/Services.svelte';
</script>

<svelte:head>
	<title>Our Services | Coded Clouds Agency</title>
</svelte:head>

<Navbar />

<main class="min-h-screen pt-24 bg-gray-50">
	<!-- Mini Hero for Services -->
	<div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-32 relative overflow-hidden">
		<!-- Background Elements -->
		<div class="absolute inset-0 z-0">
			<div class="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-70 animate-pulse"></div>
			<div class="absolute bottom-[10%] -left-[5%] w-[400px] h-[400px] bg-sky-50 rounded-full blur-[80px] opacity-60"></div>
		</div>

		<div class="relative z-10 flex flex-col items-center text-center">
			<p class="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 flex items-center gap-3">
				<span class="w-10 h-0.5 bg-blue-600"></span>
				WHAT WE DO
				<span class="w-10 h-0.5 bg-blue-600"></span>
			</p>
			
			<h1 class="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-[1.05]">
				Elite Solutions For <br />
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Global Enterprises</span>
			</h1>

			<p class="text-lg md:text-xl text-gray-500 font-medium max-w-2xl leading-relaxed mb-12">
				From hospital management logic to frictionless eCommerce layers, our engineering handles complex infrastructure while delivering breathtaking visual experiences.
			</p>
			
			<div class="flex gap-4">
				<a href="#services" class="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold tracking-widest text-[10px] uppercase shadow-2xl hover:bg-blue-600 hover:-translate-y-1 transition-all">
					EXPLORE CAPABILITIES
				</a>
			</div>
		</div>
	</div>

	<!-- Render the existing Premium Services Component here -->
	<div class="pb-20">
		<Services />
	</div>
	
	<!-- Bottom Premium CTA -->
	<div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 pb-24">
		<div class="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-600/30">
			<!-- Glass Shine Overlay -->
			<div class="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-50 transform -skew-x-12"></div>
			
			<div class="relative z-10">
				<h2 class="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6">
					Ready To Upgrade Your Architecture?
				</h2>
				<p class="text-blue-100 font-medium text-lg mb-10 max-w-xl mx-auto">
					Schedule a free 30-minute high-level consultation session with our technical leads.
				</p>
				<a href="/contact" class="inline-block px-10 py-5 bg-white text-blue-600 rounded-full font-black tracking-widest text-[11px] uppercase shadow-2xl hover:scale-105 transition-all">
					START A PROJECT
				</a>
			</div>
		</div>
	</div>
</main>

<footer class="bg-gray-900 py-20 text-white overflow-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
			<div class="col-span-1 md:col-span-2">
				<div class="flex items-center gap-4 mb-8">
					<img 
						src="/images/image-removebg-preview.png" 
						alt="Coded Clouds" 
						class="w-16 h-16 object-contain invert brightness-0 grayscale opacity-80"
					/>
				</div>
				<p class="text-gray-400 max-w-sm text-lg leading-relaxed mb-10">
					Empowering global businesses with elite software architecture and intuitive design. From Pakistan to Saudi Arabia, we build the future.
				</p>
			</div>
			
			<div>
				<h4 class="text-lg font-bold mb-8">Services</h4>
				<ul class="space-y-4 text-gray-400">
					<li><a href="/services" class="hover:text-blue-400 transition-colors">Web Development</a></li>
					<li><a href="/services" class="hover:text-blue-400 transition-colors">Mobile Apps</a></li>
					<li><a href="/services" class="hover:text-blue-400 transition-colors">POS Softwares</a></li>
					<li><a href="/services" class="hover:text-blue-400 transition-colors">Health Care Tech</a></li>
				</ul>
			</div>

			<div>
				<h4 class="text-lg font-bold mb-8">Global Company</h4>
				<ul class="space-y-4 text-gray-400">
					<li><a href="/why-us" class="hover:text-blue-400 transition-colors">Why Work With Us</a></li>
					<li><a href="/our-team" class="hover:text-blue-400 transition-colors">Our Team</a></li>
					<li><a href="/contact" class="hover:text-blue-400 transition-colors">Start a Project</a></li>
				</ul>
			</div>
		</div>
		
		<div class="pt-12 border-t border-gray-800 flex flex-col md:row items-center justify-between gap-8">
			<p class="text-sm text-gray-500 italic">© 2026 Coded Clouds. All rights reserved. Multinationally Registered.</p>
		</div>
	</div>
</footer>