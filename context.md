# Code Context

## Files Retrieved

1. `package.json` - Tech stack: SvelteKit 5, Tailwind CSS 4, Vite, TypeScript,
   mdsvex.
2. `src/lib/config.ts` - Site metadata (Genta Shandi, Mobile Developer).
3. `src/lib/types.ts` - `Post` and `Categories` types for blog.
4. `src/posts/first-post.md` - Sample markdown content with frontmatter.
5. `src/routes/+layout.ts` - `prerender = true` indicates static site
   generation.

## Key Code

### Data Models (`src/lib/types.ts`)

```ts
export type Categories = 'flutter' | 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};
```

### Site Config (`src/lib/config.ts`)

```ts
export const title = 'Genta Shandi';
export const description = 'Mobile Developer';
export const url = dev ? 'http://localhost:5173/' : 'gentashandi.com';
```

## Architecture

- **Framework**: SvelteKit 5 (Runes mode likely given version).
- **Styling**: Tailwind CSS v4.
- **Content**: Markdown-based blogging via `mdsvex`. Posts stored in
  `src/posts/`.
- **Routing**:
  - `/`: Home page.
  - `/about`: About page.
  - `/projects`: Projects showcase.
  - `/writings`: Blog index.
  - `/[slug]`: Dynamic route for individual blog posts.
- **Deployment**: Static Site Generation (SSG) via `adapter-static`.

## Start Here

- `src/routes/+page.svelte`: Main entry point for the homepage.
- `src/routes/[slug]/+page.svelte`: Logic for rendering markdown posts.
- `src/lib/components/`: Shared UI components.
