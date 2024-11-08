import React from 'react';

function Buttons() {
  const baseUrl = import.meta.env.VITE_PUBLIC_URL || '';

  const handleContactClick = () => {
    const mailtoLink = "mailto:stbnrivasa@gmail.com?subject=Contacto";

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = mailtoLink;
    } else {
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=stbnrivasa@gmail.com&su=Contacto', '_blank');
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 w-full min-[831px]:w-full lg:max-w-full">
      <button
        className="flex-1 rounded-full bg-white text-black font-medium py-2 px-4 hover:bg-white/90 transition-colors"
        onClick={handleContactClick}
      >
        Contacto
      </button>
      <button
        className="rounded-full bg-black/50 border border-white/10 font-medium py-2 px-4 hover:bg-black/60 transition-colors"
        onClick={() => window.open(`${baseUrl}/cv.pdf`, '_blank')}
      >
        CV
      </button>
    </div>
  );
}

export default Buttons;
