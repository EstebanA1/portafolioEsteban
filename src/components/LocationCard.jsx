import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const mapStyles = `
  .leaflet-control-attribution {
    display: none;
  }
`;

export const LocationCard = () => {
  const [currentTime, setCurrentTime] = useState('');
  const position = [-36.8271, -73.0498];

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('es-CL', {
        timeZone: 'America/Santiago',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-3xl bg-black/40 backdrop-blur-sm p-4 border border-white/10 w-full">
      <style>{mapStyles}</style>
      <div className="relative w-full h-32 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900">
          <MapContainer
            center={position}
            zoom={9}
            zoomControl={false}
            dragging={false}
            touchZoom={false}
            doubleClickZoom={false}
            scrollWheelZoom={false}
            attributionControl={false}
            style={{ height: '100%', width: '100%', filter: 'brightness(0.7)' }}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
              attribution=""
            />
          </MapContainer>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

        {/* Información de ubicación */}
        <div className="absolute bottom-3 left-3 text-white z-[1000]">
          <div className="font-medium flex items-center gap-2">
            <MapPin size={16} className="text-white" />
            Concepción, CL
          </div>
          <div className="text-sm text-gray-300">
            {currentTime} (GMT-4)
          </div>
        </div>

        {/* Punto de ubicación animado */}
        <div className="absolute right-3 bottom-3 z-[1000]">
          <div className="w-2 h-2 bg-white rounded-full relative">
            <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;