import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/HTMLCSS-Svelte/",
  plugins: [svelte({ experimental: { inspector: true } })]
});