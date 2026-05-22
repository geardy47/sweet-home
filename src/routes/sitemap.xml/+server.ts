import { base } from '$app/paths';
import { getPosts } from '$lib/posts';
import { url } from '$lib/config';

export const prerender = true;

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export async function GET() {
	const posts = await getPosts();
	const siteUrl = url.replace(/\/$/, '');

	const urls: Array<{ loc: string; priority: string; lastmod?: string }> = [
		{ loc: `${siteUrl}${base}`, priority: '1.0' },
		{ loc: `${siteUrl}${base}/writings`, priority: '0.8' },
		{ loc: `${siteUrl}${base}/projects`, priority: '0.8' },
		...posts.map((post) => ({
			loc: `${siteUrl}${base}/${post.slug}`,
			lastmod: new Date(post.date).toISOString().split('T')[0],
			priority: '0.6'
		}))
	];

	const urlElements = urls
		.map(
			(u) => `\t<url>
	\t\t<loc>${escapeXml(u.loc)}</loc>${u.lastmod ? `\n\t\t<lastmod>${u.lastmod}</lastmod>` : ''}
	\t\t<priority>${u.priority}</priority>
	\t</url>`
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
