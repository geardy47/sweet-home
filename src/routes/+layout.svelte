<script lang="ts">
	import { base } from '$app/paths';
	import { url } from '$lib/config';
	import { ModeWatcher } from 'mode-watcher';

	import '../app.css';
	import './layout.css';
	import Nav from './nav.svelte';
	import Footer from './footer.svelte';

	let { children } = $props();

	const siteUrl = $derived(url.replace(/\/$/, ''));
</script>

<svelte:head>
	<link rel="alternate" type="application/rss+xml" title="RSS" href="{siteUrl}{base}/feed.xml" />
	<link rel="alternate" type="application/feed+json" title="JSON Feed" href="{siteUrl}{base}/feed.json" />
</svelte:head>

<ModeWatcher disableHeadScriptInjection />
<div class="max-w-prose px-4 mx-auto flex min-h-dvh flex-col">
	<div class="shrink-0"><Nav /></div>
	<main class="pb-16 flex-1">
		{@render children?.()}
	</main>
	<div class="shrink-0"><Footer /></div>
</div>
