import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex';
import slug from 'rehype-slug';
import autolink from 'rehype-autolink-headings';
import { createHighlighter } from 'shiki';
import flexokiLight from './src/lib/themes/flexoki-light.json' with { type: 'json' };
import flexokiDark from './src/lib/themes/flexoki-dark.json' with { type: 'json' };

const escape_svelty = (str) =>
	str
		.replace(/[{}`]/g, (c) => ({ '{': '&#123;', '}': '&#125;', '`': '&#96;' }[c]))
		.replace(/\\/g, '&#92;');

const highlighter = await createHighlighter({
	themes: [flexokiLight, flexokiDark],
	langs: [
		'javascript',
		'typescript',
		'svelte',
		'css',
		'html',
		'bash',
		'shell',
		'json',
		'markdown',
		'yaml',
		'tsx',
		'jsx'
	]
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: (code, lang) => {
			const highlighted = escape_svelty(
				highlighter.codeToHtml(code, {
					lang: lang || 'text',
					themes: {
						light: 'flexoki-light',
						dark: 'flexoki-dark'
					},
					defaultColor: false
				})
			);
			return `{@html \`${highlighted}\`}`;
		}
	},
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
			base: process.env.NODE_ENV === 'development' ? '' : '/sweet-home'
		}
	}
};

export default config;
