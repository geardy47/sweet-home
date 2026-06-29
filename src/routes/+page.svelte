<script lang="ts">
	import { base } from '$app/paths';
	import * as config from '$lib/config';

	let { data } = $props();

	let posts = $derived(data.posts);
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<article class="prose max-w-none">
	<!-- Bio -->
	<p>
		I'm a Technical Lead and Mobile Developer at <a href="https://www.linkedin.com/company/pt-bank-raya-indonesia-tbk">Bank Raya</a>, where I build and maintain digital banking applications used by millions. My work spans Flutter, Kotlin, and Swift — with a focus on clean architecture, test-driven development, and smooth App Store &amp; Play Store releases.
	</p>
	<p>
		My journey started tinkering with Android apps, evolved through frontend development with React and AngularJS, and now leads engineering teams delivering cross-platform mobile experiences. I believe great software comes from understanding both the technology and the people who use it.
	</p>
	<p>
		Beyond work, I write about mobile architecture, explore Linux and macOS, and build fullstack apps using SvelteKit and Supabase. I'm always looking for tools and patterns that push mobile development forward.
	</p>

	<a
		href="https://drive.google.com/file/d/1p-vxeTdHw_dLfsqObiIYp-OUzHK0A-5E/view"
		target="_blank"
		rel="noopener noreferrer"
		class="not-prose text-muted hover:text-fg mb-6 inline-flex items-center gap-1.5 text-sm no-underline hover:underline"
	>
		Download CV &rarr;
	</a>

	<!-- Latest writings -->
	{#if posts.length > 0}
		{@const post = posts[0]}
		<h2>Latest</h2>
		<div class="not-prose">
			<a
				href="{base}/{post.slug}"
				class="text-fg hover:text-primary text-lg font-medium no-underline hover:underline"
			>
				{post.title}
			</a>
			<p class="text-muted mt-1 text-sm">
				{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · {post.readingTime} read
			</p>
			<p class="text-muted mt-1">
				{post.description}
			</p>
			<a
				href="{base}/{post.slug}"
				class="text-muted hover:text-fg mt-1 inline-block text-sm no-underline hover:underline"
			>
				Keep reading &rarr;
			</a>
		</div>
	{/if}

	<!-- Colophon -->
	<h2>Colophon</h2>
	<p>
		This site is built with <a href="https://kit.svelte.dev/">SvelteKit</a>,
		styled with <a href="https://tailwindcss.com/">Tailwind CSS</a>, uses
		<a href="https://mdsvex.com/">mdsvex</a>
		for markdown content,
		<a href="https://www.shadcn-svelte.com/">shadcn-svelte</a> for UI
		components, and is hosted on
		<a href="https://pages.github.com/">GitHub Pages</a>. The design uses the
		GitHub color palette.
	</p>
</article>
