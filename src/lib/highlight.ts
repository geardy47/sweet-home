import Prism from 'prismjs';
import { escapeSvelte } from 'mdsvex';

// Load common language grammars (core already includes: markup, css, clike, javascript)
import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-yaml.js';
import 'prismjs/components/prism-markdown.js';
import 'prismjs/components/prism-sql.js';

/**
 * Map common language aliases to their Prism grammar names.
 * mdsvex passes the language string from markdown code fences (e.g. ```js, ```ts, ```sh).
 */
const ALIAS_MAP: Record<string, string> = {
	js: 'javascript',
	ts: 'typescript',
	bash: 'bash',
	sh: 'bash',
	shell: 'bash',
	zsh: 'bash',
	yml: 'yaml',
	md: 'markdown',
	mdown: 'markdown',
	html: 'markup'
};

/**
 * Highlight code using PrismJS.
 * Returns highlighted HTML string escaped for Svelte embedding, or escaped plain text if language not supported.
 */
export function prismHighlighter(
	code: string,
	lang: string | undefined
): string {
	const language = lang?.toLowerCase() ?? '';
	const grammarName = ALIAS_MAP[language] || language;

	let html: string;
	if (grammarName && Prism.languages[grammarName]) {
		try {
			html = Prism.highlight(code, Prism.languages[grammarName], grammarName);
		} catch {
			html = escapeHtml(code);
		}
	} else {
		html = escapeHtml(code);
	}

	// Escape curly braces, backticks, and backslash sequences so the result
	// can be safely embedded inside a Svelte `{@html \`...\`}` template literal.
	const escaped = escapeSvelte(html);
	const rawClass = language || 'text';
	// Sanitize langClass: only allow alphanumeric, underscore, and hyphen.
	// Prevents malformed markdown language identifiers from injecting attributes.
	const langClass = rawClass.replace(/[^a-zA-Z0-9_-]/g, '');

	return `<pre class="language-${langClass}">{@html \`<code class="language-${langClass}">${escaped}</code>\`}</pre>`;
}

/** Escape HTML entities in plain text for unhighlighted code blocks. */
function escapeHtml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}
