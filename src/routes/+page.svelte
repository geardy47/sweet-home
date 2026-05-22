<script lang="ts">
	import { base } from '$app/paths';
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	let { data } = $props();

	let posts = $derived(data.posts);
	let featured = $derived(posts[0]);
	let remaining = $derived([...posts.slice(1)].reverse());

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
	<title>{config.title}</title>
</svelte:head>

<section class="space-y-12">
	<!-- Category Cloud -->
	{#if categories.length > 0}
		<div class="flex flex-wrap gap-2">
			{#each categories as [category, count]}
				<a
					href="{base}/writings?category={encodeURIComponent(category)}"
					class="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground no-underline"
				>
					{category}
					<span class="text-muted text-xs">({count})</span>
				</a>
			{/each}
		</div>
	{/if}

	<!-- Empty State -->
	{#if posts.length === 0}
		<p class="text-muted py-12 text-center">
			Nothing written yet. Check back later.
		</p>
	{:else}
		<!-- Featured Post -->
		<article class="space-y-3">
			<h2 class="text-3xl font-bold leading-tight">
				<a
					href="{base}/{featured.slug}"
					class="text-fg hover:text-primary no-underline"
				>
					{featured.title}
				</a>
			</h2>
			<p class="text-muted text-sm">{formatDate(featured.date)}</p>
			<p class="leading-relaxed">{featured.description}</p>
		</article>

		<!-- Remaining Posts -->
		<ul class="space-y-8">
			{#each remaining as post (post.title)}
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
					<p class="text-muted text-sm leading-relaxed">
						{post.description}
					</p>
				</li>
			{/each}
		</ul>
	{/if}
</section>
