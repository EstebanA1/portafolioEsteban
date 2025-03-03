import React, { useState } from "react";
import imgCal from "../assets/images/imgCal.webp";
import imgRest from "../assets/images/imgRest.webp";
import imgTesi from "../assets/images/imgTesi.webp";
import imgMiuvuu from "../assets/images/imgMiuvuu.webp";
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
};

export function ProjectsCard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Miuvuu",
      description: "E-commerce minimalista de moda.",
      tags: ["html", "css", "javascript", "react", "python", "docker", "postgresql"],
      links: {
        github: "https://github.com/EstebanA1/miuvuu",
        linkedin: null,
      },
      image: imgMiuvuu
    },
    {
      title: "Software para Restaurantes",
      description: "Aplicación diseñada para optimizar la experiencia en restaurantes.",
      tags: ["html", "css", "typescript", "angular", "mongodb"],
      links: {
        github: "https://github.com/JoZeuZ/Proyecto_GPS_MenuQR",
        linkedin: "https://www.linkedin.com/posts/esteban-rivas-albornoz-2059b3183_desarrolloweb-mean-gestiaejndeproyectos-activity-7228534745402413056-pIlD?utm_source=share&utm_medium=member_desktop",
      },
      image: imgRest
    },
    {
      title: "Sistema de gestión de citas",
      description: "Sistema para 'Permisos de edificación, obras y regularización'.",
      tags: ["html", "css", "javascript", "react", "mongodb"],
      links: {
        github: "https://github.com/EstebanA1/proyectoISW",
        linkedin: "https://www.linkedin.com/posts/esteban-rivas-albornoz-2059b3183_desarrolloweb-mern-gestiaejndeproyectos-activity-7227567713936650243-jQAe?utm_source=share&utm_medium=member_desktop",
      },
      image: imgCal
    },
    {
      title: "Resumenes DIDE",
      description: "Plataforma complementaria que explica los cambios en etapas de cambio de uso de suelo.",
      tags: ["html", "css", "javascript", "react"],
      links: {
        github: "https://github.com/EstebanA1/tesisResumenesDE",
        linkedin: null,
      },
      image: imgTesi
    },
  ];

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

  return (
    <div className="rounded-3xl bg-black/40 p-6 border border-white/10 flex flex-col h-auto lg:h-[440px] ">
      <h3 className="text-2xl font-bold mb-4 text-center">Proyectos</h3>
      <div className="flex-1 h-full lg:overflow-y-auto custom-scroll">
        <div className="space-y-4 lg:pr-2">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project)}
              className="flex items-center gap-4 p-4 rounded-xl bg-black/30 border border-white/5 hover:bg-black/50 transition-colors cursor-pointer"
            >
              <img src={project.image} alt={project.title} className="w-20 h-20 object-contain rounded-md" />
              <div className="flex-grow min-w-0">
                <h4 className="font-medium text-lg truncate">{project.title}</h4>
                <p className="text-sm text-gray-400 mt-1 line-clamp-2">{project.description}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-black/50 rounded-full text-xs border border-white/10"
                    >
                      <img
                        src={icons[tag]}
                        alt={`${techNames[tag]} icon`}
                        className="w-4 h-4 inline-block mr-1"
                      />
                      {techNames[tag]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 p-4 z-50"
          onClick={handleModalClick}
        >
          <div className="bg-black/80 p-6 rounded-lg text-white shadow-lg w-full max-w-md relative">
            <h4 className="text-xl font-bold mb-4 text-center">{selectedProject.title}</h4>
            <p className="mb-6 text-gray-300">{selectedProject.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={selectedProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded text-center w-full sm:w-auto"
              >
                Ir a GitHub
              </a>
              {selectedProject.links.linkedin ? (
                <a
                  href={selectedProject.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded text-center w-full sm:w-auto"
                >
                  Ver en LinkedIn
                </a>
              ) : (
                <button
                  className="bg-gray-500 text-white py-2 px-6 rounded cursor-not-allowed text-center w-full sm:w-auto"
                  disabled
                >
                  Ver en LinkedIn (Pendiente)
                </button>
              )}
            </div>
            <button
              className="absolute top-3 right-3 text-gray-300 hover:text-white text-xl"
              onClick={handleCloseModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}