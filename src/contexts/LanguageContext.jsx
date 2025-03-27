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
    
    // Descriptions de proyectos
    miuvuuDesc: "Tienda minimalista de moda",
    restauranteDesc: "Aplicación diseñada para optimizar la experiencia en restaurantes",
    citasDesc: "Sistema para permisos de edificación, obras y regularización",
    tesisDesc: "Plataforma complementaria a DINAMICA EGO que explica los cambios en las etapas de cambio de uso de suelo.",
    
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
    instagramDesc: "Sígueme para conocer más sobre mí",
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
    
    // Descriptions de proyectos
    miuvuuDesc: "Minimalist fashion store",
    restauranteDesc: "Application designed to optimize the restaurant experience",
    citasDesc: "System for building permits, works and regularization",
    tesisDesc: "Complementary platform to DINAMICA EGO that explains changes in land use change stages.",
    
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
    instagramDesc: "Follow me to learn more about me",
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