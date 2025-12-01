<script lang="ts">
	import { ModeWatcher, setMode } from 'mode-watcher';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	import './layout.css';
	import AppSidebar from './app-sidebar.svelte';
	import Footer from './footer.svelte';
	// import * as config from '$lib/config';

	setMode('dark');
	let { children } = $props();
</script>

<ModeWatcher />
<Sidebar.Provider>
	<AppSidebar />
	<main>
		<div class="content">
			<Sidebar.Trigger />
			{@render children?.()}
		</div>
		<div class="footer">
			<Footer />
		</div>
	</main>
	<!-- <main> -->
	<!--   {@render children?.()} -->
	<!-- </main> -->
</Sidebar.Provider>

<style>
</style>
