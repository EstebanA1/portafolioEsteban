import React, { useEffect, useRef } from 'react';

// Componente Toast
const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  const toastRef = useRef(null);
  const timeoutRef = useRef(null);

  // Función para manejar la animación de salida
  const closeToast = () => {
    if (toastRef.current) {
      toastRef.current.style.animation = 'toast-out 0.3s ease forwards';
      
      // Esperar a que termine la animación antes de ejecutar onClose
      setTimeout(() => {
        if (onClose) onClose();
      }, 300);
    }
  };

  useEffect(() => {
    // Al montar, configurar la animación de entrada
    if (toastRef.current) {
      toastRef.current.style.animation = 'toast-in-right 0.3s ease forwards';
      
      // Configurar el timeout para cerrar automáticamente
      timeoutRef.current = setTimeout(() => {
        closeToast();
      }, duration);
    }
    
    // Limpiar timeout al desmontar
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [duration]);

  const renderIcon = () => {
    if (type === 'success') {
      return (
        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      );
    } else if (type === 'error') {
      return (
        <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="toast-container">
      <div
        ref={toastRef}
        className={`toast toast-${type}`}
        style={{ animation: 'none' }}
      >
        {renderIcon()}
        <div className="toast-message">{message}</div>
      </div>
    </div>
  );
};

export default Toast;