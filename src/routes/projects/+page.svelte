<script lang="ts">
	import { base } from '$app/paths';
	import * as config from '$lib/config';

	let currentImageIndex: Record<string, number> = {};

	const projects = [
		{
			name: 'Portfolio',
			role: 'Solo',
			status: 'Active',
			timeline: 'May 2025 — Present',
			url: 'https://github.com/geardy47/sweet-home',
			demo: 'https://gentashandi.com',
			images: [`${base}/images/projects/sweet-home-home.png`],
			description:
				'Personal website and blog built with SvelteKit. Features a GitHub-inspired design system, dark mode, and markdown-powered content with Shiki syntax highlighting.',
			highlights: [
				'GitHub-inspired design with dark mode',
				'Markdown blog with mdsvex + Shiki syntax highlighting',
				'Full-text RSS and JSON feeds',
				'Static-site generated, hosted on GitHub Pages'
			],
			tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'mdsvex', 'Shiki', 'GitHub Pages']
		},
		{
			name: 'Stitch and Fit',
			role: 'Solo',
			status: 'Active',
			timeline: '2025 — Present',
			url: 'https://github.com/geardy47/stitch-and-fit',
			demo: 'https://stitch-and-fit.vercel.app',
			images: [`${base}/images/projects/stitch-and-fit.png`],
			description:
				'Clothing E-Commerce MVP with a customer-facing storefront and a separate admin panel for managing products, orders, and inventory.',
			highlights: [
				'Customer storefront with product catalog and checkout',
				'Separate admin panel for product, order, and inventory management',
				'Role-based access: customer vs admin views',
				'Deployed on Vercel with CI/CD'
			],
			tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Vercel', 'PostgreSQL']
		},
		{
			name: 'Stitch and Fit Admin',
			role: 'Solo',
			status: 'Active',
			timeline: '2025 — Present',
			url: 'https://github.com/geardy47/stitch-and-fit',
			demo: 'https://stitch-and-fit.vercel.app/admin',
			images: [`${base}/images/projects/stitch-and-fit-admin.png`],
			description:
				'Admin dashboard for the Stitch & Fit e-commerce platform. Manages products, orders, inventory, and user roles with a dedicated admin interface.',
			highlights: [
				'Product CRUD management with image uploads',
				'Order tracking and status updates',
				'Inventory stock monitoring',
				'Role-based authentication for admin access'
			],
			tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Vercel', 'PostgreSQL']
		},
		{
			name: 'Raya App',
			role: 'Tech Lead & Mobile Developer',
			status: 'Active',
			timeline: 'May 2022 — Present',
			url: 'https://github.com/geardy47',
			demo: 'https://apps.apple.com/sg/app/raya-digital-bank/id1627393834',
			noGitHub: true,
			images: [
				`${base}/images/projects/raya-appstore.png`,
				`${base}/images/projects/raya-playstore.png`
			],
			description:
				'Digital banking app by Bank Raya, serving millions of users across Indonesia. Built and maintained as a core member of the mobile engineering team.',
			highlights: [
				'Transaction feature development and optimization',
				'Payment gateway integration (QRIS, transfer, etc.)',
				'Visa card management integration',
				'Release management to Play Store & App Store',
				'Git repository management and code review'
			],
			tags: ['Flutter', 'Dart', 'Firebase', 'Kotlin', 'Swift', 'Visa', 'Payment Gateway']
		},
		{
			name: 'Budget Buddy',
			role: 'Solo',
			status: 'Active',
			timeline: '2025 — Present',
			url: 'https://github.com/geardy47/budgetbuddy',
			demo: 'https://budget-buddy-blush-two.vercel.app/transactions',
			images: [`${base}/images/projects/budget-buddy.png`],
			description:
				'Personal finance tracking app for managing transactions, budgets, accounts, and savings goals. Built with a focus on simplicity and mobile-first UX.',
			highlights: [
				'Transaction tracking with categorization',
				'Budget planning and monitoring',
				'Multi-account management',
				'Savings goals with progress tracking',
				'Responsive mobile-first design'
			],
			tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel']
		},
		{
			name: 'Manatek',
			role: 'Solo',
			status: 'Archived',
			timeline: 'Jan 2019 — Apr 2019',
			url: 'https://github.com/geardy47/Manatek',
			demo: null,
			images: [`${base}/images/projects/manatek-placeholder.svg`],
			description:
				'Pharmacy management application (Manajemen Apotek) built as a university project. Handles inventory tracking, drug stock management, and prescription records.',
			highlights: [
				'Drug inventory and stock management',
				'Prescription recording and tracking',
				'Supplier and purchase order management'
			],
			tags: ['PHP', 'MySQL', 'Bootstrap']
		}
	];

	function prevImage(projectName: string) {
		const project = projects.find(p => p.name === projectName);
		if (!project) return;
		currentImageIndex[projectName] = ((currentImageIndex[projectName] ?? 0) - 1 + project.images.length) % project.images.length;
	}

	function nextImage(projectName: string) {
		const project = projects.find(p => p.name === projectName);
		if (!project) return;
		currentImageIndex[projectName] = ((currentImageIndex[projectName] ?? 0) + 1) % project.images.length;
	}
</script>

<svelte:head>
	<title>Projects — {config.title}</title>
</svelte:head>

