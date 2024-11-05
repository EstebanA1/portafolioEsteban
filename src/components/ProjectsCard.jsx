export function ProjectsCard() {
  const projects = [
    {
      title: "Sistema de gestión de citas",
      description: "Como parte de un proyecto grupal para un curso de Ingeniería de Software (2023-2), se nos pidió crear un sistema para 'Permisos de edificación, obras y regularización'.",
      tags: ["React", "JavaScript", "HTML/CSS", "MongoDB"],
      link: "https://github.com/EstebanA1/proyectoISW"
    },
    {
      title: "Software para Restaurantes",
      description: "Como parte de un proyecto grupal para un curso de Gestión de Proyectos de Software (2024-1), se nos pidió una aplicación diseñada para optimizar la experiencia en restaurantes.",
      tags: ["Angular", "TypeScript", "HTML/CSS", "MongoDB"],
      link: "https://github.com/JoZeuZ/Proyecto_GPS_MenuQR"
    },
    {
      title: "Resumenes DIDE",
      description: "Este proyecto fue desarrollado para poder subir los datos intermedios que entrega DINAMICA EGO y que con ellos, más el diccionario se generen distintos informes que ayuden a explicar de mejor manera los distintos cambios ocurridos en cada etapa.",
      tags: ["React", "JavaScript", "HTML/CSS"],
      link: "https://github.com/EstebanA1/tesisResumenesDE"
    },
  ];

  return (
    <div className="rounded-3xl bg-black/40 backdrop-blur-sm p-6 border border-white/10 max-h-[400px] overflow-y-auto">
      <h3 className="text-2xl font-bold mb-4">Proyectos</h3>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-4 rounded-xl bg-black/30 border border-white/5 hover:bg-black/50 transition-colors"
          >
            <h4 className="font-medium text-lg">{project.title}</h4>
            <p className="text-sm text-gray-400 mt-1">{project.description}</p>
            <div className="flex gap-2 mt-2">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="px-2 py-0.5 bg-black/50 rounded-full text-xs border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
