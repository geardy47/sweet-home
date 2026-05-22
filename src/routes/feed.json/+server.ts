import { base } from '$app/paths';
import { getPosts } from '$lib/posts';
import { title, description, url, author, authorEmail } from '$lib/config';

export const prerender = true;

export async function GET() {
	const posts = await getPosts();

	const siteUrl = url.replace(/\/$/, '');
	const feedUrl = `${siteUrl}${base}/feed.json`;

	const items = posts.map((post) => ({
		id: `${siteUrl}${base}/${post.slug}`,
		url: `${siteUrl}${base}/${post.slug}`,
		title: post.title,
		content_text: post.description,
		date_published: new Date(post.date).toISOString(),
		tags: post.categories
	}));

	const feed = {
		version: 'https://jsonfeed.org/version/1',
		title,
		home_page_url: siteUrl,
		feed_url: feedUrl,
		description,
		author: {
			name: author,
			url: siteUrl,
			email: authorEmail
		},
		items
	};

	return new Response(JSON.stringify(feed, null, 2), {
		headers: {
			'Content-Type': 'application/feed+json; charset=utf-8'
		}
	});
}
