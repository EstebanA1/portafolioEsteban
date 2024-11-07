import './App.css';
import React from 'react';
import Buttons from './components/Buttons';
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
            <Buttons />
          </div>
        </div>

        {/* Versión desktop (1024px y superior) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {/* Columna izquierda */}
          <div className="space-y-7">
            <Information />
            <LocationCard />
            <Buttons />
          </div>

          {/* Columna central */}
          <div>
            <DigitalPass />
          </div>

          {/* Columna derecha */}
          <div className="space-y-8">
            <SocialCard />
            <ProjectsCard />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;