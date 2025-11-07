import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-600">
          <p className="mb-2">{t('copyright')}</p>
          <p className="text-sm">{t('company')}</p>
        </div>
      </div>
    </footer>
  );
}

