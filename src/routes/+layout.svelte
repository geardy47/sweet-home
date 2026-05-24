<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';

	import '../app.css';
	import './layout.css';
	import Nav from './nav.svelte';
	import Footer from './footer.svelte';

	let { children } = $props();
</script>

<ModeWatcher disableHeadScriptInjection />
<div class="max-w-prose px-4 mx-auto flex min-h-[100dvh] flex-col">
	<div class="shrink-0"><Nav /></div>
	<main class="pb-16 flex-1">
		{@render children?.()}
	</main>
	<div class="shrink-0"><Footer /></div>
</div>
