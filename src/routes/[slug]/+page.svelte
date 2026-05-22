<script lang="ts">
	import { base } from '$app/paths';
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} — {config.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<header class="mb-10">
		<a
			href="{base}/writings"
			class="text-muted hover:text-primary mb-6 inline-flex items-center gap-1 text-sm no-underline transition-colors"
		>
			&larr; Back to writings
		</a>

		<hgroup>
			<h1 class="text-4xl font-bold capitalize leading-tight">{data.meta.title}</h1>
			<p class="mt-3 text-sm text-muted">
				Published on {formatDate(data.meta.date)}
			</p>
		</hgroup>

		{#if data.meta.categories?.length}
			<div class="not-prose mt-5 flex flex-wrap gap-2">
				{#each data.meta.categories as category (category)}
					<a
						href="{base}/writings?category={encodeURIComponent(category)}"
						class="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground no-underline transition-colors hover:opacity-80"
					>
						&num;{category}
					</a>
				{/each}
			</div>
		{/if}
	</header>

	<div class="prose dark:prose-invert max-w-none">
		<data.content />
	</div>

	<footer class="not-prose mt-16 border-t border-border pt-8">
		<a
			href="{base}/writings"
			class="text-muted hover:text-primary inline-flex items-center gap-1 text-sm no-underline transition-colors"
		>
			&larr; Back to writings
		</a>
	</footer>
</article>
