<script lang="ts">
	import Sidebar from './sidebar.svelte';
	import Footer from './footer.svelte';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import '../app.css';

	import * as config from '$lib/config';

	let { children } = $props();
	// let { children, data } = $props()
</script>

<div class="layout">
	<div class="header">
		<a href="/" class="title">
			<b>{config.title}</b>
		</a>
	</div>

	<div class="sidebar">
		<Sidebar />
	</div>

	<main>
		{@render children?.()}
	</main>

	<div class="footer">
		<Footer />
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-template-rows: auto 1fr auto;
		grid-template-areas:
			'header header'
			'sidebar main'
			'sidebar footer';

		min-height: 100%;
		box-sizing: border-box;

		padding-inline: var(--size-fluid-4);
		padding-block: var(--size-fluid-6);

		@media (min-width: 1440px) {
			padding-inline: var(--size-fluid-10);
			padding-block: var(--size-fluid-6);
		}

		.title {
			color: inherit;
			text-decoration: none;
			font-size: var(--font-size-fluid-1);
		}

		.header {
			grid-area: header;
		}

		main {
			grid-area: main;
			padding-block: var(--size-10);
			overflow-y: auto;
		}

		.sidebar {
			padding-block: var(--size-10);
			grid-area: sidebar;
		}

		.footer {
			grid-area: footer;
		}
	}
</style>
