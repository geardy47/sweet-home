import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex';
import slug from 'rehype-slug';
import autolink from 'rehype-autolink-headings';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	rehypePlugins: [
		slug,
		[
			autolink,
			{
				behavior: 'append',
				content: {
					type: 'element',
					tagName: 'span',
					properties: { className: ['anchor-icon'] },
					children: [{ type: 'text', value: '#' }]
				},
				properties: { className: ['heading-anchor'] }
			}
		]
	]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		alias: {
			'@/*': './src/lib/'
		},
		paths: {
			base: process.argv.includes('dev') ? '' : '/sweet-home'
		}
	}
};

export default config;
