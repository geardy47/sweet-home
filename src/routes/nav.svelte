<script lang="ts">
	import { toggleMode, mode } from 'mode-watcher';
	import { base } from '$app/paths';
	import Sun from '@lucide/svelte/icons/sun';
	import Moon from '@lucide/svelte/icons/moon';
	import * as config from '$lib/config';
</script>

<nav class="flex items-center justify-between py-6">
	<a href={base + "/"} class="text-lg font-semibold">{config.title}</a>
	<div class="flex items-center gap-6">
		<a href={base + "/writings"} class="text-muted hover:text-fg transition-colors">Writings</a>
		<a href={base + "/projects"} class="text-muted hover:text-fg transition-colors">Projects</a>
		<button onclick={toggleMode} class="text-muted hover:text-fg transition-colors cursor-pointer">
			{#if mode.current === 'dark'}
				<Sun size={18} />
			{:else}
				<Moon size={18} />
			{/if}
		</button>
	</div>
</nav>
