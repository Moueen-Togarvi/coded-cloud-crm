import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  build: {
    target: 'esnext', // Optimize for modern browsers
    minify: 'esbuild', // Faster build times
    chunkSizeWarningLimit: 500 // Avoid warnings for large chunks
  }
});
