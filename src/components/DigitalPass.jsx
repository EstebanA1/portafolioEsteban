import React from 'react'
import profileImage from '../assets/images/profile.webp'

export function DigitalPass() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl p-8">
      <div className="relative w-72 h-96 bg-card rounded-xl overflow-hidden shadow-lg">
        {/* Efecto holográfico */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />

        {/* Contenido de la tarjeta */}
        <div className="relative p-6 flex flex-col h-full">
          {/* Logo o nombre */}
          <div className="text-2xl font-bold mb-8"></div>

          {/* Foto y detalles */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold">Esteban Rivas</h3>
              <p className="text-gray-400 text-sm">Full Stack Developer</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}