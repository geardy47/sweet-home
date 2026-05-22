<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';

	import '../app.css';
	import './layout.css';
	import Nav from './nav.svelte';
	import Footer from './footer.svelte';

	let { children } = $props();
</script>

<ModeWatcher />
<div class="mx-auto max-w-prose px-4">
	<Nav />
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>
