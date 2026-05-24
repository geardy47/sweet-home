<script lang="ts">
	import { base } from '$app/paths';
	import * as config from '$lib/config';
	import Linkedin from '~icons/fa7-brands/linkedin';
	import Github from '~icons/fa7-brands/github';
	import Envelope from '~icons/fa7-solid/envelope';
	import Rss from '@lucide/svelte/icons/rss';
</script>

<footer
	class="gap-3 border-border pt-7 pb-4 sm:flex-row sm:justify-between sm:gap-0 flex flex-col items-center border-t"
>
	<p class="text-muted text-sm">
		{config.title} &copy; {new Date().getFullYear()}
	</p>
	<div class="gap-5 flex items-center">
		<a
			href={base + '/feed.xml'}
			class="text-muted hover:text-fg transition-colors"
			aria-label="RSS feed"
		>
			<Rss size={16} />
		</a>
		<a
			href="mailto:gentashandi@gmail.com"
			class="text-muted hover:text-fg transition-colors"
			aria-label="Email"
		>
			<Envelope class="size-4" />
		</a>
		<a
			href="https://github.com/geardy47"
			class="text-muted hover:text-fg transition-colors"
			aria-label="GitHub"
		>
			<Github class="size-4" />
		</a>
		<a
			href="https://linkedin.com/in/gentashandi/"
			class="text-muted hover:text-fg transition-colors"
			aria-label="LinkedIn"
		>
			<Linkedin class="size-4" />
		</a>
	</div>
</footer>
