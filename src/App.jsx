import './App.css';
import React from 'react';
import Contact from './components/Contact';
import Information from './components/Information';
import { DigitalPass } from './components/DigitalPass';
import { LocationCard } from './components/LocationCard';
import { ProjectsCard } from './components/ProjectsCard';
import { SocialCard } from './components/SocialCard';

function App() {
  return (
    <div className="min-h-screen p-4">
      <header className="gap-8">
        {/* Versión móvil y tablet (menos de 1024px) */}
        <div className="space-y-12 lg:hidden">
          <Information />
          <DigitalPass />
          <LocationCard />
          <div className="mb-12">
            <ProjectsCard />
          </div>
          <SocialCard />
          <div className="pb-8">
            <Contact />
          </div>
        </div>

        {/* Versión desktop (1024px y superior) */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:auto-rows-fr">
          {/* Columna izquierda */}
          <div className="flex flex-col h-full">
            <div className="flex-grow space-y-8">
              <Information />
              <LocationCard />
            </div>
            <div className="mt-8">
              <Contact />
            </div>
          </div>

          {/* Columna central */}
          <div className="flex items-start">
            <DigitalPass />
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col h-full">
            <div className="flex-grow space-y-8">
              <SocialCard />
              <ProjectsCard />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;