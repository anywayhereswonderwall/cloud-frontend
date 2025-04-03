import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()

		// vite: {
		// 	server: {
		// 		proxy: {
		// 			'/api': {
		// 				target: 'http://backend:8081',
		// 				rewrite: (path) => path.replace(/^\/api/, ''),
		// 				changeOrigin: true
		// 			}
		// 		}
		// 	}
		// }
	}
};

export default config;
