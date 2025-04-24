import React, { useEffect, useRef } from 'react';
import profileImage from '../assets/images/profile.webp';
import { useLanguage } from '../contexts/LanguageContext';

function Hero() {
  const { t, language } = useLanguage();
  const typedTextRef = useRef(null);
  
  useEffect(() => { // Para ver el efecto de escritura al cambiar el idioma
    const texts = ["Full Stack Developer", "Ingeniero Civil en Informática"]; // No cambian
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    // Velocidades
    const typingSpeed = 150;
    const deletingSpeed = 50;
    const waitTime = 2000;
    
    function typeEffect() {
      if (typedTextRef.current) {
        const currentText = texts[textIndex];
        
        if (!isDeleting && charIndex <= currentText.length) {
          // Escribiendo
          const displayText = currentText.substring(0, charIndex);
          typedTextRef.current.textContent = displayText;
          charIndex++;
          setTimeout(typeEffect, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
          // Borrando
          const displayText = currentText.substring(0, charIndex - 1);
          typedTextRef.current.textContent = displayText;
          charIndex--;
          setTimeout(typeEffect, deletingSpeed);
        } else if (charIndex === 0) {
          // Cambiar al siguiente texto
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(typeEffect, typingSpeed);
        } else {
          // Esperar antes de borrar
          isDeleting = true;
          setTimeout(typeEffect, waitTime);
        }
      }
    }
    
    // Iniciar el efecto
    typeEffect();
    
    return () => {
    };
  }, []); 
  
  return (
    <section id="inicio" className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-12">
          {/* Texto de presentación */}
          <div className="md:w-3/4 mt-8 md:mt-4">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
              dangerouslySetInnerHTML={{ __html: t.heroGreeting }}
            ></h1>
            <div className="h-10 my-4">
              <span ref={typedTextRef} className="text-xl sm:text-2xl font-bold text-green-400 inline-block"></span>
            </div>
            <p className="text-xl text-gray-400 mb-8">
              {t.heroSubtitle}
            </p>
            
            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#proyectos" 
                className="px-8 py-3 bg-green-500 text-black rounded-full font-bold hover:bg-green-400 hover:scale-110 transition-all duration-300"
              >
                {t.proyectos}
              </a>
              <a 
                href="#contacto" 
                className="px-8 py-3 bg-transparent border border-white/50 rounded-full font-bold hover:border-white hover:scale-110 transition-all duration-300"
              >
                {t.contacto}
              </a>
            </div>
          </div>
          
          {/* Imagen de perfil */}
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 md:-mt-4">
              {/* Efecto de fondo */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              {/* Borde y contenedor de la imagen */}
              <div className="absolute inset-2 rounded-full border-2 border-green-500/50 overflow-hidden">
                {/* Contenedor para controlar la escala y posición */}
                <div className="w-full h-full">
                  <img
                    src={profileImage}
                    alt="Esteban Rivas"
                    className="w-full h-full object-cover"
                    style={{ 
                      objectPosition: '10% 50%', 
                      transform: 'scale(1.1)',
                    }}
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;