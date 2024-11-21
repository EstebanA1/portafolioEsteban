import React from 'react';
import htmlIcon from '../assets/iconos/html5.svg';
import cssIcon from '../assets/iconos/css.svg';
import javascriptIcon from '../assets/iconos/javascript.svg';
import typescriptIcon from '../assets/iconos/typescript.svg';
import reactIcon from '../assets/iconos/react.svg';
import angularIcon from '../assets/iconos/angular.svg';
import postgresqlIcon from '../assets/iconos/postgresql.svg';
import mongodbIcon from '../assets/iconos/mongodb.svg';

const icons = {
  html: htmlIcon,
  css: cssIcon,
  javascript: javascriptIcon,
  typescript: typescriptIcon,
  react: reactIcon,
  angular: angularIcon,
  postgresql: postgresqlIcon,
  mongodb: mongodbIcon,
};

const techNames = {
  html: 'HTML',
  css: 'CSS',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  angular: 'Angular',
  postgresql: 'PostgreSQL',
  mongodb: 'MongoDB',
};

function Information() {
  return (
    <div className="rounded-3xl bg-black/40 backdrop-blur-sm p-6 border border-white/10 flex flex-col min-h-[400px] w-full min-[831px]:w-full lg:max-w-full">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Hola!</h1>
        <h2 className="text-3xl font-bold">Me llamo Esteban Rivas</h2>
      </div>
      <div className="flex-1 flex flex-col justify-end md:mt-8 mt-16">
        <p className="text-gray-400 sm:text-xl lg:text-base">
          Tesista de la carrera de Ingeniería Civil en Informática de la Universidad del Bío-Bío, con experiencia en programación website desktop y mobile,
          participando en Backend y Frontend.
        </p>
        <div className="flex flex-wrap gap-2 mt-8 justify-center">
          {Object.keys(icons).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10 flex items-center gap-2"
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
  );
}

export default Information;
