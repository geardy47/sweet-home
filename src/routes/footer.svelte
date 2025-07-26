<script lang="ts">
	import * as config from '$lib/config';
	import Linkedin from '~icons/fa7-brands/linkedin';
	import Github from '~icons/fa7-brands/github';
	import Envelope from '~icons/fa7-solid/envelope';
</script>

<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
	<div class="contacts">
		<a href="mailto:gentashandi@gmail.com">
			<Envelope />
		</a>
		<a href="https://github.com/geardy47">
			<Github />
		</a>
		<a href="https://linkedin.com/in/gentashandi/">
			<Linkedin />
		</a>
	</div>
</footer>

<style>
	footer {
		padding-top: var(--size-7);
		border-top: 1px solid var(--border);

		display: flex;
		justify-content: space-between;

		.contacts {
			display: flex;
			gap: var(--size-2);
		}

		p {
			color: var(--text-2);
		}

		a {
			height: var(--size-3);
			width: var(--size-3);
			color: inherit;
			text-decoration: none;
		}
	}
</style>
