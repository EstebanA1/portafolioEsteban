import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Toast from './Toast';
import { useLanguage } from '../contexts/LanguageContext';

function ContactSection() {
  const { t } = useLanguage();
  // Bandera para prevenir múltiples envíos simultáneos
  const isSubmittingRef = useRef(false);

  useEffect(() => {
    // Inicializar EmailJS con tu clave pública
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'user_id';
    emailjs.init(publicKey);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  // Estado para controlar la visibilidad del toast
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    type: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    if (!email.trim()) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (isSubmittingRef.current || toast.visible) return;
    isSubmittingRef.current = true;

    if (document.activeElement) document.activeElement.blur();

    // Validar campos requeridos
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast(t.camposRequeridos, 'error');
      isSubmittingRef.current = false;
      return;
    }

    // Validar formato de email
    if (!validateEmail(formData.email)) {
      showToast(t.emailInvalido, 'error');
      isSubmittingRef.current = false;
      return;
    }

    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      // Configuración para EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Esteban',
        name: formData.name,
        title: 'Nuevo mensaje del portafolio',
        email: formData.email
      };

      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id';
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id';

      await emailjs.send(serviceID, templateID, templateParams);

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: t.mensajeExito }
      });

      // Mostrar toast de éxito
      showToast(t.mensajeExito, 'success');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: t.mensajeError }
      });

      // Mostrar toast de error
      showToast(t.mensajeError, 'error');
    } finally {
      isSubmittingRef.current = false;
    }
  };

  // Contador para keys únicas
  const toastCounterRef = useRef(0);

  const showToast = (message, type) => {
    // Generar un nuevo ID único para la key del toast
    const newId = ++toastCounterRef.current;
    
    // Si ya hay un toast visible, primero quitar el existente
    if (toast.visible) {
      setToast(prev => ({ ...prev, visible: false }));
      // Pequeño retraso antes de mostrar el nuevo toast
      setTimeout(() => {
        setToast({
          visible: true,
          message,
          type,
          id: newId
        });
      }, 100);
    } else {
      setToast({
        visible: true,
        message,
        type,
        id: newId
      });
    }
  };

  const handleToastClose = () => {
    setToast(prev => ({ ...prev, visible: false }));
    // Cuando se cierra el toast, permitir nuevos envíos
    isSubmittingRef.current = false;
  };

  // Función para determinar si el botón debe estar deshabilitado
  const isButtonDisabled = status.submitting || toast.visible;

  return (
    <section id="contacto" className="py-20 bg-black/20 ">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">{t.contactoTitle}</h2>
          <p className="text-xl text-gray-400 mt-4">
            {t.contactoSubtitle}
          </p>
        </div>

        <form className="w-full mx-auto" onSubmit={handleContactSubmit} noValidate>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {t.nombreLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {t.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t.mensajeLabel}
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                isButtonDisabled 
                  ? 'bg-green-500/50 text-black/70 cursor-not-allowed hover:bg-green-500/50' 
                  : 'bg-green-500 text-black hover:bg-green-400'
              }`}
              disabled={isButtonDisabled}
            >
              {status.submitting ? t.enviandoBtn : t.enviarBtn}
            </button>
          </div>
        </form>
      </div>
      {toast.visible && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleToastClose}
          key={`toast-${toast.id || Date.now()}`}
        />
      )}
    </section>
  );
}

export default ContactSection;