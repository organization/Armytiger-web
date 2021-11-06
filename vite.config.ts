import { defineConfig } from 'vite';
import path from 'path';
import pluginSvg from 'vite-svg-loader';
import pluginVue from '@vitejs/plugin-vue';

export default defineConfig({
	publicDir: './public',

	plugins: [
		pluginSvg({ svgo: false }),
		pluginVue()
	],

	resolve: {
		alias: { '@': path.resolve(__dirname, 'app') },
		extensions: ['.js', '.ts']
	}
});
