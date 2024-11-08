import React from 'react';

function Information() {
  return (
    <div className="rounded-3xl bg-black/40 backdrop-blur-sm p-6 border border-white/10 flex flex-col min-h-[400px] w-full min-[831px]:w-full lg:max-w-full">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Hola!</h1>
        <h2 className="text-3xl font-bold">Me llamo Esteban Rivas</h2>
      </div>
      <div className="flex-1 flex flex-col justify-end md:mt-8 mt-16">
        <p className="text-gray-400">
          Tesista de la carrera de Ingeniería Civil en Informática de la Universidad del Bío-Bío, con experiencia en programación website desktop y mobile,
          participando en Backend y Frontend.
        </p>
        <div className="flex flex-wrap gap-2 mt-8 justify-center">
          <span className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10">HTML/CSS</span>
          <span className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10">JavaScript</span>
          <span className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10">TypeScript</span>
          <span className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10">React</span>
          <span className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10">Angular</span>
          <span className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10">MySQL</span>
          <span className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10">PostgreSQL</span>
          <span className="px-3 py-1 bg-black/50 rounded-full text-sm border border-white/10">MongoDB</span>
        </div>
      </div>
    </div>
  );
}

export default Information;
