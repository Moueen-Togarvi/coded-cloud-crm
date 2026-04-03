<script lang="ts">
	import { onMount } from 'svelte';
	import { reveal } from '$lib/actions/reveal';
	import Swiper from 'swiper';
	import { Pagination, Autoplay } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/pagination';

	const testimonials = [
		{
			quote: "Coded Clouds revolutionized our healthcare digital presence. Their specialized architecture for our rehabilitation platform across UAE and KSA has been instrumental in our regional scaling.",
			author: "Rooh Rehab",
			role: "Healthcare Leadership",
			avatar: "/images/rooh_rehab_logo_1775213787660.png"
		},
		{
			quote: "The high-end UI/UX and seamless system health monitoring built for our professional services hub has set a new benchmark for our global service delivery.",
			author: "PRO",
			role: "Professional Services",
			avatar: "/images/image-removebg-preview (3).png"
		},
		{
			quote: "From legacy distribution to a modern SaaS model, Coded Clouds helped us automate our entire supply chain with zero downtime during the transition.",
			author: "Sab ka Atta",
			role: "Distribution & FMCG",
			avatar: "/images/image-removebg-preview (1).png"
		}
	];

	onMount(() => {
		new Swiper('.swiper-container', {
			modules: [Pagination, Autoplay],
			pagination: { el: '.swiper-pagination', clickable: true },
			autoplay: { delay: 5000, disableOnInteraction: false },
			slidesPerView: 1,
			spaceBetween: 30,
			breakpoints: {
				640: { slidesPerView: 1 },
				768: { slidesPerView: 2 },
				1024: { slidesPerView: 3 }
			}
		});
	});
</script>

<section id="testimonials" class="py-16 bg-slate-50 overflow-hidden" use:reveal>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-3">CLIENT SUCCESS</h2>
			<h3 class="text-3xl md:text-4xl font-black text-gray-900 leading-tight">Hear From Our Partners</h3>
		</div>

		<div class="swiper-container pb-12">
			<div class="swiper-wrapper">
				{#each testimonials as testimonial}
					<div class="swiper-slide bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-blue-900/5 hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-[450px]">
						<div>
							<div class="flex gap-1.5 mb-10">
								{#each Array(5) as _}
									<svg class="w-5 h-5 text-lime-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
								{/each}
							</div>
							<p class="text-xl text-gray-800 leading-relaxed font-bold tracking-tight mb-auto">
								"{testimonial.quote}"
							</p>
						</div>
						<div class="flex items-center gap-5 mt-10">
							<div class="w-14 h-14 rounded-2xl overflow-hidden ring-4 ring-blue-50 shadow-inner bg-gray-50 flex items-center justify-center">
								<img src={testimonial.avatar} alt={testimonial.author} class="w-full h-full object-contain" />
							</div>
							<div class="space-y-1">
								<p class="text-lg font-black text-gray-900 leading-none">{testimonial.author}</p>
								<p class="text-[10px] text-blue-600 font-black uppercase tracking-[.2em]">{testimonial.role}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination mt-10"></div>
		</div>
	</div>
</section>

<style>
	:global(.swiper-pagination-bullet-active) {
		background: #2563eb !important;
		width: 28px !important;
		border-radius: 6px !important;
	}
	:global(.swiper-pagination-bullet) {
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		background: #cbd5e1;
		opacity: 1;
	}
</style>
