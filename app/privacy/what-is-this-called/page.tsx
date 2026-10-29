import type { Metadata } from 'next';
import { renderMarkdownFile } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'What is this called? — Privacy Policy | SponteoAI',
  description: 'Privacy Policy for What is this called?, the vocabulary learning app by SponteoAI.',
  alternates: { canonical: 'https://www.sponteoai.com/privacy/what-is-this-called' }
};

export default async function Page() {
  const content = await renderMarkdownFile('docs/witc-privacy.md');
  return <main lang="en" className="legal-page"><article className="legal-card" dangerouslySetInnerHTML={{ __html: content }} /></main>;
}
