<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	let { data } = $props();

	let posts = $derived(data.posts);

	let activeCategory = $state<string | null>(null);
	$effect(() => {
		activeCategory = page.url.searchParams.get('category');
	});

	let filteredPosts = $derived.by(() => {
		const cat = activeCategory;
		const filtered = cat
			? posts.filter((p) => p.categories.includes(cat))
			: posts;
		return filtered.sort((a, b) => b.date.localeCompare(a.date));
	});

	let categories = $derived.by(() => {
		const map = new Map<string, number>();
		for (const post of posts) {
			for (const cat of post.categories) {
				map.set(cat, (map.get(cat) ?? 0) + 1);
			}
		}
		return [...map.entries()].sort((a, b) => b[1] - a[1]);
	});
</script>

<svelte:head>
	<title>Writings — {config.title}</title>
</svelte:head>

<section class="prose max-w-none">
	<h1 class="text-fg">Writings</h1>

	<!-- Category Cloud -->
	{#if categories.length > 0}
		<div class="not-prose gap-2 mb-8 flex flex-wrap items-center">
			{#each categories as [category, count] (category)}
				<a
					href="?category={encodeURIComponent(category)}"
					class="gap-1 border-border bg-accent px-3 py-1 text-sm text-accent-foreground inline-flex items-center rounded-full border no-underline"
				>
					{category}
					<span class="text-xs opacity-60">({count})</span>
				</a>
			{/each}
			{#if activeCategory}
				<a href="?" class="text-muted text-sm hover:text-fg no-underline">
					&times; clear filter
				</a>
			{/if}
		</div>
	{/if}

	<!-- Empty State -->
	{#if posts.length === 0}
		<p class="not-prose text-muted py-8 sm:py-12 text-center">
			Nothing written yet. Check back later.
		</p>
	{:else if filteredPosts.length === 0}
		<p class="not-prose text-muted py-8 sm:py-12 text-center">
			No posts in &ldquo;{activeCategory}&rdquo; category.
		</p>
	{:else}
		<!-- Posts: flat chronological list -->
		<ul class="not-prose space-y-4">
			{#each filteredPosts as post (post.title)}
				<li class="sm:flex-row sm:items-baseline gap-4 flex flex-col">
					<span class="text-muted text-sm w-28 shrink-0 tabular-nums">
						{formatDate(post.date)}
					</span>
					<a
						href="{base}/{post.slug}"
						class="text-fg hover:text-primary font-medium no-underline hover:underline"
					>
						{post.title}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</section>
