export const tours = [
  {
    id: 1,
    name: "Búzios desde Río + Catamarán",
    slug: "buzios-catamaran",
    price: 265,
    currency: "BRL",
    duration: "Día completo",
    image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800&auto=format&fit=crop&q=80",
    includes: [
      "Pick up desde Río de Janeiro",
      "Paseo en catamarán (3 horas)",
      "DJ y pista de baile a bordo",
      "Paradas para nadar en playas cristalinas"
    ],
    featured: true,
    ctaText: "Reservar"
  },
  {
    id: 2,
    name: "Alquiler de Buggy – Búzios",
    slug: "buggy-buzios",
    price: 380,
    currency: "BRL",
    duration: "24 horas",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format&fit=crop&q=80",
    includes: [
      "Capacidad hasta 4 personas",
      "Requiere licencia de conducir",
      "Kilómetros libres dentro de Búzios",
      "Exploración libre de playas"
    ],
    featured: true,
    ctaText: "Consultar disponibilidad"
  },
  {
    id: 3,
    name: "Tour Angra dos Reis + Ilha Grande",
    slug: "angra-ilha-grande",
    price: 245,
    currency: "BRL",
    duration: "Día completo",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    includes: [
      "Transporte ida y vuelta",
      "Paseo en barco incluido",
      "Almuerzo típico brasileño",
      "Snorkel y playas paradisíacas"
    ],
    featured: true,
    ctaText: "Reservar"
  }
];

export const services = [
  {
    id: 1,
    icon: "🚗",
    title: "Transfers y Transporte Privado",
    description: "Traslados seguros y puntuales desde/hacia aeropuertos, hoteles y puntos turísticos."
  },
  {
    id: 2,
    icon: "🏙️",
    title: "City Tours",
    description: "Recorridos guiados por Río de Janeiro y Búzios. Conocé los lugares más emblemáticos."
  },
  {
    id: 3,
    icon: "⛵",
    title: "Paseos y Fiestas en Barco",
    description: "Experiencias únicas en el mar. Catamaranes, lanchas y fiestas exclusivas."
  },
  {
    id: 4,
    icon: "🎟️",
    title: "Fiestas y Eventos",
    description: "Listas VIP y venta de entradas para las mejores fiestas latinas de Brasil."
  }
];

export const paymentMethods = [
  {
    id: 1,
    name: "PIX",
    icon: "💚",
    description: "Transferencia instantánea Brasil",
    flag: "🇧🇷"
  },
  {
    id: 2,
    name: "Transferencias Internacionales",
    icon: "🌎",
    description: "Brasil, Argentina, Chile y más",
    flags: ["🇧🇷", "🇦🇷", "🇨🇱"]
  },
  {
    id: 3,
    name: "Apps de Pago",
    icon: "📱",
    description: "PREX, Wise, Astropay, Revolut",
    apps: ["PREX", "Wise", "Astropay", "Revolut"]
  },
  {
    id: 4,
    name: "Efectivo",
    icon: "💵",
    description: "Pago en destino (consultar)"
  },
  {
    id: 5,
    name: "Tarjeta",
    icon: "💳",
    description: "Crédito/Débito (+5% recargo)"
  }
];

export const contactInfo = {
  whatsapp: "+5521999999999",
  whatsappMessage: "¡Hola! Me interesa información sobre los tours en Brasil 🇧🇷",
  schedule: "Lunes a Domingo: 9:00 - 21:00 (hora Brasil)",
  location: "Río de Janeiro – Búzios, Brasil",
  socialLinks: {
    instagram: "#",
    facebook: "#",
    tiktok: "#"
  }
};

