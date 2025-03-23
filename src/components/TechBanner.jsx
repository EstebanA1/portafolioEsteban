import React from 'react';
import htmlIcon from '../assets/iconos/html5.svg';
import cssIcon from '../assets/iconos/css.svg';
import javascriptIcon from '../assets/iconos/javascript.svg';
import typescriptIcon from '../assets/iconos/typescript.svg';
import reactIcon from '../assets/iconos/react.svg';
import angularIcon from '../assets/iconos/angular.svg';
import postgresqlIcon from '../assets/iconos/postgresql.svg';
import mongodbIcon from '../assets/iconos/mongodb.svg';
import dockerIcon from '../assets/iconos/docker.svg';
import pythonIcon from '../assets/iconos/python.svg';
import expressIcon from '../assets/iconos/expressjs.svg';
import nodeIcon from '../assets/iconos/nodejs.svg';

function TechBanner() {
  // Definir arrays de tecnologías
  const frontendTech = [
    { icon: htmlIcon, name: 'HTML' },
    { icon: cssIcon, name: 'CSS' },
    { icon: javascriptIcon, name: 'JavaScript' },
    { icon: expressIcon, name: 'Express.js' },
    { icon: typescriptIcon, name: 'TypeScript' },
    { icon: reactIcon, name: 'React' },
    { icon: nodeIcon, name: 'Node.js' },
  ];

  const backendTech = [
    { icon: pythonIcon, name: 'Python' },
    { icon: angularIcon, name: 'Angular' },
    { icon: postgresqlIcon, name: 'PostgreSQL' },
    { icon: mongodbIcon, name: 'MongoDB' },
    { icon: dockerIcon, name: 'Docker' }
  ];

  // Creamos una secuencia perfectamente repetible con múltiples repeticiones
  const renderTechItems = (techArray) => {
    // Crear un grupo base de elementos
    const createSet = (keyPrefix) => {
      return techArray.map((tech, index) => (
        <span key={`${keyPrefix}-${index}`} className="tech-item-banner">
          <img src={tech.icon} alt={tech.name} /> {tech.name}
        </span>
      ));
    };
    
    // Crear múltiples repeticiones para asegurar que haya suficientes elementos
    // y no queden espacios vacíos con cualquier tamaño de pantalla
    const sets = [];
    const numRepetitions = 6; // Aumentamos el número de repeticiones para cubrir todo el espacio
    
    for (let i = 0; i < numRepetitions; i++) {
      sets.push(...createSet(`tech-set-${i}`));
    }
    
    return sets;
  };

  return (
    <div className="tech-banner-container py-8 overflow-hidden">
      {/* Primera banda - Frontend */}
      <div className="tech-banner tech-banner-1">
        <div className="tech-banner-content">
          {renderTechItems(frontendTech)}
        </div>
      </div>
      
      {/* Segunda banda - Backend */}
      <div className="tech-banner tech-banner-2">
        <div className="tech-banner-content tech-reverse">
          {renderTechItems(backendTech)}
        </div>
      </div>
    </div>
  );
}

export default TechBanner; 