import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			// `as` here tells the compiler to treat the `file.metadata` as if it has
			// the type of Post
			// `Omit` here is taking all Post's properties except `slug`
			const metadata = file.metadata as Omit<Post, 'slug'>;
			// `satisfies` here checks if `post` (with metadata and added slug) could be
			// assigned to a `Post` type
			const post = { ...metadata, slug } satisfies Post;
			if (post.published) posts.push(post);
		}
	}

	// `sort` the posts decendingly
	posts = posts.sort(
		(first, second) =>
			new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
