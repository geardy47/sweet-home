<nav>
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
</nav>

<style>
	nav {
		@media (min-width: 768px) {
			display: grid;
			gap: var(--size-10);
		}

		.links {
			@media (min-width: 768px) {
				display: grid;
				gap: var(--size-3);
			}
		}

		a {
			color: inherit;
			text-decoration: none;
		}
	}
</style>
