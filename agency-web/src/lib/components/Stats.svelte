<script>
  let { stats = [
    { label: 'Projects Complete', value: '150+', color: 'text-blue-600' },
    { label: 'Clients Complete', value: '120+', color: 'text-green-600' }
  ] } = $props();
</script>

<section class="py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-3">Our Achievements</h2>
      <h3 class="text-3xl md:text-4xl font-black text-gray-900 leading-tight">What We Have Accomplished</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each stats as stat}
        <div class="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-md">
          <p class="text-5xl font-extrabold {stat.color}">{stat.value}</p>
          <p class="text-lg text-gray-600 mt-2 font-medium">{stat.label}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    background-color: #f9fafb;
  }
</style>