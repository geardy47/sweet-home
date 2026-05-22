<script lang="ts">
	import { base } from '$app/paths';
	import * as config from '$lib/config';
	import Linkedin from '~icons/fa7-brands/linkedin';
	import Github from '~icons/fa7-brands/github';
	import Envelope from '~icons/fa7-solid/envelope';
	import Rss from '@lucide/svelte/icons/rss';
</script>

<footer class="mt-16 flex items-center justify-between border-t border-border pt-7 pb-4">
	<p class="text-muted text-sm">{config.title} &copy; {new Date().getFullYear()}</p>
	<div class="flex items-center gap-4">
		<a href={base + "/feed.xml"} class="text-muted hover:text-fg transition-colors" aria-label="RSS feed">
			<Rss size={16} />
		</a>
		<a href="mailto:gentashandi@gmail.com" class="text-muted hover:text-fg transition-colors" aria-label="Email">
			<Envelope class="size-4" />
		</a>
		<a href="https://github.com/geardy47" class="text-muted hover:text-fg transition-colors" aria-label="GitHub">
			<Github class="size-4" />
		</a>
		<a href="https://linkedin.com/in/gentashandi/" class="text-muted hover:text-fg transition-colors" aria-label="LinkedIn">
			<Linkedin class="size-4" />
		</a>
	</div>
</footer>
