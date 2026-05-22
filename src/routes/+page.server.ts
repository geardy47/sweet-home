import { error } from '@sveltejs/kit';
import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const res = await fetch('api/posts');
	if (!res.ok) error(500, 'Failed to load posts');
	const posts: Post[] = await res.json();
	return { posts };
}
