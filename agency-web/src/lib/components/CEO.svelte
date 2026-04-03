<script lang="ts">
	const ceoName = 'Hashim Saqib';
	const ceoTitle = 'Founder & Chief Executive Officer';
	const quote = 'At Coded Clouds, we don\'t just build software—we engineer digital futures. Our commitment is to bridge the gap between complex technology and intuitive user experiences, empowering businesses from Pakistan to the UAE and beyond.';
</script>

<section id="ceo" class="py-16 bg-white overflow-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="glass p-8 lg:p-14 rounded-[2.5rem] border border-blue-100 flex flex-col lg:flex-row items-center gap-12 shadow-2xl shadow-blue-50">
			<!-- CEO Icon/Placeholder (Premium 3D feel) -->
			<div class="relative w-64 h-64 flex-shrink-0 group">
				<div class="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20"></div>
				<div class="absolute inset-0 bg-blue-400 rounded-[2.5rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500 opacity-20"></div>
				<div class="relative w-full h-full bg-blue-600 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl transform active:scale-95 transition-all">
					<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
				</div>
			</div>

			<div class="flex-1 space-y-8">
				<div class="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-widest uppercase mb-4">LEADERSHIP</div>
				
				<blockquote class="text-2xl lg:text-3xl font-serif text-gray-900 border-l-4 border-blue-600 pl-8 leading-tight italic">
					"{quote}"
				</blockquote>
				
				<div class="pt-6">
					<h4 class="text-3xl font-black text-gray-900 mb-1">{ceoName}</h4>
					<p class="text-lg text-blue-600 font-bold uppercase tracking-wider">{ceoTitle}</p>
				</div>

				<div class="flex gap-4 pt-4">
					<a href="#linkedin" aria-label="LinkedIn" class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
					</a>
					<a href="#twitter" aria-label="Twitter" class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.glass {
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(8px);
	}
</style>
