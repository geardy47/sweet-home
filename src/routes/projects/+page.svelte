<script lang="ts">
	import * as config from '$lib/config';

	const projects = [
		{
			name: 'Sweet Home',
			description: 'Personal website and blog built with SvelteKit, featuring a Flexoki-inspired design system, dark mode, and markdown-powered content.',
			tags: ['SvelteKit', 'Tailwind CSS', 'mdsvex', 'shadcn-svelte'],
			url: 'https://github.com/geardy47/sweet-home'
		},
		{
			name: 'Flutter Toolkit',
			description: 'Collection of reusable Flutter widgets and utilities for accelerating mobile app development with clean architecture patterns.',
			tags: ['Flutter', 'Dart', 'Firebase'],
			url: 'https://github.com/geardy47'
		},
		{
			name: 'CLI Scaffold',
			description: 'Command-line productivity tool for scaffolding and automating common development workflows, written in Rust.',
			tags: ['Rust', 'CLI'],
			url: 'https://github.com/geardy47'
		},
		{
			name: 'Motion Dashboard',
			description: 'Real-time data visualization dashboard for monitoring application performance metrics and user analytics.',
			tags: ['Svelte', 'D3.js', 'WebSocket'],
			url: 'https://github.com/geardy47'
		}
	];
</script>

<svelte:head>
	<title>Projects — {config.title}</title>
</svelte:head>

<section class="prose dark:prose-invert max-w-none">
	<h1>Projects</h1>

	<div class="not-prose space-y-5">
		{#each projects as project}
			<article class="rounded-lg border border-border p-5">
				<h3 class="text-lg font-semibold">
					<a
						href={project.url}
						class="text-fg hover:text-primary no-underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						{project.name}
					</a>
				</h3>
				<p class="text-muted mt-1 text-sm leading-relaxed">{project.description}</p>
				<div class="mt-3 flex flex-wrap gap-2">
					{#each project.tags as tag}
						<span class="rounded-full bg-accent px-3 py-0.5 text-xs text-accent-foreground">{tag}</span>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</section>
