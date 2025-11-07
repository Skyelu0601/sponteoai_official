import { getTranslations } from 'next-intl/server';

export default async function ServicesSection() {
  const t = await getTranslations('home.services');

  const services = [
    {
      key: 'custom',
      icon: '🎯',
      colorClass: 'text-primary-blue'
    },
    {
      key: 'integration',
      icon: '🔗',
      colorClass: 'text-primary-green'
    },
    {
      key: 'consulting',
      icon: '💡',
      colorClass: 'text-primary-blue'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          {t('subtitle')}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.key}
              className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className={`text-xl font-semibold mb-3 ${service.colorClass}`}>
                {t(`items.${service.key}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`items.${service.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

