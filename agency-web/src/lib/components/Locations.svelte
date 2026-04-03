<script lang="ts">
	const offices = [
		{
			country: 'Pakistan',
			city: 'Lahore & Karachi',
			address: 'Arfa Software Technology Park, Level 4',
			flag: '🇵🇰'
		},
		{
			country: 'Dubai',
			city: 'Business Bay',
			address: 'Iris Bay Tower, Suite 1204',
			flag: '🇦🇪'
		},
		{
			country: 'Saudi Arabia',
			city: 'Riyadh',
			address: 'King Fahad Road, Al Olaya District',
			flag: '🇸🇦'
		}
	];
</script>

<section id="locations" class="py-16 bg-slate-50 relative overflow-hidden">
	<!-- Background Abstract Shape -->
	<div class="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 transform origin-top-right"></div>
	
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
		<div class="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
			<div class="max-w-2xl">
				<h2 class="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-3">GLOBAL PRESENCE</h2>
				<h3 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
					Bridging Innovation<br /> Across Three Borders.
				</h3>
			</div>
			<p class="text-lg text-gray-600 max-w-md">
				With strategic hubs in the Middle East and South Asia, Coded Clouds delivers localized expertise with global standards.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each offices as office}
				<div class="glass p-8 rounded-[2rem] border border-white shadow-xl shadow-blue-100/20 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 group">
					<div class="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{office.flag}</div>
					<h4 class="text-3xl font-black text-gray-900 mb-2">{office.country}</h4>
					<div class="text-blue-600 font-bold text-lg mb-4">{office.city}</div>
					<p class="text-sm text-gray-500 font-medium leading-relaxed">
						{office.address}
					</p>
					
					<div class="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
						<span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Office Hours: 09:00 - 18:00</span>
						<div class="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	@reference "../../routes/layout.css";

	.glass {
		background: rgba(255, 255, 255, 0.6);
		backdrop-filter: blur(12px);
	}
</style>
