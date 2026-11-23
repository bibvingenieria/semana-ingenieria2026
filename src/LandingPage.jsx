import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-xl md:rounded-2xl shadow-2xl group bg-gray-900">
      {/* Imágenes con transición */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
className="w-full h-full object-cover"        />
      </AnimatePresence>
      
      {/* Overlay gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Botones de navegación mejorados */}
      <motion.button
        onClick={goToPrevious}
        whileHover={{ scale: 1.1, x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-green-500 text-gray-800 hover:text-white rounded-full p-2 md:p-4 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 backdrop-blur-sm"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      
      <motion.button
        onClick={goToNext}
        whileHover={{ scale: 1.1, x: 4 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-green-500 text-gray-800 hover:text-white rounded-full p-2 md:p-4 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 backdrop-blur-sm"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
      
      {/* Indicadores de posición mejorados */}
      <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20 bg-black/30 backdrop-blur-md px-3 py-2 md:px-4 md:py-3 rounded-full">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`rounded-full transition-all duration-500 ${
              index === currentIndex 
                ? 'bg-green-500 shadow-lg shadow-green-500/50 w-6 md:w-10 h-2 md:h-3' 
                : 'bg-white/60 hover:bg-white w-2 md:w-3 h-2 md:h-3'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Contador de imágenes */}
      <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold z-20">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

const weekDays = ['Inicio', 'Lunes 09', 'Martes 10', 'Miércoles 11', 'Jueves 12', 'Viernes 13','Sabado 14','Martes 17','Miercoles 18','Jueves 19'];

const sections = {
  Inicio: [],
  'Lunes 09': [
    {
      id: 1,
      title: "9:30 AM - Acto Oficial de la Semana de la Facultad de Ingeniería",
      description: "Ceremonia oficial con izamiento de pabellones por la Banda del Ejército, entonación de himnos y entrega de ofrenda floral. Participaron el Vicerrector Académico Dr. Héctor Hugo Sánchez Carlessi, Vicerrectora de Investigación Dra. Sandra Negro y Decano de Ingeniería Dr. Ing. Santiago Fidel Rojas Tuya.",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      carouselImages: ["/BANDA.jpg", "/HIMNO.jpg", "/FLORES.jpg", "/FOTOGRUPAL.jpg"],
      videoLink: "https://web.facebook.com/share/r/14yxUna1WYc/",
      youtubeLink: "https://www.youtube.com/watch?v=k6l8k4Q4tlI&list=PL8jHySzs9Ce-UEq2c_wwpv6KZRiMIaVYh"
    },
    {
      id: 2,
      title: "10:00 AM - Acto Académico de Inauguración",
      description: "Palabras de bienvenida de la Dra. Ing. Esther Joni Vargas Chang y discurso inaugural del Decano de Ingeniería, Dr. Ing. Santiago Fidel Rojas Tuya. Participación del Embajador de Malasia, quien brindó una conferencia sobre las relaciones bilaterales entre Malasia y el Perú, destacando los vínculos y oportunidades de cooperación entre ambos países. Ceremonia de reconocimiento y premiación a los estudiantes destacados de las Escuelas Profesionales de Ingeniería que ocuparon los primeros puestos en rendimiento académico durante los semestres 2025-II y 2026-I. Palabras del Rector y brindis de honor. Lugar: Auditorio Ollantaytambo.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/AUDITORIO7.jpg", "/AUDITORIO8.jpg", "/AUDITORIO9.jpg", "/PREMIO4.jpg", "/PREMIO5.jpg"]
    },
    {
      id: 3,
      title: "6:00 PM - Open Source e IOT: La Libertad Tecnológica que Impulsa la Industria",
      description: "El Mg. Ing. José Lau Morales expuso sobre el software de código abierto (Open Source) y el Internet de las Cosas (IoT), destacando su importancia para impulsar la innovación, la libertad tecnológica y la transformación de los procesos industriales. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Electrónica.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/CONFERENCIALUNES092.jpg"]
    },
    {
      id: 4,
      title: "6:00 PM - Optimización de Módulo en Joomla y Estrategias Web Asistidas por IA",
      description: "La Mg. Ing. Karin Loredo expuso sobre la optimización de módulos en Joomla y la aplicación de estrategias web asistidas por Inteligencia Artificial, destacando herramientas y técnicas para mejorar la gestión, funcionalidad y rendimiento de los entornos digitales. Lugar: Vía Zoom. Organiza: Biblioteca Virtual de Ingeniería.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/CONFERENCIALUNES09.jpg"]
    },
    {
      id: 5,
      title: "7:30 PM - El Rol de la Universidad en la Sociedad Digital",
      description: "El Dr. Ing. Santiago Fidel Rojas Tuya expuso sobre el rol de la universidad en la sociedad digital, destacando su importancia en la formación de profesionales, la transformación educativa y la promoción de la innovación tecnológica frente a los desafíos de la era digital. Lugar: Auditorio Ollantaytambo. Organiza: Facultad de Ingeniería.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/CONFELUNES093.jpg"]
  
    }
  ],
  'Martes 10': [
    {
      id: 6,
      title: "6:00 PM - Gemini Notebook Aplicado a la Investigación",
      description: "El Mg. Ing. Luis Piedra Rubio expuso sobre la aplicación de Gemini Notebook en la investigación, destacando sus herramientas y funcionalidades para organizar información, analizar fuentes y facilitar el desarrollo de trabajos académicos. Lugar: Vía Zoom. Organiza: Biblioteca Virtual de Ingeniería.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/CONFEMARTES01.jpg"]
    }
  ],
  'Miércoles 11': [
    {
      id: 7,
      title: "10:00 AM - IG Library.  Del Acceso al Conocimiento a la Competitividad Global: Preparando a nuestros estudiantes para competir con los Tigres Asiáticos.",
      description: "El Mg. Ing. Humberto Ravest Becerra presentó IG Library y su aporte al acceso al conocimiento y la preparación de estudiantes para competir en un entorno global. Lugar: Vía Zoom. Organiza: Biblioteca Virtual de Ingeniería.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/CONFEMIERCOLES02.jpg"]
    }
  ],
  'Jueves 12': [
    {
      id: 8,
      title: "6:00 PM - IA como Herramienta de Soporte en la Formulación, Redacción y Publicación Científica Indizada",
      description: "El Dr. Ing. Pedro Huamaní Navarrete expuso sobre el uso de la Inteligencia Artificial como herramienta de apoyo en la formulación, redacción y publicación de artículos científicos. Lugar: Vía Zoom. Organiza: Biblioteca Virtual de Ingeniería.",
     imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/CONFEJUEVES03.jpg"]
    }
  ],
  'Viernes 13': [
    {
      id: 9,
      title: "11:00 AM -  Ingeniería Descarbonizada y Algoritmos Verdes: Innovación Material e IA Sostenible para la Infraestructura del Futuro",
      description: "La comunidad de Ingeniería se reunió en la Gran Cena de Confraternidad, una noche especial de celebración y camaradería. El evento contó con un buffet internacional, orquesta en vivo y show artístico. Los docentes, estudiantes y autoridades compartieron en el restaurante Mandarin (Av. Javier Prado Este 1860), cerrando con broche de oro la Semana de la Facultad de Ingeniería 2025.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/CONFEVIERNES04.jpg"]

    },
    {
      id: 10,
      title: "2:00 PM - Etapa clasificatoria 2. Campeonato futsal Relámpago",
      description: "La etapa clasificatoria 2 del Campeonato de Futsal Relámpago continuó con los encuentros deportivos entre los equipos participantes, promoviendo la competencia y confraternidad universitaria. Lugar: Losa deportiva de la Facultad de Ciencias Biológicas. Organiza: Comité de Deportes de la Facultad de Ingeniería.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/FUTSAL.jpg"]
    }
  ],
  'Sabado 14': [
    {
      id: 11,
      title: "2:00 PM - Etapa Final. Campeonato futsal Relámpago",
      description: "La etapa final del Campeonato de Futsal Relámpago y el Campeonato de Futsal de Docentes reunieron a los equipos participantes en una jornada de competencia deportiva y confraternidad universitaria. Lugar: Losa deportiva de la Facultad de Ciencias Biológicas. Organiza: Comité de Deportes de la Facultad de Ingeniería.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/FUTSAL.jpg"]
    },
    {
      id: 12,
      title: "2:00 PM -  Finales y premiación de competencias deportivas",
      description: "La jornada culminó con las finales y la premiación de las competencias deportivas, reconociendo el esfuerzo y desempeño de los equipos participantes. Lugar: Losa deportiva de la Facultad de Ciencias Biológicas. Organiza: Comité de Deportes de la Facultad de Ingeniería.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/FUTSAL.jpg"]
    }
    ],



    'Martes 17': [
    {
      id: 13,
      title: "11:00 AM - III Feria ConstruCivil 2026 ",
      description: "La III Feria ConstruCivil 2026 reunió a estudiantes, docentes y profesionales del sector construcción en un espacio dedicado a la exposición de proyectos, innovaciones y soluciones relacionadas con la Ingeniería Civil. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Civil.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/FERIACIVIL1.jpg", "/FERIACIVIL2.jpg", "/FERIACIVIL3.jpg"]
    },
    {
      id: 14,
      title: "2:00 PM - Etapa clasificatoria 1. Campeonato futsal Relámpago",
      description: "La etapa clasificatoria 1 del Campeonato de Futsal Relámpago reunió a los equipos participantes en una jornada de competencia deportiva y confraternidad. Lugar: Losa deportiva de la Facultad de Ciencias Biológicas. Organiza: Comité de Deportes de la Facultad de Ingeniería.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/FUTSAL.jpg"]
    },
    {
      id: 15,
      title: "3:00 PM - Estación de caligrafía china ",
      description: "La estación de caligrafía china ofreció a los participantes una experiencia cultural y artística, permitiéndoles conocer y practicar técnicas tradicionales de escritura china, así como acercarse a sus expresiones y simbolismos. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Civil.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/ESTACIONCHINA.jpg"]
    },
    {
      id: 16,
      title: "3:30 PM - Ceremonia Central Ingeniería Civil.",
      description: "La Ceremonia Central de Ingeniería Civil incluyó la conferencia “El Qhapaq Ñan: Concepción, estudio y registro a través del tiempo”, a cargo del Lic. Alfredo Bar Esquivel, quien abordó la importancia histórica y cultural de esta red vial andina, así como su evolución y documentación a lo largo del tiempo. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Civil.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/CEREMONIACIVIL.jpg"]
    }
  ],


    'Miercoles 18': [
    {
      id: 17,
      title: "10:00 AM - Sistema de Gestión de Calidad en Ingeniería",
      description: "El Mg. Ing. Raúl Hinojosa expuso sobre la importancia de los sistemas de gestión de calidad en ingeniería y su aplicación para mejorar los procesos y resultados. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Mecatrónica.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/CONFEMIERCOLES.jpg"]
    },
    {
      id: 18,
      title: "6:00 PM - El Futuro de la Mecatrónica y la IA",
      description: "El Dr. Ing. Freedy Sotelo Valer expuso sobre las tendencias y perspectivas de la Mecatrónica y la Inteligencia Artificial, destacando su impacto en el desarrollo tecnológico. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Mecatrónica.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/CONFEMIERCOLES.jpg"]
    }
    ],


    'Jueves 19': [
    {
      id: 19,
      title: "11:00 AM - La Industria Pisquera: Retos y desafíos ",
      description: "El Lic. Fernando Barruetto Andrade expuso sobre los principales retos y desafíos de la industria pisquera, abordando su desarrollo y las oportunidades del sector. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Industrial.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/CONFEPESQUE.jpg"]
    },
    {
      id: 20,
      title: "3:00 PM - El ingeniero que toma decisiones estratégicas: cómo transformar tu carrera, impulsar tus proyectos y construir tu patrimonio ",
      description: "El Mg. Henry Borda Huamán compartió estrategias para fortalecer el desarrollo profesional del ingeniero, impulsar proyectos y tomar decisiones orientadas al crecimiento y la construcción de patrimonio. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Industrial.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/CONFEHENRY.jpg"]
    },
    {
      id: 21,
      title: "5:00 PM - Galvanizado por Inmersión en Caliente: Del diseño a la durabilidad",
      description: "El Ing. Herminio Zamora Chávez expuso sobre el proceso de galvanizado por inmersión en caliente, destacando su aplicación en el diseño y la protección de estructuras metálicas contra la corrosión. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Industrial.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/CONFEHERM.jpg"]
    },
    {
      id: 22,
      title: "7:00 PM - Importancia del Zinc en la Industria del Galvanizado en el Perú ",
      description: "La Ing. Mary Susan Monteza Grandez abordó la importancia del zinc en la industria del galvanizado en el Perú y su contribución a la protección y durabilidad de los materiales metálicos. Lugar: Auditorio Ollantaytambo. Organiza: Escuela Profesional de Ingeniería Industrial.",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      carouselImages: ["/CONFEMARY.jpg"]
    }
    ]
};

