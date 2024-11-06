import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

const config: UserConfig = {
	plugins: [UnoCSS(), sveltekit()], 
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler', // or "modern"
				silenceDeprecations: ["legacy-js-api"],  //temp fix, 
			}
		}
	}
};


export default config;



