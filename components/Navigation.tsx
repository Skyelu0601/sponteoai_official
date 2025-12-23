'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'zh' ? 'en' : 'zh';
    const pathWithoutLocale = pathname.replace(`/${locale}`, '').replace(/^\//, '') || '';
    window.location.href = `/${newLocale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`;
  };

  const getLocalizedPath = (path: string) => {
    return `/${locale}${path}`;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href={getLocalizedPath('/')} className="text-2xl font-bold">
              <span className="text-primary-blue">Sponteo</span>
              <span className="text-primary-green">AI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href={getLocalizedPath('/')}
              className="text-gray-700 hover:text-primary-blue transition-colors"
            >
              {t('home')}
            </Link>
            <Link 
              href={getLocalizedPath('/about')}
              className="text-gray-700 hover:text-primary-blue transition-colors"
            >
              {t('about')}
            </Link>
            <Link 
              href={getLocalizedPath('/contact')}
              className="text-gray-700 hover:text-primary-blue transition-colors"
            >
              {t('contact')}
            </Link>
            <Link 
              href={getLocalizedPath('/support')}
              className="text-gray-700 hover:text-primary-blue transition-colors"
            >
              {t('support')}
            </Link>
            <button
              onClick={toggleLocale}
              className="px-3 py-1 rounded-md text-sm font-medium text-white bg-primary-blue hover:bg-primary-blue-dark transition-colors"
            >
              {locale === 'zh' ? 'EN' : '中文'}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleLocale}
              className="px-3 py-1 rounded-md text-sm font-medium text-white bg-primary-blue hover:bg-primary-blue-dark transition-colors"
            >
              {locale === 'zh' ? 'EN' : '中文'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
