import { contactInfo } from '../data/tours';

const TourCard = ({ tour }) => {
  const whatsappLink = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
    `¡Hola! Me interesa el tour: ${tour.name} (BRL ${tour.price})`
  )}`;

  return (
    <article className="card group">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
          <span className="text-tropical-600 font-bold text-lg">
            {tour.currency} {tour.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
        </div>

        {/* Featured Badge */}
        {tour.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-tropical-500 to-ocean-500 rounded-full">
            <span className="text-white text-xs font-semibold">⭐ Destacado</span>
          </div>
        )}

        {/* Duration */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-medium">{tour.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-tropical-600 transition-colors">
          {tour.name}
        </h3>

        {/* Includes List */}
        <ul className="space-y-2">
          {tour.includes.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
              <svg className="w-5 h-5 text-tropical-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full btn-primary text-center mt-4"
        >
          {tour.ctaText}
        </a>
      </div>
    </article>
  );
};

export default TourCard;

