<script lang="ts">
	import { base } from '$app/paths';
	import * as config from '$lib/config';

	const projects = [
		{
			name: 'sweet-home',
			role: 'Solo',
			status: 'Active',
			timeline: 'May 2025 — Present',
			url: 'https://github.com/geardy47/sweet-home',
			demo: 'https://gentashandi.com',
			image: `${base}/images/projects/sweet-home-home.png`,
			description:
				'Personal website and blog built with SvelteKit. Features a GitHub-inspired design system, dark mode, and markdown-powered content with Shiki syntax highlighting.',
			highlights: [
				'GitHub-inspired design with dark mode',
				'Markdown blog with mdsvex + Shiki syntax highlighting',
				'Full-text RSS and JSON feeds',
				'Static-site generated, hosted on GitHub Pages'
			],
			tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'mdsvex', 'Shiki', 'GitHub Pages']
		},
		{
			name: 'Manatek',
			role: 'Solo',
			status: 'Archived',
			timeline: 'Jan 2019 — Apr 2019',
			url: 'https://github.com/geardy47/Manatek',
			demo: null,
			image: `${base}/images/projects/manatek-placeholder.svg`,
			description:
				'Pharmacy management application (Manajemen Apotek) built as a university project. Handles inventory tracking, drug stock management, and prescription records.',
			highlights: [
				'Drug inventory and stock management',
				'Prescription recording and tracking',
				'Supplier and purchase order management'
			],
			tags: ['PHP', 'MySQL', 'Bootstrap']
		}
	];
</script>

<svelte:head>
	<title>Projects — {config.title}</title>
</svelte:head>

<section class="prose max-w-none">
	<h1 class="text-fg">Projects</h1>

	<div class="not-prose space-y-6">
		{#each projects as project (project.name)}
			<article class="rounded-lg border-border p-5 sm:p-6 border">
				<!-- Image: browser frame for web projects, raw for others -->
				{#if project.image}
					{#if project.name === 'sweet-home'}
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							class="block -mx-5 -mt-5 sm:-mx-6 sm:-mt-6 overflow-hidden rounded-t-lg"
						>
							<div class="bg-muted/40">
								<!-- Browser chrome -->
								<div class="flex items-center gap-1.5 border-border border-b px-4 py-2.5">
									<span class="inline-block size-2.5 rounded-full bg-red-500"></span>
									<span class="inline-block size-2.5 rounded-full bg-yellow-500"></span>
									<span class="inline-block size-2.5 rounded-full bg-green-500"></span>
									<span class="text-muted ml-2 inline-block h-5 flex-1 rounded bg-muted/30 text-[10px] leading-5 text-center">gentashandi.com</span>
								</div>
								<img
									src={project.image}
									alt="{project.name} screenshot"
									class="w-full aspect-[16/10] object-contain"
								/>
							</div>
						</a>
					{:else}
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							class="block -mx-5 -mt-5 sm:-mx-6 sm:-mt-6 overflow-hidden rounded-t-lg bg-muted/30"
						>
							<img
								src={project.image}
								alt="{project.name} screenshot"
								class="w-full aspect-[16/10] object-contain"
							/>
						</a>
					{/if}
				{/if}

				<!-- Header: name + badges -->
				<div class="flex flex-wrap items-start justify-between gap-2">
					<div>
						<h3 class="text-lg sm:text-xl font-semibold">
							<a
								href={project.url}
								class="text-fg hover:text-primary no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								{project.name}
							</a>
						</h3>
					</div>
					<div class="flex flex-wrap gap-2">
						<span class="border-border bg-accent px-2.5 py-0.5 text-xs text-accent-foreground rounded-full border">
							{project.role}
						</span>
						<span
							class="px-2.5 py-0.5 text-xs rounded-full border
							{project.status === 'Active'
								? 'border-green-600/30 bg-green-50 text-green-700 dark:border-green-400/30 dark:bg-green-950 dark:text-green-400'
								: 'border-border bg-accent text-accent-foreground'}"
						>
							{project.status}
						</span>
					</div>
				</div>

				<!-- Timeline -->
				<p class="text-muted mt-1.5 text-xs tabular-nums">
					{project.timeline}
				</p>

				<!-- Description -->
				<p class="text-muted mt-3 text-sm leading-relaxed">
					{project.description}
				</p>

				<!-- Highlights -->
				{#if project.highlights.length > 0}
					<ul class="text-muted mt-3 space-y-1 text-sm">
						{#each project.highlights as highlight (highlight)}
							<li class="flex items-start gap-2">
								<span class="mt-0.5 shrink-0">-</span>
								<span>{highlight}</span>
							</li>
						{/each}
					</ul>
				{/if}

				<!-- Tech tags -->
				<div class="mt-4 flex flex-wrap items-center justify-between gap-3">
					<div class="flex flex-wrap gap-2">
						{#each project.tags as tag (tag)}
							<span
								class="border-border bg-accent px-2.5 py-0.5 text-xs text-accent-foreground rounded-full border"
							>{tag}</span
							>
						{/each}
					</div>

					<!-- Links -->
					<div class="flex flex-wrap gap-3">
						<a
							href={project.url}
							class="text-xs text-muted hover:text-fg no-underline hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub &rarr;
						</a>
						{#if project.demo}
							<a
								href={project.demo}
								class="text-xs text-muted hover:text-fg no-underline hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Live demo &rarr;
							</a>
						{/if}
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
