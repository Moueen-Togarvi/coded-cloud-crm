<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Pagination, Autoplay } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/pagination';

	const testimonials = [
		{
			quote: "Coded Clouds transformed our legacy systems into a modern SaaS powerhouse. Their attention to detail in UI/UX is unmatched in the industry.",
			author: "Sarah Jenkins",
			role: "CTO at TechFlow",
			avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150"
		},
		{
			quote: "Working with Hashim and his team was the best decision for our expansion into the Middle East. Their localized expertise in Dubai and Saudi Arabia made the transition seamless.",
			author: "Ahmed Al-Farsi",
			role: "Operations Director, Gulf Logistics",
			avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150"
		},
		{
			quote: "The Hospital Management System they built for us is world-class. It simplified our administrative workflows and improved patient care across all our branches.",
			author: "Dr. Maria Rodriguez",
			role: "Chief of Staff, St. Jude Medical",
			avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=150"
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

<section id="testimonials" class="py-16 bg-slate-50 overflow-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-3">CLIENT SUCCESS</h2>
			<h3 class="text-3xl md:text-4xl font-black text-gray-900 leading-tight">Hear From Our Partners</h3>
		</div>

		<div class="swiper-container pb-12">
			<div class="swiper-wrapper">
				{#each testimonials as testimonial}
					<div class="swiper-slide bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-auto">
						<div>
							<div class="flex gap-1 mb-8">
								{#each Array(5) as _}
									<svg class="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
								{/each}
							</div>
							<p class="text-lg text-gray-600 leading-relaxed font-medium mb-10 italic">
								"{testimonial.quote}"
							</p>
						</div>
						<div class="flex items-center gap-4">
							<img src={testimonial.avatar} alt={testimonial.author} class="w-12 h-12 rounded-full object-cover ring-4 ring-blue-50" />
							<div>
								<p class="text-base font-bold text-gray-900 leading-tight mb-1">{testimonial.author}</p>
								<p class="text-[10px] text-blue-600 font-bold uppercase tracking-widest">{testimonial.role}</p>
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
		width: 24px !important;
		border-radius: 4px !important;
	}
	:global(.swiper-pagination-bullet) {
		transition: all 0.3s ease;
	}
</style>
