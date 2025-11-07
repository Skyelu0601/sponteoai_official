import { getTranslations } from 'next-intl/server';

export default async function AboutPage() {
  const t = await getTranslations('about');

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">{t('title')}</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary-blue">{t('company.name')}</h2>
        <div className="space-y-2 text-gray-700">
          <p><span className="font-medium">English:</span> {t('company.english')}</p>
          <p><span className="font-medium">中文:</span> {t('company.chinese')}</p>
          <p><span className="font-medium">Short:</span> {t('company.short')}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary-blue">{t('mission.title')}</h2>
        <p className="text-gray-700 leading-relaxed">{t('mission.content')}</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-4 text-primary-green">{t('vision.title')}</h2>
        <p className="text-gray-700 leading-relaxed">{t('vision.content')}</p>
      </div>
    </div>
  );
}

