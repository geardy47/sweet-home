<script lang="ts">
	import * as config from '$lib/config';
</script>

<nav>
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<ul class="links">
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/writing">Writing</a>
		</li>
		<li>
			<a href="/projects">Projects</a>
		</li>
	</ul>

	<button>Toggle</button>
</nav>

<style>
	nav {
		padding-block: var(--size-7);

		@media (min-width: 768px) {
			/* display: grid; */
			display: flex;
			justify-content: space-between;
		}

		.links {
			margin-block: var(--size-7);

			@media (min-width: 768px) {
				/* display: grid; */
				display: flex;
				gap: var(--size-7);
				margin-block: 0;
			}
		}

		a {
			color: inherit;
			text-decoration: none;
		}
	}
</style>
