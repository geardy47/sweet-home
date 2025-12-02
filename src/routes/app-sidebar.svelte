<script lang="ts">
	import HouseIcon from '@lucide/svelte/icons/house';
	import TargetIcon from '@lucide/svelte/icons/target';
	import NotebookIcon from '@lucide/svelte/icons/notebook-text';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	// Menu items.
	const items = [
		{
			title: 'Home',
			url: 'about',
			icon: HouseIcon
		},
		{
			title: 'Writings',
			url: 'writings',
			icon: NotebookIcon
		},
		{
			title: 'Projects',
			url: 'projects',
			icon: TargetIcon
		}
	];
</script>

<Sidebar.Root>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton class="data-[slot=sidebar-menu-button]:!p-1.5">
					{#snippet child({ props })}
						<a href="about" {...props}>
							<span class="text-base font-semibold">Genta Shandi</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<!-- <item.icon /> -->
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