const LandingPage = () => {
  const [selectedDay, setSelectedDay] = useState('Inicio');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Principal - Banner Verde con Video */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white py-3 md:py-6 relative overflow-hidden"
      >
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/fondo_encabezado.mp4" type="video/mp4" />
        </video>
        
        {/* Capa verde transparente con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 opacity-80"></div>
        
        {/* Efectos decorativos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-teal-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-emerald-400 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 py-6 md:py-10">
          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between gap-4">
            <img src="/logo_urp.png" alt="URP Logo" className="h-20 w-auto object-contain flex-shrink-0" />
            <div className="text-center flex-1">
              <h1 className="text-2xl font-bold leading-tight">
                Semana de Ingeniería 2026
              </h1>
              <p className="text-sm mt-1 font-semibold">Del 09 al 13 de noviembre</p>
            </div>
            <img src="/logo-bvi-blanco.png" alt="BVI Logo" className="h-20 w-auto object-contain flex-shrink-0" />
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between gap-8">
            <img src="/logo_urp.png" alt="URP Logo" className="h-32 w-auto object-contain flex-shrink-0" />
            <div className="text-center flex-1">
              <h1 className="text-6xl font-bold">
                Semana de Ingeniería 2026
              </h1>
              <p className="text-2xl mt-2 font-semibold">Del 09 al 13 de noviembre</p>
            </div>
            <img src="/logo-bvi-blanco.png" alt="BVI Logo" className="h-32 w-auto object-contain flex-shrink-0" />
          </div>
        </div>
      </motion.header>

    
      
{/* Navigation Menu */}
<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-md">
  <div className="w-full px-4 sm:px-6">
    <div className="flex items-center justify-center gap-2 md:gap-3 py-3 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">      {weekDays.map((day, index) => (
        <motion.button
          key={day}
          onClick={() => setSelectedDay(day)}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          className={`relative flex-shrink-0 px-4 py-2.5 md:px-5 md:py-3 rounded-full text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 ${
            selectedDay === day
              ? 'bg-green-700 text-white shadow-md shadow-green-700/20'
              : 'bg-transparent text-gray-600 hover:bg-green-50 hover:text-green-700'
          }`}
        >
          {day}

          {selectedDay === day && (
            <motion.span
              layoutId="activeDay"
              className="absolute inset-0 rounded-full border-2 border-green-700 pointer-events-none"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
        </motion.button>
      ))}

    </div>
  </div>
</nav>


      {/* Content Area */}
      <main className="min-h-screen">
        {selectedDay === 'Inicio' ? (
          /* Página de Inicio Especial */
          <div>

            {/* Presentación y Saludo del Decano */}
            <div className="bg-white py-8 md:py-16 relative overflow-hidden">
              {/* Efectos de fondo */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 pb-3 md:pb-4 border-b-4 border-green-500 inline-block text-green-800"
                >
                  PRESENTACIÓN Y SALUDO
                </motion.h2>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start mt-6 md:mt-8">
                  {/* Imagen del Decano */}
                  <motion.div 
                    data-aos="fade-right"
                    className="flex-shrink-0 w-full md:w-auto"
                  >
                    <div className="relative">
                      <div className="w-full max-w-sm mx-auto md:max-w-none md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] aspect-square rounded-2xl overflow-hidden shadow-xl">
                        <img 
                          src="/DECANO.jpg" 
                          alt="Decano de Ingeniería"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Texto de Presentación */}
                  <motion.div 
                    data-aos="fade-left"
                    className="flex-1 w-full"
                  >
                    <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-green-200 shadow-xl">
                      <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 md:mb-6 text-gray-700">
                        El Decano de la Facultad de Ingeniería presenta en esta oportunidad 
                        una edición especial de las principales actividades realizadas por el 56° 
                        Aniversario de la Facultad de Ingeniería, en donde la Facultad de Ingeniería 
                        ha sido una de las primeras facultades que se implementaron desde su creación.
                      </p>
                      <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 text-gray-700">
                        A nombre del Consejo de Facultad de Ingeniería, brindamos un cordial 
                        saludo a toda la comunidad de la Facultad de Ingeniería, hacemos votos por el continuo 
                        crecimiento y desarrollo institucional de nuestra facultad.
                      </p>
                      <div className="pt-4 md:pt-6 mt-4 md:mt-6">
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 mb-1 md:mb-2">DR. ING. SANTIAGO FIDEL ROJAS TUYA</p>
                        <p className="text-base sm:text-lg md:text-xl font-semibold text-green-600 pb-3 md:pb-4 border-b-4 border-green-500 inline-block">DECANO DE LA FACULTAD DE INGENIERÍA</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            

            {/* Descripción de la Semana de Ingeniería */}
            <div className="bg-white py-8 md:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-12 items-center">
                  {/* Imagen del Afiche */}
                  <motion.div 
                    data-aos="fade-left"
                    className="flex-shrink-0 w-full md:w-auto"
                  >
                    <div className="relative">
                      <div className="w-full max-w-sm mx-auto md:max-w-none md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] aspect-square rounded-2xl overflow-hidden shadow-xl">
                        <img 
                          src="/afiche.jpg" 
                          alt="Afiche Semana de Ingeniería 2025"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Texto de Descripción */}
                  <motion.div 
                    data-aos="fade-right"
                    className="flex-1"
                  >
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-2xl md:rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                      <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-green-200">
                        <motion.h2 
                          initial={{ scale: 0.9, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: false }}
                          className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4 md:mb-6"
                        >
                          Semana de Ingeniería 2026
                        </motion.h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        La Semana de la Facultad de Ingeniería de la Universidad Ricardo Palma constituye uno 
                        de los acontecimientos académicos y culturales más destacados del año, reuniendo a 
                        estudiantes, docentes, especialistas y representantes de empresas vinculadas al ámbito 
                        tecnológico e industrial. A lo largo de cinco jornadas, se desarrollan conferencias, 
                        talleres especializados, desafíos técnicos, exposiciones de proyectos y espacios de 
                        integración profesional que contribuyen al fortalecimiento de las competencias de los 
                        futuros ingenieros. Asimismo, este encuentro promueve la difusión de investigaciones, el 
                        intercambio de experiencias y la generación de alianzas entre la universidad y el sector 
                        empresarial, reafirmando el compromiso de la URP con la calidad académica, la innovación y 
                        el progreso tecnológico del país.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Header for Selected Day */}
            <motion.div 
              key={selectedDay}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-12 relative overflow-hidden"
            >
              {/* Efectos decorativos */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.h2 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-5xl font-bold mb-2"
                >
                  {selectedDay}
                </motion.h2>
                <motion.p 
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-green-100"
                >
                  Eventos de la Semana de Ingeniería
                </motion.p>
              </div>
            </motion.div>

            {/* Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16">
              <AnimatePresence mode="wait">
                {sections[selectedDay].map((section, index) => (
                  <motion.section
                    key={section.id}
                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-center gap-6 md:gap-12 mb-12 md:mb-24`}
                  >
                    {/* Image - Left on even, Right on odd */}
                    <div className="flex-1 w-full">
                      {section.carouselImages ? (
                        <Carousel images={section.carouselImages} />
                      ) : (
                        <motion.div 
                          whileHover={{ scale: 1.03 }}
                          className="relative group"
                        >
                          <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl md:rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                          <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
                            <img
                              src={section.imageUrl}
                              alt={section.title}
                              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Text Content - Right on even, Left on odd */}
                    <div className="flex-1 w-full">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 sm:px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-bold mb-4 md:mb-6 shadow-lg">
                          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></span>
                          {selectedDay} • Evento {index + 1}
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
                          {section.title}
                        </h3>
                        <div className="bg-gradient-to-br from-white to-green-50 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-green-100 shadow-lg">
                          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4">
                            {section.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2">
                            {section.videoLink && (
                              <a
                                href={section.videoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-1.5 md:gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all shadow-md hover:shadow-lg hover:scale-105"
                                style={{ color: 'white' }}
                              >
                                <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                <span className="hidden sm:inline">Ver en Facebook</span>
                                <span className="sm:hidden">Facebook</span>
                              </a>
                            )}
                            {section.youtubeLink && (
                              <a
                                href={section.youtubeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-1.5 md:gap-2 bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-semibold text-xs sm:text-sm md:text-base transition-all shadow-md hover:shadow-lg hover:scale-105"
                                style={{ color: 'white' }}
                              >
                                <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                                <span className="hidden sm:inline">Ver en YouTube</span>
                                <span className="sm:hidden">YouTube</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.section>
                ))}
              </AnimatePresence>
            </div>
          </>
        )}
      </main>

    </div>
  );
};

export default LandingPage;
