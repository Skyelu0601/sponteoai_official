import { getTranslations } from 'next-intl/server';

export default async function AboutSection() {
  const t = await getTranslations('home.about');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          {t('content')}
        </p>
      </div>
    </section>
  );
}

