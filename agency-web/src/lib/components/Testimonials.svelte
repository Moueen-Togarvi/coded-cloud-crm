<script lang="ts">
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
</script>

<section id="testimonials" class="py-24 bg-slate-50 overflow-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">CLIENT SUCCESS</h2>
			<h3 class="text-4xl md:text-5xl font-black text-gray-900 leading-tight">Hear From Our Partners</h3>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each testimonials as testimonial}
				<div class="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
					<div>
						<div class="flex gap-1 mb-8">
							{#each Array(5) as _}
								<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
							{/each}
						</div>
						<p class="text-xl text-gray-600 leading-relaxed font-medium mb-10 italic">
							"{testimonial.quote}"
						</p>
					</div>
					<div class="flex items-center gap-4">
						<img src={testimonial.avatar} alt={testimonial.author} class="w-14 h-14 rounded-full object-cover ring-4 ring-blue-50" />
						<div>
							<h4 class="text-lg font-bold text-gray-900">{testimonial.author}</h4>
							<p class="text-sm text-blue-600 font-bold uppercase tracking-widest">{testimonial.role}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
