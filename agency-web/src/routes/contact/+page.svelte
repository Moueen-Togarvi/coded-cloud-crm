<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	let visible = $state(false);
	let submitted = $state(false);

	onMount(() => {
		visible = true;
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		submitted = true;
	}
</script>

<svelte:head>
	<title>Contact Coded Clouds | Launch Your Project</title>
</svelte:head>

<Navbar />

<main class="pt-32 pb-24 bg-white min-h-screen overflow-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		{#if visible}
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
				<div in:fly={{ x: -20, duration: 800 }}>
					<h1 class="text-5xl md:text-7xl font-black text-gray-900 mb-6">Let's Build <br/> The <span class="text-blue-600">Future</span> Together.</h1>
					<p class="text-xl text-gray-500 max-w-lg font-medium leading-relaxed mb-12">
						Have a project in mind? Our global team is ready to help you scale your digital vision.
					</p>

					<div class="space-y-10">
						<div class="flex items-center gap-6">
							<div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
							</div>
							<div>
								<h3 class="text-lg font-bold text-gray-900">Call Us</h3>
								<p class="text-gray-500">+92 300 1234567</p>
							</div>
						</div>
						<div class="flex items-center gap-6">
							<div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
							</div>
							<div>
								<h3 class="text-lg font-bold text-gray-900">Email Us</h3>
								<p class="text-gray-500">hello@codedclouds.com</p>
							</div>
						</div>
						<div class="flex items-center gap-6">
							<div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
							</div>
							<div>
								<h3 class="text-lg font-bold text-gray-900">Global Hub</h3>
								<p class="text-gray-500">Lahore | Dubai | Riyadh</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Contact Form -->
				<div class="bg-gray-50 rounded-[3rem] p-10 lg:p-16 border border-gray-100 shadow-2xl shadow-blue-900/5" in:fly={{ x: 20, duration: 800 }}>
					{#if submitted}
						<div class="text-center py-20" in:fade>
							<div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
								<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
							</div>
							<h3 class="text-3xl font-black text-gray-900 mb-4">Inquiry Received!</h3>
							<p class="text-gray-500 font-medium">One of our specialists will reach out shortly.</p>
							<button onclick={() => submitted = false} class="mt-10 text-blue-600 font-bold hover:underline">Send another message</button>
						</div>
					{:else}
						<form onsubmit={handleSubmit} class="space-y-6">
							<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div class="space-y-2">
									<label for="name" class="text-sm font-bold text-gray-900 uppercase tracking-widest">Full Name</label>
									<input type="text" id="name" required class="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all font-medium" placeholder="Hashim Saqib" />
								</div>
								<div class="space-y-2">
									<label for="email" class="text-sm font-bold text-gray-900 uppercase tracking-widest">Business Email</label>
									<input type="email" id="email" required class="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all font-medium" placeholder="ceo@company.com" />
								</div>
							</div>
							<div class="space-y-2">
								<label for="subject" class="text-sm font-bold text-gray-900 uppercase tracking-widest">Subject</label>
								<select id="subject" class="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all font-medium">
									<option>App Development</option>
									<option>Web Development</option>
									<option>Enterprise POS</option>
									<option>Health Tech Solution</option>
									<option>Other / General</option>
								</select>
							</div>
							<div class="space-y-2">
								<label for="message" class="text-sm font-bold text-gray-900 uppercase tracking-widest">Message</label>
								<textarea id="message" rows="5" required class="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all font-medium" placeholder="Tell us about your project goals..."></textarea>
							</div>
							<button type="submit" class="w-full btn-primary py-5 text-lg shadow-xl shadow-blue-200">
								SEND INQUIRY
							</button>
						</form>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</main>

<style>
	@reference "../../routes/layout.css";

	.btn-primary {
		@apply bg-blue-600 text-white rounded-2xl font-bold shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center;
	}
</style>
