import { paymentMethods } from '../data/tours';

const Payment = () => {
  return (
    <section id="pagos" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sand-100 rounded-full mb-6">
            <span className="text-sand-700 text-sm font-semibold">💳 Formas de Pago</span>
          </div>
          <h2 className="section-title">
            Pagá como te resulte
            <span className="text-gradient"> más cómodo</span>
          </h2>
          <p className="section-subtitle mt-4">
            Múltiples opciones de pago para tu conveniencia
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-12">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-tropical-200 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{method.name}</h3>
              <p className="text-sm text-gray-500">{method.description}</p>
              {method.flags && (
                <div className="flex justify-center gap-1 mt-3">
                  {method.flags.map((flag, index) => (
                    <span key={index} className="text-lg">{flag}</span>
                  ))}
                </div>
              )}
              {method.apps && (
                <div className="flex flex-wrap justify-center gap-1 mt-3">
                  {method.apps.map((app, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                      {app}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-tropical-50 to-ocean-50 rounded-2xl border border-tropical-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-tropical-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-tropical-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Reservas con seña</h4>
                <p className="text-gray-600 text-sm">
                  Las reservas se confirman con el <span className="font-semibold text-tropical-600">50% de pago previo</span>. 
                  El resto se abona antes o durante el tour.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-sand-50 to-orange-50 rounded-2xl border border-sand-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-sand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-sand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Precios según temporada</h4>
                <p className="text-gray-600 text-sm">
                  Los valores publicados son de referencia y pueden variar según 
                  <span className="font-semibold text-sand-600"> temporada y disponibilidad</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;

