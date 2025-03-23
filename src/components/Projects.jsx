import React, { useState, useEffect } from 'react';
import imgCal from "../assets/images/app-obras-publicas/imgCal.webp";
import imgRest from "../assets/images/app-restaurante/imgRest.webp";
import imgTesi from "../assets/images/app-tesis/imgTesi.webp";
import imgMiuvuu from "../assets/images/app-tienda-ropa/imgMiuvuu.webp";

import imgCal2 from "../assets/images/app-obras-publicas/imgCal2.webp";
import imgCal3 from "../assets/images/app-obras-publicas/imgCal3.webp";

import imgRest2 from "../assets/images/app-restaurante/imgRest2.webp";
import imgRest3 from "../assets/images/app-restaurante/imgRest3.webp";
import imgRest4 from "../assets/images/app-restaurante/imgRest4.webp";
import imgRest5 from "../assets/images/app-restaurante/imgRest5.webp";

import imgTesi2 from "../assets/images/app-tesis/imgTesi2.webp";
import imgTesi3 from "../assets/images/app-tesis/imgTesi3.webp";
import imgTesi4 from "../assets/images/app-tesis/imgTesi4.webp";
import imgTesi5 from "../assets/images/app-tesis/imgTesi5.webp";

import imgMiuvuu2 from "../assets/images/app-tienda-ropa/imgMiuvuu2.webp";
import imgMiuvuu3 from "../assets/images/app-tienda-ropa/imgMiuvuu3.webp";
import imgMiuvuu4 from "../assets/images/app-tienda-ropa/imgMiuvuu4.webp";

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
    } else if (projectTitle === "Miuvuu" && imageIndex === 3) { // Última imagen de Miuvuu (formato celular)
      return "object-contain p-2";
    } else if (projectTitle === "Resumenes DIDE" && imageIndex === 3) { // Penúltima imagen de Tesis (formato hoja)
      return "object-contain p-2";
    } else {
      return "object-cover";
    }
  };
  
  // Función para determinar el estilo de la imagen en el modal
  const getModalImageStyle = (projectTitle, imageIndex) => {
    if (projectTitle === "Software para Restaurantes") {
      return "p-2";
    } else if (projectTitle === "Miuvuu" && imageIndex === 3) { // Última imagen de Miuvuu (formato celular)
      return "p-2";
    } else if (projectTitle === "Resumenes DIDE" && imageIndex === 3) { // Penúltima imagen de Tesis (formato hoja)
      return "p-2";
    } else {
      return "";
    }
  };
  
  const nextModalImage = () => {
    if (!selectedProject) return;
    setModalImageIndex((prev) => (prev + 1) % selectedProject.imageGallery.length);
  };
  
  const prevModalImage = () => {
    if (!selectedProject) return;
    setModalImageIndex((prev) => (prev === 0 ? selectedProject.imageGallery.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    if (selectedProject) {
      setModalImageIndex(0);
    }
  }, [selectedProject]);

  const projects = [
    {
      id: 1,
      title: "Miuvuu",
      description: "Tienda minimalista de moda",
      image: imgMiuvuu,
      imageGallery: [imgMiuvuu, imgMiuvuu2, imgMiuvuu3, imgMiuvuu4],
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
      imageGallery: [imgCal, imgCal2, imgCal3],
      technologies: ["html", "css", "javascript", "react", "mongodb", "node", "express"],
      links: {
        github: "https://github.com/EstebanA1/proyectoISW",
        linkedin: "https://www.linkedin.com/posts/esteban-rivas-albornoz-2059b3183_desarrolloweb-mern-gestiaejndeproyectos-activity-7227567713936650243-jQAe?utm_source=share&utm_medium=member_desktop",
      }
    },
    {
      id: 4,
      title: "Resumenes DIDE",
      description: "Plataforma complementaria a DINAMICA EGO que explica los cambios en las etapas de cambio de uso de suelo.",
      image: imgTesi,
      imageGallery: [imgTesi, imgTesi2, imgTesi3, imgTesi4, imgTesi5],
      technologies: ["html", "css", "javascript", "react"],
      links: {
        github: "https://github.com/EstebanA1/tesisResumenesDE",
        linkedin: null,
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

  // Función para iniciar el carrusel de imágenes cuando el mouse está sobre un proyecto
  useEffect(() => {
    let interval;
    
    if (hoveredProject !== null) {
      interval = setInterval(() => {
        setCurrentImageIndex(prev => {
          const project = projects.find(p => p.id === hoveredProject);
          if (!project) return prev;
          
          const nextIndex = (prev[hoveredProject] + 1) % project.imageGallery.length;
          return { ...prev, [hoveredProject]: nextIndex };
        });
      }, 1500); // Cambiar imagen cada 1.5 segundos
    }
    
    return () => clearInterval(interval);
  }, [hoveredProject, projects]);

  // Manejar hover del proyecto
  const handleProjectHover = (projectId) => {
    setHoveredProject(projectId);
  };

  // Manejar cuando el mouse sale del proyecto
  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

  // Función para abrir el modal
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  // Función para detectar clics fuera del modal
  const handleModalClick = (e) => {
    if (e.target.classList.contains("fixed")) {
      handleCloseModal();
    }
  };

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
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:border-green-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => handleProjectClick(project)}
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={handleProjectLeave}
            >
              {/* Carrusel de imágenes del proyecto */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.imageGallery[currentImageIndex[project.id] || 0]} 
                  alt={project.title}
                  className={`w-full h-full ${getImageStyle(project.title, currentImageIndex[project.id] || 0)} transition-all duration-400 ease-in-out`}
                />
                
                {/* Indicadores del carrusel */}
                {hoveredProject === project.id && project.imageGallery.length > 1 && (
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                    {project.imageGallery.map((_, index) => (
                      <div 
                        key={index} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === currentImageIndex[project.id] 
                            ? 'w-4 bg-green-500' 
                            : 'w-1.5 bg-white/50'
                        }`}
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
          className="fixed inset-0 flex items-center justify-center bg-black/80 p-4 z-50"
          onClick={handleModalClick}
        >
          <div className="bg-black/90 p-8 rounded-xl border border-white/10 text-white shadow-lg w-full max-w-2xl relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl z-10"
              onClick={handleCloseModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Carrusel de imágenes en el modal */}
            <div className="relative mb-6 rounded-lg overflow-hidden h-60 md:h-72">
              <img 
                src={selectedProject.imageGallery[modalImageIndex]} 
                alt={selectedProject.title}
                className={`w-full h-full ${modalImageIndex === 3 && (selectedProject.title === "Miuvuu" || selectedProject.title === "Resumenes DIDE") ? "object-contain" : selectedProject.title === "Software para Restaurantes" ? "object-contain" : ""} transition-all duration-400 ease-in-out`}
              />
              
              {/* Flechas de navegación */}
              {selectedProject.imageGallery.length > 1 && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      prevModalImage();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      nextModalImage();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Indicadores del carrusel */}
              {selectedProject.imageGallery.length > 1 && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                  {selectedProject.imageGallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalImageIndex(index);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === modalImageIndex 
                          ? 'w-6 bg-green-500' 
                          : 'w-2 bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="mb-8 text-gray-300">{selectedProject.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.technologies.map((tech, index) => (
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {selectedProject.links.demo && (
                <a
                  href={selectedProject.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-500 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                >
                  {t.verSitioWeb}
                </a>
              )}
              <a
                href={selectedProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-green-500 text-black rounded-full font-bold hover:bg-green-400 hover:scale-110 transition-all duration-300 flex items-center justify-center"
              >
                {t.verGithub}
              </a>
              {selectedProject.links.linkedin ? (
                <a
                  href={selectedProject.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-transparent border border-white/50 rounded-full font-bold hover:border-white hover:scale-110 transition-all duration-300 flex items-center justify-center"
                >
                  {t.verLinkedin}
                </a>
              ) : (
                <button
                  className="flex-1 px-6 py-3 bg-transparent border border-gray-500 text-gray-500 rounded-full font-bold cursor-not-allowed flex items-center justify-center"
                  disabled
                >
                  {t.pendiente}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects; 