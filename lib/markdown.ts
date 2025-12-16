import path from 'path';
import { promises as fs } from 'fs';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';

export async function renderMarkdownFile(relativePath: string) {
  const absolutePath = path.join(process.cwd(), relativePath);
  const markdown = await fs.readFile(absolutePath, 'utf8');
  const processed = await remark().use(remarkGfm).use(html).process(markdown);
  return processed.toString();
}
