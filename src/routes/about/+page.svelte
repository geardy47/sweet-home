<script lang="ts">
	import { base } from '$app/paths';
	import * as config from '$lib/config';
	import Github from '~icons/fa7-brands/github';
	import Linkedin from '~icons/fa7-brands/linkedin';
	import Envelope from '~icons/fa7-solid/envelope';

	const interviews = [
		{ publication: 'Flutter Dev Weekly', title: 'Building Cross-Platform Apps at Scale', date: '2024-08-15' },
		{ publication: 'Mobile Masters Podcast', title: 'From Flutter to Native: The Full Spectrum', date: '2024-03-22' },
		{ publication: 'TechTalks Magazine', title: 'The Future of Mobile Development', date: '2023-11-10' }
	];
</script>

<svelte:head>
	<title>About — {config.title}</title>
</svelte:head>

<article class="prose dark:prose-invert max-w-none">
	<!-- Header: photo placeholder + name -->
	<div class="not-prose flex items-center gap-5">
		<div class="h-24 w-24 shrink-0 rounded-full bg-accent" aria-label="Photo placeholder" />
		<div>
			<h1 class="text-3xl font-bold">{config.author}</h1>
			<p class="text-muted">{config.description}</p>
		</div>
	</div>

	<!-- Social links -->
	<div class="not-prose flex items-center gap-4">
		<a href={config.social.github} class="text-muted hover:text-fg transition-colors" aria-label="GitHub">
			<Github />
		</a>
		<a href={config.social.linkedin} class="text-muted hover:text-fg transition-colors" aria-label="LinkedIn">
			<Linkedin />
		</a>
		<a href={config.social.email} class="text-muted hover:text-fg transition-colors" aria-label="Email">
			<Envelope />
		</a>
	</div>

	<!-- Bio -->
	<p>
		I'm a mobile developer passionate about crafting intuitive, performant applications
		that people love to use. With deep experience across Flutter, Swift, and Kotlin,
		I bridge the gap between design and engineering to deliver polished experiences on every platform.
	</p>
	<p>
		My journey started tinkering with Android apps, evolved through building cross-platform
		frameworks, and now spans full-stack mobile development. I believe great software comes from
		understanding both the technology and the people who use it.
	</p>
	<p>
		Beyond coding, I enjoy contributing to open-source, writing about mobile architecture,
		and exploring new tools that push the boundaries of what we can build on devices in our pockets.
	</p>

	<!-- Interviews table -->
	<h2>Interviews</h2>
	<div class="not-prose overflow-x-auto">
		<table class="w-full text-sm">
			<thead>
				<tr class="border-b border-border text-left">
					<th class="pb-2 pr-4 font-medium">Publication</th>
					<th class="pb-2 pr-4 font-medium">Title</th>
					<th class="pb-2 font-medium">Date</th>
				</tr>
			</thead>
			<tbody>
				{#each interviews as interview}
					<tr class="border-b border-border">
						<td class="py-2 pr-4">{interview.publication}</td>
						<td class="py-2 pr-4">{interview.title}</td>
						<td class="py-2 text-muted">{interview.date}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<!-- Colophon -->
	<h2>Colophon</h2>
	<p>
		This site is built with <a href="https://kit.svelte.dev/">SvelteKit</a>,
		styled with <a href="https://tailwindcss.com/">Tailwind CSS</a>,
		uses <a href="https://mdsvex.com/">mdsvex</a> for markdown content,
		<a href="https://www.shadcn-svelte.com/">shadcn-svelte</a> for UI components,
		and is hosted on <a href="https://pages.github.com/">GitHub Pages</a>.
		The design uses the Flexoki color palette.
	</p>
</article>
