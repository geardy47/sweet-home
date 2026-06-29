import { base } from '$app/paths';
import { getPosts } from '$lib/posts';
import { title, description, url } from '$lib/config';

export const prerender = true;

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function rfc2822(date: string): string {
	return new Date(date).toUTCString();
}

export async function GET() {
	const posts = await getPosts();

	const siteUrl = url.replace(/\/$/, '');
	const feedUrl = `${siteUrl}${base}/feed.xml`;

	const items = posts
		.map(
			(post) => `
		<item>
			<title>${escapeXml(post.title)}</title>
			<link>${siteUrl}${base}/${post.slug}</link>
			<guid isPermaLink="true">${siteUrl}${base}/${post.slug}</guid>
			<description>${escapeXml(post.description)}</description>
			<pubDate>${rfc2822(post.date)}</pubDate>
			${post.readingTime ? `<itunes:duration>${escapeXml(post.readingTime)}</itunes:duration>` : ''}
			${post.categories.map((cat) => `<category>${escapeXml(cat)}</category>`).join('\n\t\t\t')}
		</item>`
		)
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
	<channel>
		<title>${escapeXml(title)}</title>
		<link>${siteUrl}${base}</link>
		<description>${escapeXml(description)}</description>
		<language>en</language>
		<atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
		${items}
	</channel>
</rss>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8'
		}
	});
}
