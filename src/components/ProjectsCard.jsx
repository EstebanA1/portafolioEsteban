import React, { useState } from "react";
import imgCal from "../assets/images/imgCal.webp";
import imgRest from "../assets/images/imgRest.webp";
import imgTesi from "../assets/images/imgTesi.webp";

export function ProjectsCard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Software para Restaurantes",
      description: "Aplicación diseñada para optimizar la experiencia en restaurantes.",
      tags: ["Angular", "TypeScript", "HTML/CSS", "MongoDB"],
      links: {
        github: "https://github.com/JoZeuZ/Proyecto_GPS_MenuQR",
        linkedin: "https://www.linkedin.com/posts/esteban-rivas-albornoz-2059b3183_desarrolloweb-mean-gestiaejndeproyectos-activity-7228534745402413056-pIlD?utm_source=share&utm_medium=member_desktop",
      },
      image: imgRest
    },
    {
      title: "Sistema de gestión de citas",
      description: "Sistema para 'Permisos de edificación, obras y regularización'.",
      tags: ["React", "JavaScript", "HTML/CSS", "MongoDB"],
      links: {
        github: "https://github.com/EstebanA1/proyectoISW",
        linkedin: "https://www.linkedin.com/posts/esteban-rivas-albornoz-2059b3183_desarrolloweb-mern-gestiaejndeproyectos-activity-7227567713936650243-jQAe?utm_source=share&utm_medium=member_desktop",
      },
      image: imgCal
    },
    {
      title: "Resumenes DIDE",
      description: "Plataforma complementaria que explica los cambios en etapas de cambio de uso de suelo.",
      tags: ["React", "JavaScript", "HTML/CSS"],
      links: {
        github: "https://github.com/EstebanA1/tesisResumenesDE",
        linkedin: null, // Creacion pendiente
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
    <div className="rounded-3xl bg-black/40 p-6 border border-white/10 max-h-[400px] overflow-y-auto custom-scroll"> 
      <h3 className="text-2xl font-bold mb-4 text-center">Proyectos</h3>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleProjectClick(project)}
            className="flex items-center gap-4 p-4 rounded-xl bg-black/30 border border-white/5 hover:bg-black/50 transition-colors cursor-pointer"
          >
            <img src={project.image} alt={project.title} className="w-20 h-20 object-contain rounded-md" />
            <div className="flex-grow">
              <h4 className="font-medium text-lg">{project.title}</h4>
              <p className="text-sm text-gray-400 mt-1">{project.description}</p>
              <div className="flex gap-2 mt-2 flex-wrap overflow-hidden">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-black/50 rounded-full text-xs border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para mostrar opciones de enlace */}
      {modalOpen && selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70"
          onClick={handleModalClick}
        >
          <div className="bg-black/80 p-6 rounded-lg text-white shadow-lg" onClick={(e) => e.stopPropagation()}>
            <h4 className="text-lg font-bold mb-2 text-center">{selectedProject.title}</h4>
            <p className="mb-4">{selectedProject.description}</p>
            <div className="flex justify-between">
              <a
                href={selectedProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Ir a GitHub
              </a>
              {selectedProject.links.linkedin ? (
                <a
                  href={selectedProject.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Ver en LinkedIn
                </a>
              ) : (
                <button className="bg-gray-500 text-white py-2 px-4 rounded cursor-not-allowed">
                  Ver en LinkedIn (Pendiente)
                </button>
              )}
            </div>
            <button
              className="absolute top-2 right-2 text-gray-300 hover:text-white"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}