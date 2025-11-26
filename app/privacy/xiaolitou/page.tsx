import type { Metadata } from 'next';
import { renderMarkdownFile } from '@/lib/markdown';

export const metadata: Metadata = {
  title: '小栗头盘串隐私政策 | SponteoAI',
  description:
    '了解上海自在纪元科技有限公司对小栗头盘串 App 用户个人信息的收集、使用与保护方式。'
};

export default async function XiaolitouPrivacyPolicyPage() {
  const content = await renderMarkdownFile('docs/privacy_policy.md');

  return (
    <section className="legal-page">
      <div className="legal-card" dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  );
}
