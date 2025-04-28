import React, { useState, useEffect, useRef } from 'react';

import imgCal from "../assets/images/app-obras-publicas/imgCal.webp";
import imgCal2 from "../assets/images/app-obras-publicas/imgCal2.webp";
import imgCal3 from "../assets/images/app-obras-publicas/imgCal3.webp";
import imgCal4 from "../assets/images/app-obras-publicas/imgCal4.webp";
import imgCal5 from "../assets/images/app-obras-publicas/imgCal5.webp";
import imgCal6 from "../assets/images/app-obras-publicas/imgCal6.webp";

import imgRest from "../assets/images/app-restaurante/imgRest.webp";
import imgRest2 from "../assets/images/app-restaurante/imgRest2.webp";
import imgRest3 from "../assets/images/app-restaurante/imgRest3.webp";
import imgRest4 from "../assets/images/app-restaurante/imgRest4.webp";
import imgRest5 from "../assets/images/app-restaurante/imgRest5.webp";

import imgTesi from "../assets/images/app-tesis/imgTesi.webp";
import imgTesi2 from "../assets/images/app-tesis/imgTesi2.webp";
import imgTesi3 from "../assets/images/app-tesis/imgTesi3.webp";
import imgTesi4 from "../assets/images/app-tesis/imgTesi4.webp";
import imgTesi5 from "../assets/images/app-tesis/imgTesi5.webp";

import imgMiuvuu from "../assets/images/app-tienda-ropa/imgMiuvuu.webp";
import imgMiuvuu2 from "../assets/images/app-tienda-ropa/imgMiuvuu2.webp";
import imgMiuvuu3 from "../assets/images/app-tienda-ropa/imgMiuvuu3.webp";
import imgMiuvuu4 from "../assets/images/app-tienda-ropa/imgMiuvuu4.webp";
import imgMiuvuu5 from "../assets/images/app-tienda-ropa/imgMiuvuu5.webp";
import imgMiuvuu6 from "../assets/images/app-tienda-ropa/imgMiuvuu6.webp";
import imgMiuvuu7 from "../assets/images/app-tienda-ropa/imgMiuvuu7.webp";
import imgMiuvuu8 from "../assets/images/app-tienda-ropa/imgMiuvuu8.webp";
import imgMiuvuu9 from "../assets/images/app-tienda-ropa/imgMiuvuu9.webp";

import htmlIcon from '../assets/iconos/html5.svg';
import cssIcon from '../assets/iconos/css.svg';
import javascriptIcon from '../assets/iconos/javascript.svg';
import typescriptIcon from '../assets/iconos/typescript.svg';
import reactIcon from '../assets/iconos/react.svg';
import angularIcon from '../assets/iconos/angular.svg';
import mongodbIcon from '../assets/iconos/mongodb.svg';
import dockerIcon from '../assets/iconos/docker.svg';
import pythonIcon from '../assets/iconos/python.svg';
import postgresqlIcon from '../assets/iconos/postgresql.svg';
import nodeIcon from '../assets/iconos/nodejs.svg';
import expressIcon from '../assets/iconos/expressjs.svg';
import { useLanguage } from '../contexts/LanguageContext';

const icons = {
  html: htmlIcon,
  css: cssIcon,
  javascript: javascriptIcon,
  typescript: typescriptIcon,
  react: reactIcon,
  angular: angularIcon,
  mongodb: mongodbIcon,
  docker: dockerIcon,
  python: pythonIcon,
  postgresql: postgresqlIcon,
  node: nodeIcon,
  express: expressIcon,
};

