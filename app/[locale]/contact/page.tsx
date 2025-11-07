import { getTranslations } from 'next-intl/server';

export default async function ContactPage() {
  const t = await getTranslations('contact');

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{t('title')}</h1>
      <p className="text-xl text-gray-600 mb-12">{t('subtitle')}</p>
      
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary-blue">{t('email.label')}</h3>
            <a 
              href={`mailto:${t('email.value')}`}
              className="text-primary-blue hover:text-primary-blue-dark transition-colors"
            >
              {t('email.value')}
            </a>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary-green">{t('website.label')}</h3>
            <a 
              href={`https://${t('website.value')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-green hover:text-primary-green-dark transition-colors"
            >
              {t('website.value')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

