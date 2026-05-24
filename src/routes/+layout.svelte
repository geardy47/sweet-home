<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';

	import '../app.css';
	import './layout.css';
	import Nav from './nav.svelte';
	import Footer from './footer.svelte';

	let { children } = $props();
</script>

<ModeWatcher disableHeadScriptInjection />
<div class="mx-auto max-w-prose px-4 flex min-h-[100dvh] flex-col">
	<Nav class="shrink-0" />
	<main class="flex-1 pb-16">
		{@render children?.()}
	</main>
	<Footer class="shrink-0" />
</div>
