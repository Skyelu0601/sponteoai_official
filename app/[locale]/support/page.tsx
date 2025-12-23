import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function SupportPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations('support');

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{t('title')}</h1>
      <p className="text-xl text-gray-600 mb-12">{t('subtitle')}</p>

      <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-primary-blue mb-2">
            {t('email.label')}
          </h3>
          <a
            href={`mailto:${t('email.value')}`}
            className="text-primary-blue hover:text-primary-blue-dark transition-colors text-lg"
          >
            {t('email.value')}
          </a>
        </div>

        <p className="text-gray-700 leading-relaxed">{t('response')}</p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gray-100 pt-4">
          <a
            href={`mailto:${t('email.value')}`}
            className="inline-flex items-center justify-center px-4 py-2 bg-primary-green text-white rounded-lg hover:bg-primary-green-dark transition-colors font-medium"
          >
            {t('cta')}
          </a>
          <p className="text-sm text-gray-500">{t('note')}</p>
        </div>
      </div>
    </div>
  );
}
