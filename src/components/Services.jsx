import { services } from '../data/tours';

const Services = () => {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ocean-100 rounded-full mb-6">
            <span className="text-ocean-600 text-sm font-semibold">Nuestros Servicios</span>
          </div>
          <h2 className="section-title">
            Todo lo que necesitás para tu
            <span className="text-gradient"> viaje perfecto</span>
          </h2>
          <p className="section-subtitle mt-4">
            Servicios personalizados para que disfrutes Brasil sin preocupaciones
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative p-8 bg-gradient-to-b from-white to-gray-50 rounded-3xl border border-gray-100 hover:border-tropical-200 hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-tropical-100 to-ocean-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-tropical-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-tropical-500/5 to-ocean-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">¿Necesitás algo especial?</p>
          <a href="#contacto" className="btn-secondary">
            Consultanos sin compromiso
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

