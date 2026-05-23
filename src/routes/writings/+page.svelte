<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { formatDate, parseDate } from '$lib/utils';
	import * as config from '$lib/config';

	let { data } = $props();

	let posts = $derived(data.posts);

	let activeCategory = $state<string | null>(null);
	$effect(() => {
		activeCategory = page.url.searchParams.get('category');
	});

	let filteredPosts = $derived(
		activeCategory !== null
			? posts.filter((p) => p.categories.includes(activeCategory!))
			: posts
	);

	let categories = $derived.by(() => {
		const map = new Map<string, number>();
		for (const post of posts) {
			for (const cat of post.categories) {
				map.set(cat, (map.get(cat) ?? 0) + 1);
			}
		}
		return [...map.entries()].sort((a, b) => b[1] - a[1]);
	});

	let groupedByYear = $derived.by(() => {
		const map = new Map<number, typeof filteredPosts>();
		for (const post of filteredPosts) {
			const year = parseDate(post.date).getFullYear();
			if (!map.has(year)) map.set(year, []);
			map.get(year)!.push(post);
		}
		return [...map.entries()].sort((a, b) => b[0] - a[0]);
	});
</script>

<svelte:head>
	<title>Writings — {config.title}</title>
</svelte:head>

<section class="prose max-w-none">
	<h1 class="text-fg">Writings</h1>

	<!-- Category Cloud -->
	{#if categories.length > 0}
		<div class="not-prose flex flex-wrap gap-2">
			{#each categories as [category, count]}
				<a
					href="?category={encodeURIComponent(category)}"
					class="inline-flex items-center gap-1 rounded-full border border-border bg-accent px-3 py-1 text-sm text-accent-foreground no-underline"
				>
					{category}
					<span class="text-xs opacity-60">({count})</span>
				</a>
			{/each}
		</div>
	{/if}

	<!-- Empty State -->
	{#if posts.length === 0}
		<p class="not-prose text-muted py-12 text-center">
			Nothing written yet. Check back later.
		</p>
	{:else if filteredPosts.length === 0}
		<p class="not-prose text-muted py-12 text-center">
			No posts in &ldquo;{activeCategory}&rdquo; category.
		</p>
	{:else}
		<!-- Posts grouped by year -->
		{#each groupedByYear as [year, yearPosts]}
			<div class="not-prose">
				<h2 class="mb-4 text-2xl font-bold">{year}</h2>
				<ul class="space-y-6">
					{#each yearPosts as post (post.title)}
						<li class="space-y-1">
							<div class="flex items-baseline gap-3">
								<span class="text-muted shrink-0 text-sm tabular-nums">
									{formatDate(post.date)}
								</span>
								<a
									href="{base}/{post.slug}"
									class="text-fg hover:text-primary font-medium no-underline"
								>
									{post.title}
								</a>
							</div>
							<p class="text-muted text-sm leading-relaxed">{post.description}</p>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	{/if}
</section>
