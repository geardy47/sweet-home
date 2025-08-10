<nav>
	<header>
		<a href="/" class="title">
			<b>Genta Shandi</b>
		</a>
	</header>
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
			display: flex;
			flex: 1;
			position: sticky;
			top: 0;
			overflow-y: auto;
			flex-direction: column;
			gap: var(--size-10);
			padding-top: var(--size-fluid-6);
		}

		.links {
			@media (min-width: 768px) {
				display: flex;
				position: relative;
				flex-direction: column;
				gap: var(--size-3);
			}
		}

		.title {
			color: inherit;
			text-decoration: none;
			font-size: var(--font-size-fluid-1);
		}

		a {
			color: inherit;
			text-decoration: none;
		}
	}
</style>