const techNames = {
  html: 'HTML',
  css: 'CSS',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  docker: 'Docker',
  python: 'Python',
  angular: 'Angular',
  postgresql: 'PostgreSQL',
  mongodb: 'MongoDB',
  node: 'Node.js',
  express: 'Express',
};

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [hoveredProject, setHoveredProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  
  const { t } = useLanguage();
  
  // Función para determinar el estilo de la imagen basado en su índice y proyecto
  const getImageStyle = (projectTitle, imageIndex) => {
    if (projectTitle === "Software para Restaurantes") {
      return "object-contain p-2";
    } else if (projectTitle === "Miuvuu" && (imageIndex === 1 || imageIndex === 3)) { // Imágenes de Miuvuu en formato celular
      return "object-contain p-2";
    } else if (projectTitle === "Resumenes DE" && imageIndex === 3) { // Penúltima imagen de Tesis (formato hoja)
      return "object-contain p-2";
    } else {
      return "object-cover";
    }
  };
  
  // Función para determinar el estilo de la imagen en el modal
  const getModalImageStyle = (projectTitle, imageIndex) => {
    if (projectTitle === "Software para Restaurantes") {
      return "p-2";
    } else if (projectTitle === "Miuvuu" && (imageIndex === 1 || imageIndex === 3)) { // Imágenes de Miuvuu en formato celular
      return "p-2";
    } else if (projectTitle === "Resumenes DE" && imageIndex === 3) { // Penúltima imagen de Tesis (formato hoja)
      return "p-2";
    } else {
      return "";
    }
  };
  
  const projects = [
    {
      id: 1,
      title: "Miuvuu",
      description: "Tienda minimalista de moda",
      image: imgMiuvuu,
      imageGallery: [imgMiuvuu, imgMiuvuu2, imgMiuvuu3, imgMiuvuu4, imgMiuvuu5, imgMiuvuu6, imgMiuvuu7, imgMiuvuu8, imgMiuvuu9],
      technologies: ["html", "css", "javascript", "react", "python", "docker", "postgresql", "node", "express"],
      links: {
        github: "https://github.com/EstebanA1/miuvuu",
        linkedin: "https://www.linkedin.com/posts/esteban-rivas-albornoz-2059b3183_ecommerce-fullstack-react-activity-7305317789936828417-mhR2?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtlbGUB2NLtDLRab0fSm5RRihisfexTpnA",
        demo: "https://miuvuu-production.up.railway.app/"
      }
    },
    {
      id: 2,
      title: "Software para Restaurantes",
      description: "Aplicación diseñada para optimizar la experiencia en restaurantes",
      image: imgRest,
      imageGallery: [imgRest, imgRest2, imgRest3, imgRest4, imgRest5],
      technologies: ["html", "css", "typescript", "angular", "mongodb", "node", "express"],
      links: {
        github: "https://github.com/JoZeuZ/Proyecto_GPS_MenuQR",
        linkedin: "https://www.linkedin.com/posts/esteban-rivas-albornoz-2059b3183_desarrolloweb-mean-gestiaejndeproyectos-activity-7228534745402413056-pIlD?utm_source=share&utm_medium=member_desktop",
      }
    },
    {
      id: 3,
      title: "Sistema de gestión de citas",
      description: "Sistema para permisos de edificación, obras y regularización",
      image: imgCal,
      imageGallery: [imgCal, imgCal2, imgCal3, imgCal4, imgCal5, imgCal6],
      technologies: ["html", "css", "javascript", "react", "mongodb", "node", "express"],
      links: {
        github: "https://github.com/EstebanA1/proyectoISW",
        linkedin: "https://www.linkedin.com/posts/esteban-rivas-albornoz-2059b3183_desarrolloweb-mern-gestiaejndeproyectos-activity-7227567713936650243-jQAe?utm_source=share&utm_medium=member_desktop",
      }
    },
    {
      id: 4,
      title: "Resumenes DE",
      description: "Plataforma complementaria a DINAMICA EGO que explica los cambios en las etapas de cambio de uso de suelo.",
      image: imgTesi,
      imageGallery: [imgTesi, imgTesi2, imgTesi3, imgTesi4, imgTesi5],
      technologies: ["html", "css", "javascript", "react"],
      links: {
        github: "https://github.com/EstebanA1/tesisResumenesDE",
        demo: "https://estebana1.github.io/tesisResumenesDE/"
      }
    }
  ];

  // Inicializar índices de imagen al cargar
  useEffect(() => {
    const initialIndices = {};
    projects.forEach(project => {
      initialIndices[project.id] = 0;
    });
    setCurrentImageIndex(initialIndices);
  }, []);

  const CAROUSEL_DELAY = 2000;

  useEffect(() => {
    if (hoveredProject) {
      const projectId = hoveredProject;
      const project = projects.find(p => p.id === projectId);
      
      if (project && project.imageGallery.length > 1) {
        const intervalId = setInterval(() => {
          setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: (prev[projectId] + 1) % project.imageGallery.length
          }));
        }, CAROUSEL_DELAY);
        
        return () => clearInterval(intervalId);
      }
    }
  }, [hoveredProject, projects]);

  const handleModalImageChange = (direction) => {
    if (direction === 'next') {
      setModalImageIndex((prev) => (prev + 1) % selectedProject.imageGallery.length);
    } else {
      setModalImageIndex((prev) => (prev === 0 ? selectedProject.imageGallery.length - 1 : prev - 1));
    }
  };
  
  const nextModalImage = () => handleModalImageChange('next');
  const prevModalImage = () => handleModalImageChange('prev');
  
  const handleProjectHover = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains("fixed")) {
      handleCloseModal();
    }
  };
  
  const currentImage = (project) => {
    const index = currentImageIndex[project.id] || 0;
    return project.imageGallery[index];
  };

  // Efecto para resetear el índice de la imagen del modal cuando se selecciona un nuevo proyecto
  useEffect(() => {
    if (selectedProject) {
      setModalImageIndex(0);
    }
  }, [selectedProject]);

  return (
    <section id="proyectos" className="py-20 bg-black/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">{t.proyectosTitle}</h2>
          <p className="text-xl text-gray-400 mt-4">
            {t.proyectosSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-black/50 border border-white/10 rounded-xl overflow-hidden group hover:border-green-500/50 transition-colors duration-200 cursor-pointer hover-scale optimize-gpu"
              onClick={() => handleProjectClick(project)}
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={handleProjectLeave}
            >
              {/* Carrusel de imágenes del proyecto con transición suave */}
              <div className="h-48 overflow-hidden relative">
                <div className="project-image-container">
                  {/* Renderizar todas las imágenes con posición absoluta */}
                  {project.imageGallery.map((image, idx) => (
                    <img
                      key={`${project.id}-${idx}`}
                      src={image}
                      alt={`${project.title} - Imagen ${idx + 1}`}
                      className={`project-carousel-image ${idx === (currentImageIndex[project.id] || 0) ? 'active' : ''} ${getImageStyle(project.title, idx)}`}
                      loading="lazy"
                    />
                  ))}
                </div>
                
                {/* Indicadores del carrusel con fondo */}
                {project.imageGallery.length > 1 && (
                  <div className={`project-carousel-indicators ${hoveredProject === project.id ? 'visible' : ''}`}>
                    {project.imageGallery.map((_, index) => (
                      <div 
                        key={index} 
                        className={`project-carousel-indicator ${
                          index === (currentImageIndex[project.id] || 0) ? 'active' : ''
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(prev => ({
                            ...prev,
                            [project.id]: index
                          }));
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {/* Contenido del proyecto */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">
                  {project.id === 1 
                    ? t.miuvuuDesc 
                    : project.id === 2 
                      ? t.restauranteDesc 
                      : project.id === 3
                        ? t.citasDesc
                        : t.tesisDesc}
                </p>
                
                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-black/70 text-sm rounded-full border border-white/10 flex items-center gap-2"
                    >
                      <img
                        src={icons[tech]}
                        alt={`${techNames[tech]} icon`}
                        className="w-4 h-4"
                      />
                      {techNames[tech]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de proyecto */}
      {modalOpen && selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 p-2 sm:p-4 z-50 overflow-y-auto"
          onClick={handleModalClick}
        >
          <div className="bg-black/90 p-4 sm:p-6 rounded-xl border border-white/10 text-white shadow-lg w-full max-w-3xl relative mx-2 my-4 sm:my-8 max-h-[95vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white text-xl z-10 transition-colors duration-200"
              onClick={handleCloseModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Carrusel de imágenes en el modal con transición suave */}
            <div className="relative mb-4 sm:mb-6 rounded-lg overflow-hidden h-48 sm:h-56 md:h-64 lg:h-72">
              <div className="project-image-container">
                {/* Renderizar todas las imágenes con posición absoluta */}
                {selectedProject.imageGallery.map((image, idx) => (
                  <img
                    key={`modal-${selectedProject.id}-${idx}`}
                    src={image}
                    alt={`${selectedProject.title} - Imagen ${idx + 1}`}
                    className={`project-carousel-image ${idx === modalImageIndex ? 'active' : ''} ${
                      selectedProject.title === "Software para Restaurantes" ? "object-contain" : 
                      (selectedProject.title === "Miuvuu" && (idx === 1 || idx === 3)) ? "object-contain" :
                      selectedProject.title === "Resumenes DE" && idx === 3 ? "object-contain" : 
                      "object-cover"
                    } ${getModalImageStyle(selectedProject.title, idx)}`}
                  />
                ))}
              </div>
              
              {/* Flechas de navegación */}
              {selectedProject.imageGallery.length > 1 && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      prevModalImage();
                    }}
                    className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      nextModalImage();
                    }}
                    className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Indicadores del carrusel */}
              {selectedProject.imageGallery.length > 1 && (
                <div className="project-carousel-indicators visible">
                  {selectedProject.imageGallery.map((_, index) => (
                    <div
                      key={`modal-indicator-${index}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalImageIndex(index);
                      }}
                      className={`project-carousel-indicator ${
                        index === modalImageIndex ? 'active' : ''
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{selectedProject.title}</h3>
            <p className="text-sm sm:text-base mb-3 sm:mb-4 text-gray-300">{
              selectedProject.id === 1 
                ? t.miuvuuDesc 
                : selectedProject.id === 2 
                  ? t.restauranteDesc 
                  : selectedProject.id === 3
                    ? t.citasDesc
                    : t.tesisDesc
            }</p>
            
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              {selectedProject.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 sm:px-2.5 py-1 bg-black/70 text-xs sm:text-sm rounded-full border border-white/10 flex items-center gap-1.5"
                >
                  <img
                    src={icons[tech]}
                    alt={`${techNames[tech]} icon`}
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  />
                  {techNames[tech]}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col gap-2 justify-center mt-8">
              {selectedProject.links.demo && (
                <a
                  href={selectedProject.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-500 hover-scale flex items-center justify-center text-sm"
                >
                  {t.verSitioWeb}
                </a>
              )}
              <a
                href={selectedProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2 bg-green-500 text-black rounded-full font-bold hover:bg-green-400 hover-scale flex items-center justify-center text-sm"
              >
                {t.verGithub}
              </a>
              {selectedProject.links.linkedin && (
                <a
                  href={selectedProject.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 bg-transparent border border-white/50 rounded-full font-bold hover:border-white hover-scale flex items-center justify-center text-sm"
                >
                  {t.verLinkedin}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;