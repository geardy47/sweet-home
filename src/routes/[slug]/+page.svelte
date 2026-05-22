<script lang="ts">
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1 class="text-3xl font-bold capitalize">{data.meta.title}</h1>
		<p class="mt-2 text-sm text-muted">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="not-prose mt-7 flex gap-3">
		{#each data.meta.categories as category (category)}
			<span class="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">&num;{category}</span>
		{/each}
	</div>

	<div class="prose dark:prose-invert max-w-none">
		<data.content />
	</div>
</article>
