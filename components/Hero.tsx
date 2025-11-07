'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Hero() {
  const t = useTranslations('home.hero');
  const locale = useLocale();

  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-primary-blue">Sponteo</span>
            <span className="text-primary-green">AI</span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            {t('subtitle')}
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {t('description')}
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href={getLocalizedPath('/about')}
              className="px-6 py-3 bg-primary-blue text-white rounded-lg hover:bg-primary-blue-dark transition-colors font-medium"
            >
              {locale === 'zh' ? '了解更多' : 'Learn More'}
            </Link>
            <Link
              href={getLocalizedPath('/contact')}
              className="px-6 py-3 bg-primary-green text-white rounded-lg hover:bg-primary-green-dark transition-colors font-medium"
            >
              {locale === 'zh' ? '联系我们' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

