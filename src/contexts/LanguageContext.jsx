import React, { createContext, useState, useContext, useEffect } from 'react';

// Creamos el contexto
const LanguageContext = createContext();

// Textos en español e inglés
export const translations = {
  es: {
    // Navbar
    inicio: "Inicio",
    redes: "Redes",
    proyectos: "Proyectos",
    contacto: "Contacto",
    
    // Footer
    derechos: "Todos los derechos reservados",
    
    // Hero Section
    heroTitle: "Desarrollador Full Stack",
    heroGreeting: "¡Hola! Me llamo<br />Esteban Rivas",
    heroSubtitle: "Me especializo en crear soluciones tecnológicas completas y robustas. Mi experiencia abarca desarrollo web, desktop y mobile, con experiencia principalmente en el stack MERN. Soy entusiasta de nuevas tecnologías e IA, explorando constantemente herramientas innovadoras.",
    
    // Proyectos
    proyectosTitle: "Proyectos",
    proyectosSubtitle: "Aquí puedes encontrar algunos de mis proyectos más destacados",
    verSitioWeb: "Ver Sitio Web",
    verGithub: "Ver en GitHub",
    verLinkedin: "Ver en LinkedIn",
    pendiente: "Ver en LinkedIn (Pendiente)",
    
    // Títulos de proyectos
    restauranteTitle: "Software para Restaurantes",
    citasTitle: "Sistema de gestión de citas",
    tesisTitle: "Resumenes DE",
    
    // Descriptions de proyectos
    miuvuuDesc: "Tienda minimalista de moda",
    restauranteDesc: "Aplicación diseñada para optimizar la experiencia en restaurantes",
    citasDesc: "Sistema para permisos de edificación, obras y regularización",
    tesisDesc: "Plataforma complementaria a DINAMICA EGO que explica los cambios en las etapas de cambio de uso de suelo.",
    
    // Detailed descriptions de proyectos
    miuvuuDetailedDesc: "E-commerce con sistema de autenticación por formulario o con cuenta de google, carrito de compras, pasarela de pagos (Mercado Pago Sandbox), panel de administración y gestión de inventario.",
    restauranteDetailedDesc: "Sistema de gestión para restaurantes con menús digitales vía código QR, pedidos en tiempo real según disponibilidad de ingredientes, gestión de mesas, panel administrativo, botón para llamar a meseros, opciones de pago con propina y sección de reseñas.",
    citasDetailedDesc: "Aplicación web para la gestión de citas y trámites municipales. Permite a los ciudadanos solicitar permisos de construcción, programar inspecciones y realizar seguimiento de sus trámites. Incluye un panel administrativo para la gestión de solicitudes y la asignación de recursos.",
    tesisDetailedDesc: "Aplicación web complementaria al software DINAMICA EGO, el cual analiza e intenta predecir cambios en el uso de suelo. Ofrece explicaciones visuales y detalladas a través de gráficos, facilitando la comprensión de las etapas y requisitos del proceso.",
    
    // Contacto
    contactoTitle: "Contacto",
    contactoSubtitle: "¿Interesado en trabajar juntos? ¡Contáctame!",
    nombreLabel: "Nombre",
    emailLabel: "Correo Electrónico",
    mensajeLabel: "Mensaje",
    enviarBtn: "Enviar Mensaje",
    enviandoBtn: "Enviando...",
    mensajeExito: "¡Mensaje enviado correctamente!",
    mensajeError: "Error al enviar el mensaje. Inténtelo de nuevo.",
    camposRequeridos: "Por favor, complete todos los campos requeridos.",
    emailInvalido: "Por favor, ingrese un correo electrónico válido (ejemplo@dominio.com)",

    // Redes Sociales
    redesTitle: "Redes Sociales",
    redesSubtitle: "Conéctate conmigo en mis redes sociales",
    githubDesc: "Revisa mis repositorios de código y contribuciones",
    linkedinDesc: "Conecta conmigo profesionalmente",
    instagramDesc: "Sigueme para conocer un lado más personal sobre mi",
    descargarCV: "Descargar CV",
    cvTitle: "Curriculum Vitae",
    cvDesc: "¿Interesado en conocer más sobre mi experiencia profesional?",
  },
  en: {
    // Navbar
    inicio: "Home",
    redes: "Social",
    proyectos: "Projects",
    contacto: "Contact",
    
    // Footer
    derechos: "All rights reserved",
    
    // Hero Section
    heroTitle: "Full Stack Developer",
    heroGreeting: "Hello! My name is<br />Esteban Rivas",
    heroSubtitle: "I specialize in creating comprehensive and robust technological solutions. My experience covers web, desktop, and mobile development, with a primary focus on the MERN stack. I am passionate about new technologies and AI, constantly exploring innovative tools.",
    
    // Proyectos
    proyectosTitle: "Projects",
    proyectosSubtitle: "Here you can find some of my most outstanding projects",
    verSitioWeb: "View Website",
    verGithub: "View on GitHub",
    verLinkedin: "View on LinkedIn",
    pendiente: "View on LinkedIn (Pending)",
    
    // Títulos de proyectos
    restauranteTitle: "Restaurant Software",
    citasTitle: "Appointment Management System",
    tesisTitle: "Resumenes DE",
    
    // Descriptions de proyectos 
    miuvuuDesc: "Minimalist fashion store",
    restauranteDesc: "Application designed to optimize the restaurant experience",
    citasDesc: "System for building permits, works and regularization",
    tesisDesc: "Complementary platform to DINAMICA EGO that explains changes in land use change stages.",
    
    // Detailed descriptions de proyectos
    miuvuuDetailedDesc: "E-commerce with form or Google account authentication, shopping cart, payment gateway (Mercado Pago Sandbox), admin panel and inventory management.",
    restauranteDetailedDesc: "Restaurant management system with digital menus via QR code, real-time orders based on ingredient availability, table management, admin panel, waiter call button, payment options with tips and reviews section.",
    citasDetailedDesc: "Web application for managing appointments and municipal procedures. Allows citizens to request construction permits, schedule inspections and track their procedures. Includes an administrative panel for managing requests and resource allocation.",
    tesisDetailedDesc: "Web application complementary to DINAMICA EGO software, which analyzes and attempts to predict changes in land use. Provides visual and detailed explanations through graphs, facilitating understanding of the stages and requirements of the process.",
    
    // Contacto
    contactoTitle: "Contact",
    contactoSubtitle: "Interested in working together? Contact me!",
    nombreLabel: "Name",
    emailLabel: "Email",
    mensajeLabel: "Message",
    enviarBtn: "Send Message",
    enviandoBtn: "Sending...",
    mensajeExito: "Message sent successfully!",
    mensajeError: "Error sending message. Please try again.",
    camposRequeridos: "Please fill in all required fields.",
    emailInvalido: "Please enter a valid email address (example@domain.com)",

    // Redes Sociales
    redesTitle: "Social Networks",
    redesSubtitle: "Connect with me on my social networks",
    githubDesc: "View my code repositories and projects",
    linkedinDesc: "Connect with me professionally",
    instagramDesc: "Follow me to get to know a more personal side of me",
    descargarCV: "Download CV",
    cvTitle: "Curriculum Vitae",
    cvDesc: "Interested in learning more about my professional experience?",
  }
};

// Provider del contexto
export const LanguageProvider = ({ children }) => {
  // Intentar obtener el idioma guardado en localStorage, o usar 'es' como predeterminado
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'es';
  });

  // Guardar el idioma en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es');
  };

  // Obtener las traducciones para el idioma actual
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto de idioma
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
  }
  return context;
};

export default LanguageContext; 