<section class="prose max-w-none">
	<h1 class="text-fg">Projects</h1>

	<div class="not-prose space-y-6">
		{#each projects as project (project.name)}
			<article class="rounded-lg border-border p-5 sm:p-6 border">

				<!-- Image showcase with carousel -->
				{#if project.images.length > 0}
					<div class="flex items-center justify-center rounded-lg bg-muted/30 p-4 sm:p-6 mb-5 sm:mb-6 relative">
						{#if project.name === 'Portfolio' || project.name === 'Stitch and Fit' || project.name === 'Stitch and Fit Admin' || project.name === 'Budget Buddy'}
							<div class="w-full overflow-hidden rounded-lg ring-1 ring-border/50 shadow-sm">
								<div class="bg-muted/40">
									<!-- Browser chrome -->
									<div class="flex items-center gap-1.5 border-border border-b px-4 py-2">
										<span class="inline-block size-2.5 rounded-full bg-red-500"></span>
										<span class="inline-block size-2.5 rounded-full bg-yellow-500"></span>
										<span class="inline-block size-2.5 rounded-full bg-green-500"></span>
										<span class="text-muted ml-2 inline-block h-5 flex-1 rounded bg-muted/30 text-[10px] leading-5 text-center">
											{project.name === 'Portfolio' ? 'gentashandi.com' : project.name === 'Stitch and Fit Admin' ? 'stitch-and-fit.vercel.app/admin/products' : project.name === 'Stitch and Fit' ? 'stitch-and-fit.vercel.app' : project.name === 'Budget Buddy' ? 'budget-buddy-blush-two.vercel.app/transactions' : ''}
										</span>
									</div>
									<a href={project.demo || project.url} target="_blank" rel="noopener noreferrer">
										<img src={project.images[(currentImageIndex[project.name] ?? 0)]} alt="{project.name} screenshot" class="w-full" />
									</a>
								</div>
							</div>
						{:else}
							<div class="w-full overflow-hidden rounded-lg ring-1 ring-border/50 shadow-sm">
								<a href={project.demo || project.url} target="_blank" rel="noopener noreferrer">
									<img src={project.images[(currentImageIndex[project.name] ?? 0)]} alt="{project.name} screenshot" class="w-full" />
								</a>
							</div>
						{/if}

						<!-- Prev/Next buttons -->
						{#if project.images.length > 1}
							<button
								onclick={() => prevImage(project.name)}
								class="absolute left-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full bg-background/80 text-muted shadow-sm ring-1 ring-border hover:bg-background hover:text-fg transition-colors"
								aria-label="Previous image"
							>&larr;</button>
							<button
								onclick={() => nextImage(project.name)}
								class="absolute right-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full bg-background/80 text-muted shadow-sm ring-1 ring-border hover:bg-background hover:text-fg transition-colors"
								aria-label="Next image"
							>&rarr;</button>
							<!-- Dots indicator -->
							<div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
								{#each project.images as _, i}
									<button
										onclick={() => { currentImageIndex[project.name] = i; }}
										class="size-1.5 rounded-full transition-colors {i === (currentImageIndex[project.name] ?? 0) ? 'bg-foreground' : 'bg-muted-foreground/40'}"
										aria-label="Go to image {i + 1}"
									></button>
								{/each}
							</div>
						{/if}
					</div>
				{/if}

				<!-- Header: name + badges -->
				<div class="flex flex-wrap items-start justify-between gap-2">
					<div>
						<h3 class="text-lg sm:text-xl font-semibold">
							<a
								href={project.url}
								class="text-fg hover:text-primary no-underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								{project.name}
							</a>
						</h3>
					</div>
					<div class="flex flex-wrap gap-2">
						<span class="border-border bg-accent px-2.5 py-0.5 text-xs text-accent-foreground rounded-full border">
							{project.role}
						</span>
						<span
							class="px-2.5 py-0.5 text-xs rounded-full border
							{project.status === 'Active'
								? 'border-green-600/30 bg-green-50 text-green-700 dark:border-green-400/30 dark:bg-green-950 dark:text-green-400'
								: 'border-border bg-accent text-accent-foreground'}"
						>
							{project.status}
						</span>
					</div>
				</div>

				<!-- Timeline -->
				<p class="text-muted mt-1.5 text-xs tabular-nums">
					{project.timeline}
				</p>

				<!-- Description -->
				<p class="text-muted mt-3 text-sm leading-relaxed">
					{project.description}
				</p>

				<!-- Highlights -->
				{#if project.highlights.length > 0}
					<ul class="text-muted mt-3 space-y-1 text-sm">
						{#each project.highlights as highlight (highlight)}
							<li class="flex items-start gap-2">
								<span class="mt-0.5 shrink-0">-</span>
								<span>{highlight}</span>
							</li>
						{/each}
					</ul>
				{/if}

				<!-- Tech tags -->
				<div class="mt-4 flex flex-wrap items-center justify-between gap-3">
					<div class="flex flex-wrap gap-2">
						{#each project.tags as tag (tag)}
							<span
								class="border-border bg-accent px-2.5 py-0.5 text-xs text-accent-foreground rounded-full border"
							>{tag}</span
							>
						{/each}
					</div>

					<!-- Links -->
					<div class="flex flex-wrap gap-3">
						{#if !project.noGitHub}
							<a
								href={project.url}
								class="text-xs text-muted hover:text-fg no-underline hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub &rarr;
							</a>
						{/if}
						{#if project.demo}
							<a
								href={project.demo}
								class="text-xs text-muted hover:text-fg no-underline hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Live demo &rarr;
							</a>
						{/if}
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
