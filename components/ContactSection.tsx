'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('home.contact');
  const locale = useLocale();
  const getLocalizedPath = (path: string) => `/${locale}${path}`;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {t('title')}
        </h2>
        
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="font-semibold text-gray-700 mb-2">{t('email')}</h3>
              <a
                href="mailto:skye@sponteoai.com"
                className="text-primary-blue hover:text-primary-blue-dark transition-colors"
              >
                skye@sponteoai.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-2xl mb-2">🌐</div>
              <h3 className="font-semibold text-gray-700 mb-2">{t('domain')}</h3>
              <a
                href="https://www.sponteoai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-green hover:text-primary-green-dark transition-colors"
              >
                www.sponteoai.com
              </a>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href={getLocalizedPath('/support')}
              className="inline-flex items-center px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-primary-blue-dark transition-colors font-medium"
            >
              {locale === 'zh' ? '前往支持页面' : 'Visit Support Page'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
