import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What is this called? — Everyday vocabulary | SponteoAI',
  description: 'Learn everyday vocabulary with pictures, pronunciation audio and gentle recall practice. An iOS app from SponteoAI for learners aged 13 and over.',
  alternates: { canonical: 'https://www.sponteoai.com/apps/what-is-this-called' }
};

export default function Page() {
  return (
    <main lang="en" className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-8 sm:py-12">
        <nav aria-label="Main navigation" className="mb-16 flex flex-wrap items-center justify-between gap-4">
          <a href="/en" className="text-xl font-bold tracking-tight">SponteoAI</a>
          <a href="mailto:skye@sponteoai.com" className="text-sm text-blue-700 underline underline-offset-4">Contact support</a>
        </nav>
        <header className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-700">Picture it. Hear it. Remember it.</p>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">What is this called?</h1>
          <p className="mt-7 text-xl leading-relaxed text-slate-600">Find the words for the world around you. Build everyday vocabulary through pictures, pronunciation audio and short moments of recall.</p>
          <p className="mt-7 inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-medium text-blue-900">iOS app · Preparing for release · Ages 13+</p>
        </header>
        <section aria-label="Learning features" className="my-14 grid gap-5 sm:grid-cols-3">
          {[
            ['See & listen', 'Connect everyday objects with their names and supplied pronunciation audio.'],
            ['Recall & review', 'Pause to remember a word, then keep practicing the words you want to revisit.'],
            ['Keep your place', 'Download available lessons for offline learning. Sign in to sync progress when the account service is available.']
          ].map(([title, text]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="mb-3 text-xl font-semibold">{title}</h2><p className="leading-relaxed text-slate-600">{text}</p></article>)}
        </section>
        <section className="rounded-2xl bg-slate-900 p-8 text-white">
          <h2 className="text-2xl font-semibold">Learn at your own pace</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-200">Free to download, with optional Premium access. US plans: $39.99/year with a 3-day trial for eligible new subscribers, or $9.99/week without a trial. Both offer the same Premium access for their duration.</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">Subscriptions renew automatically unless canceled. Local prices and eligibility appear in Apple’s purchase confirmation. Cancel a trial at least 24 hours before it ends to avoid a charge.</p>
        </section>
        <section lang="zh" className="my-12 max-w-3xl">
          <h2 className="text-2xl font-semibold">用图片和声音，记住身边的词</h2>
          <p className="mt-4 leading-relaxed text-slate-600">What is this called? 通过图片、发音和短暂回忆练习帮助学习日常词汇。可复习想记住的词、下载开放的学习资料，并在账号服务可用后登录同步进度。面向 13 岁及以上用户，正在准备 iOS 首发。</p>
        </section>
        <footer className="border-t border-slate-200 pt-7 text-sm text-slate-600">
          <div className="flex flex-wrap gap-x-7 gap-y-3 font-medium text-blue-700">
            <a href="/privacy/what-is-this-called" className="underline underline-offset-4">Privacy Policy / 隐私政策</a>
            <a href="/terms/what-is-this-called" className="underline underline-offset-4">Terms of Service / 服务条款</a>
            <a href="mailto:skye@sponteoai.com" className="underline underline-offset-4">skye@sponteoai.com</a>
          </div>
          <p className="mt-6">© 2026 Shanghai Zizai Era Technology Co., Ltd. · 上海自在纪元科技有限公司</p>
        </footer>
      </div>
    </main>
  );
}
