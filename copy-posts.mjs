#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, extname } from 'path';
import { readdirSync } from 'fs';

const SRC = '/Users/gentashandi/Personal/Projects/sweet-home/src/posts';
const DEST = '/Users/gentashandi/Library/Mobile Documents/iCloud~md~obsidian/Documents/Moon/40_Resources/Articles';

// Filesystem creation dates from the user
const creationDates = {
  'building-apis.md': '2026-05-24',
  'design-systems.md': '2026-05-24',
  'first-post.md': '2026-05-17',
  'flutter-tips.md': '2026-05-24',
  'javascript-ecosystem.md': '2026-05-24',
  'mobile-dev.md': '2026-05-24',
  'open-source.md': '2026-05-24',
  'rust-cli.md': '2026-05-24',
  'second-post.md': '2026-05-22',
  'svelte-5-reactivity.md': '2026-05-25',
};

// Ensure dest exists
if (!existsSync(DEST)) {
  mkdirSync(DEST, { recursive: true });
}

const files = readdirSync(SRC).filter(f => f.endsWith('.md'));

for (const file of files) {
  const srcPath = join(SRC, file);
  const destPath = join(DEST, file);

  const content = readFileSync(srcPath, 'utf-8');
  const creationDate = creationDates[file];
  if (!creationDate) {
    console.error(`  ⚠ No creation date for ${file}, skipping`);
    continue;
  }

  // Parse frontmatter — extract between --- markers
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) {
    console.error(`  ⚠ No frontmatter in ${file}, skipping`);
    continue;
  }

  const rawFm = fmMatch[1];
  const bodyStart = fmMatch.index + fmMatch[0].length;
  const body = content.slice(bodyStart).trimStart();

  // Parse lines into a map, preserving order and comments
  const lines = rawFm.split('\n');
  const parsed = {};
  const orderedKeys = [];
  let currentKey = null;
  let currentIndent = 0;
  let inArray = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const keyMatch = line.match(/^(\w+):\s*(.*)/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      orderedKeys.push(currentKey);
      const val = keyMatch[2].trim();
      if (val === '' || val === '|' || val === '>') {
        // multi-line or array follows
        parsed[currentKey] = { type: 'scalar', value: '' };
        // Check next lines for array items
        let items = [];
        let j = i + 1;
        while (j < lines.length && lines[j].match(/^\s+-\s+/)) {
          items.push(lines[j].replace(/^\s+-\s+/, '').trim());
          j++;
        }
        if (items.length > 0) {
          parsed[currentKey] = { type: 'array', value: items };
          i = j - 1;
        }
      } else if (val.startsWith('[') && val.endsWith(']')) {
        // Inline array like [sveltekit, svelte]
        const items = val.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
        parsed[currentKey] = { type: 'array', value: items };
      } else {
        const clean = val.replace(/^['"]|['"]$/g, '');
        parsed[currentKey] = { type: 'scalar', value: clean };
      }
    } else if (line.match(/^\s+-\s+/) && currentKey) {
      // continuation of array from empty scalar above
      if (parsed[currentKey]?.type === 'array') {
        parsed[currentKey].value.push(line.replace(/^\s+-\s+/, '').trim());
      } else {
        const item = line.replace(/^\s+-\s+/, '').trim();
        parsed[currentKey] = { type: 'array', value: [item] };
      }
    }
  }

  // Build new frontmatter
  const newLines = ['---'];
  for (const key of orderedKeys) {
    if (key === 'date') {
      // Override date with creation date
      newLines.push(`date: '${creationDate}'`);
    } else if (key === 'title' || key === 'description' || key === 'published') {
      const val = parsed[key].value;
      if (key === 'published' && (val === true || val === 'true' || val === '')) {
        newLines.push(`${key}: true`);
      } else if (val === true || val === false) {
        newLines.push(`${key}: ${val}`);
      } else if (val !== undefined && val !== '') {
        newLines.push(`${key}: '${val}'`);
      } else {
        newLines.push(`${key}: ${val || ''}`);
      }
    } else if (key === 'categories') {
      if (parsed[key]?.type === 'array' && parsed[key].value.length > 0) {
        newLines.push('categories:');
        for (const item of parsed[key].value) {
          const clean = item.replace(/^['"]|['"]$/g, '');
          newLines.push(`  - ${clean}`);
        }
      }
    }
  }
  // Add source field
  newLines.push("source: 'sweet-home blog'");
  newLines.push('---');

  const newContent = newLines.join('\n') + '\n\n' + body;

  writeFileSync(destPath, newContent, 'utf-8');
  console.log(`  ✓ ${file} -> date: ${creationDate}`);
}

console.log('\nDone! All files copied to destination.');
