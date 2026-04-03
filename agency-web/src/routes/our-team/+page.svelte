<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import CEO from '$lib/components/CEO.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = false;

	const team = [
		{
			name: 'Aisha Rahman',
			role: 'Lead Architect',
			image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800',
			specialty: 'System Design'
		},
		{
			name: 'Omar Farooq',
			role: 'VP of Engineering',
			image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800',
			specialty: 'Cloud Infrastructure'
		},
		{
			name: 'Sarah Chen',
			role: 'Head of Design',
			image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800',
			specialty: 'UI/UX Experiences'
		},
		{
			name: 'Tariq Al-Fayed',
			role: 'Mobile Director',
			image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800',
			specialty: 'React Native & iOS'
		},
		{
			name: 'Fatima Zahra',
			role: 'Senior Project Manager',
			image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=800',
			specialty: 'Agile Delivery'
		},
		{
			name: 'Hassan Ali',
			role: 'Data Scientist',
			image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800',
			specialty: 'AI & Analytics'
		}
	];

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Our Team | Coded Clouds Agency</title>
</svelte:head>

<Navbar />

<main class="min-h-screen pt-24 bg-white">
	<!-- Hero Section -->
	<div class="bg-gray-950 py-24 lg:py-32 relative overflow-hidden rounded-b-[4rem]">
		<div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000')] bg-cover bg-center opacity-10"></div>
		
		<div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
			{#if visible}
				<div in:fly={{ y: 30, duration: 1000, delay: 100 }}>
					<p class="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 inline-flex items-center gap-3">
						<span class="w-10 h-0.5 bg-blue-500"></span>
						THE MINDS BEHIND THE MAGIC
						<span class="w-10 h-0.5 bg-blue-500"></span>
					</p>
					
					<h1 class="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.05]">
						Meet The <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-200">Engineers</span>
					</h1>

					<p class="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
						We are a global collective of architects, designers, and visionaries dedicated to pushing the boundaries of what software can achieve.
					</p>
				</div>
			{/if}
		</div>
	</div>

	<!-- CEO Section -->
	<div class="py-10">
		<CEO />
	</div>

	<!-- Team Grid -->
	<div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-20 pb-32">
		<div class="text-center mb-20">
			<h2 class="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Leadership Core</h2>
			<p class="text-gray-500 mt-4 max-w-lg mx-auto font-medium">The technical experts leading our multi-regional operations.</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each team as member}
				<div class="group relative rounded-[2.5rem] overflow-hidden bg-gray-50 aspect-[4/5] cursor-pointer">
					<img 
						src={member.image} 
						alt={member.name}
						class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
						loading="lazy"
					/>
					
					<!-- Overlay Gradient -->
					<div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
					
					<!-- Content Info -->
					<div class="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
						<div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
						</div>
						<h3 class="text-2xl font-black text-white tracking-tight mb-1">{member.name}</h3>
						<p class="text-blue-400 text-sm font-bold tracking-widest uppercase mb-3">{member.role}</p>
						<div class="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg border border-white/10">
							<span class="text-[10px] text-gray-300 font-bold tracking-wider uppercase">{member.specialty}</span>
						</div>
					</div>
				</div>
			{/each}
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