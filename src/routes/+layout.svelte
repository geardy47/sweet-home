<script lang="ts">
	import Sidebar from './sidebar.svelte';
	import Footer from './footer.svelte';

	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import '../app.css';

	// import * as config from '$lib/config';

	let { children } = $props();
	// let { children, data } = $props()
</script>

<div class="data">
	<div class="layout">
		<aside>
			<Sidebar />
		</aside>

		<main>
			<div class="content">
				{@render children?.()}
			</div>
			<div class="footer">
				<Footer />
			</div>
		</main>
	</div>
</div>

<style>
	.data {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}

	.layout {
		display: flex;
		min-height: 100%;
		width: 100%;
		box-sizing: border-box;

		main {
			padding-block: var(--size-fluid-6);
			margin-right: auto;
		}

		aside {
			margin-left: auto;
			position: sticky;
			top: 0;
			align-self: flex-start;
			padding-right: var(--size-fluid-6);
		}
	}
</style>
