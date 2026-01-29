import { tours } from '../data/tours';
import TourCard from './TourCard';

const Tours = () => {
  return (
    <section id="tours" className="py-20 lg:py-28 bg-gradient-to-b from-tropical-50/50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-tropical-100 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ocean-100 rounded-full opacity-30 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-tropical-100 rounded-full mb-6">
            <span className="text-tropical-600 text-sm font-semibold">🏝️ Tours Destacados</span>
          </div>
          <h2 className="section-title">
            Experiencias que
            <span className="text-gradient"> no olvidarás</span>
          </h2>
          <p className="section-subtitle mt-4">
            Descubrí los mejores destinos de Brasil con tours diseñados para vos
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-16 p-6 sm:p-8 bg-gradient-to-r from-tropical-500 to-ocean-600 rounded-3xl text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-3">
              ¿Buscás algo diferente?
            </h3>
            <p className="text-white/90 mb-6">
              Armamos tours personalizados según tus intereses. Playas secretas, aventuras extremas, gastronomía local... ¡Vos elegís!
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-tropical-600 font-semibold rounded-full hover:bg-gray-50 transition-colors"
            >
              <span>Crear mi tour personalizado</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;

