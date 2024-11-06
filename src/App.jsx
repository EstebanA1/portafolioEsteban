import './App.css';
import React from 'react';
import { DigitalPass } from './components/DigitalPass';
import { LocationCard } from './components/LocationCard';
import { ProjectsCard } from './components/ProjectsCard';
import { SocialCard } from './components/SocialCard';

function App() {
  return (
    <div className="min-h-screen p-4">
      <header className="grid grid-cols-3 gap-8 ">

        {/* Zona izquierda */}
        <div className="space-y-6">
          {/* Card de información personal */}
          <div className="rounded-3xl bg-black/40 backdrop-blur-sm p-6 border border-white/10 flex flex-col min-h-[400px] max-w-md">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Hola!</h1>
              <h2 className="text-3xl font-bold">Me llamo Esteban Rivas</h2>
            </div>

            <div className="flex-1 flex flex-col justify-end mt-16">
              <p className="text-gray-400">
                Tesista de la carrera de Ingenieria Civil en Informática de la Universidad del Bío-Bío, con experiencia en programación website desktop y mobile,
                participando en Backend y Frontend.
              </p>

              <div className="flex flex-wrap gap-2 mt-8 justify-center">
                <span className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10">React</span>
                <span className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10">Angular</span>
                <span className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10">JavaScript</span>
                <span className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10">HTML/CSS</span>
                <span className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10">MySQL</span>
                <span className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10">PostgreSQL</span>
                <span className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10">MongoDB</span>
              </div>
            </div>
          </div>

          {/* Card de ubicación */}
          <LocationCard />

          {/* Botones de contacto y CV */}
          <div className="flex gap-3 max-w-md">
            <button
              className="flex-1 rounded-full bg-white text-black font-medium py-2 px-4 hover:bg-white/90 transition-colors"
              onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=stbnrivasa@gmail.com&su=Contacto', '_blank')}
            >
              Contacto
            </button>


            <button
              className="rounded-full bg-black/50 border border-white/10 font-medium py-2 px-4 hover:bg-black/60 transition-colors"
              onClick={() => window.open('../../public/cv.pdf', '_blank')}
            >
              CV
            </button>

          </div>
        </div>

        {/* Zona de en medio | Card de imagen */}
        <div className="h-full bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl p-8">
          <DigitalPass />
        </div>

        {/* Zona derecha */}
        <div className="space-y-4">

          {/* Card de redes sociales */}
          <div className="space-y-4">
            <SocialCard />
          </div>

          {/* Card de proyectos */}
          <div className="space-y-4">
            <ProjectsCard />
          </div>
          
        </div>

      </header>
    </div>

  );
}

export default App;