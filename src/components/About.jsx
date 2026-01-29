const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-white to-tropical-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80"
                alt="Zhally - Guía turística en Brasil"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tropical-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 sm:p-6 max-w-[180px] sm:max-w-[200px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-tropical-400 to-ocean-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">☀️</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">+4 años</p>
                  <p className="text-sm text-gray-500">en Búzios</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-tropical-200 rounded-full opacity-60 -z-10"></div>
            <div className="absolute top-1/2 -right-4 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16 bg-ocean-200 rounded-full opacity-60 -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-tropical-100 rounded-full">
              <span className="text-tropical-600 text-sm font-semibold">Sobre mí</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              ¡Hola! Soy Zhally 
              <span className="inline-block ml-2 animate-float">😊</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Hace más de <span className="font-semibold text-tropical-600">4 años</span> vivo en Búzios, 
                Río de Janeiro ☀️
              </p>
              <p>
                Trabajo con <span className="font-semibold text-gray-900">servicios turísticos personalizados</span>, 
                para que tu experiencia sea cómoda, segura y divertida.
              </p>
              <p className="text-xl font-medium text-gray-800 pt-2">
                💛 ¡Será un placer ayudarte a vivir un viaje inolvidable!
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { number: '500+', label: 'Viajeros felices' },
                { number: '50+', label: 'Tours realizados' },
                { number: '5⭐', label: 'Calificación' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-2xl font-bold text-tropical-600">{stat.number}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

