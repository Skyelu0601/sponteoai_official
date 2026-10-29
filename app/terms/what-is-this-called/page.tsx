import type { Metadata } from 'next';
import { renderMarkdownFile } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'What is this called? — Terms of Service | SponteoAI',
  description: 'Terms of Service for What is this called?, the vocabulary learning app by SponteoAI.',
  alternates: { canonical: 'https://www.sponteoai.com/terms/what-is-this-called' }
};

export default async function Page() {
  const content = await renderMarkdownFile('docs/witc-terms.md');
  return <main lang="en" className="legal-page"><article className="legal-card" dangerouslySetInnerHTML={{ __html: content }} /></main>;
}
