import type { Metadata } from 'next';
import { renderMarkdownFile } from '@/lib/markdown';

export const metadata: Metadata = {
  title: '小栗头盘串用户协议 | SponteoAI',
  description:
    '小栗头盘串 App 用户协议，说明服务内容、账号规则、会员权益、免责声明等条款。'
};

export default async function XiaolitouUserAgreementPage() {
  const content = await renderMarkdownFile('docs/user_agreement.md');

  return (
    <section className="legal-page">
      <div className="legal-card" dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  );
}
