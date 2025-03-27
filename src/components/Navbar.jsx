import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const baseUrl = import.meta.env.VITE_PUBLIC_URL || '';
  
  // Determinar qué CV descargar según el idioma
  const cvFile = language === 'en' ? 'cv-en.pdf' : 'cv.pdf';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 py-6 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo o nombre */}
        <div className="text-2xl font-bold">{t.heroTitle}</div>

        {/* Menú de navegación para escritorio */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          <a 
            href="#inicio" 
            className="hover:text-green-400 hover:scale-110 transition-all duration-300"
          >
            {t.inicio}
          </a>
          <a 
            href="#redes" 
            className="hover:text-green-400 hover:scale-110 transition-all duration-300"
          >
            {t.redes}
          </a>
          <a 
            href="#proyectos" 
            className="hover:text-green-400 hover:scale-110 transition-all duration-300"
          >
            {t.proyectos}
          </a>
          <a 
            href="#contacto" 
            className="hover:text-green-400 hover:scale-110 transition-all duration-300"
          >
            {t.contacto}
          </a>
          
          {/* Botón para cambiar el idioma */}
          <button 
            onClick={toggleLanguage}
            className="px-2 py-1 border border-white/30 rounded-md hover:bg-white/10 hover:scale-110 transition-all duration-300 flex items-center"
          >
            <span className={`mr-2 text-sm ${language === 'es' ? 'text-green-400 font-bold' : ''}`}>ES</span>
            |
            <span className={`ml-2 text-sm ${language === 'en' ? 'text-green-400 font-bold' : ''}`}>EN</span>
          </button>
          
          <a 
            href={`${baseUrl}/${cvFile}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-green-500 text-black rounded-full hover:bg-green-400 hover:scale-110 transition-all duration-300 text-center"
          >
            {t.descargarCV}
          </a>
        </div>

        {/* Botón móvil para abrir el menú */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10 py-4">
          <div className="container mx-auto flex flex-col items-center space-y-6 px-6 py-4">
            <a 
              href="#inicio" 
              className="hover:text-green-400 hover:scale-110 transition-all duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.inicio}
            </a>
            <a 
              href="#redes" 
              className="hover:text-green-400 hover:scale-110 transition-all duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.redes}
            </a>
            <a 
              href="#proyectos" 
              className="hover:text-green-400 hover:scale-110 transition-all duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.proyectos}
            </a>
            <a 
              href="#contacto" 
              className="hover:text-green-400 hover:scale-110 transition-all duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.contacto}
            </a>
            
            {/* Botón para cambiar el idioma en móvil */}
            <button 
              onClick={toggleLanguage}
              className="px-6 py-2 border border-white/30 rounded-md hover:bg-white/10 hover:scale-110 transition-all duration-300 flex items-center"
            >
              <span className={`mr-2 ${language === 'es' ? 'text-green-400 font-bold' : ''}`}>ES</span>
              |
              <span className={`ml-2 ${language === 'en' ? 'text-green-400 font-bold' : ''}`}>EN</span>
            </button>
            
            <a 
              href={`${baseUrl}/${cvFile}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-500 text-black rounded-full hover:bg-green-400 hover:scale-110 transition-all duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.descargarCV}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 