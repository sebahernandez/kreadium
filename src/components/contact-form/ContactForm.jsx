import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, phone, email, message } = formData;
    if (!name || !phone || !email || !message) {
      setStatus("Todos los campos son obligatorios.");
      return false;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setStatus("Por favor, ingresa un email válido.");
      return false;
    }
    if (!/^\d{7,15}$/.test(phone)) {
      setStatus("Por favor, ingresa un número de teléfono válido.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar el formulario antes de enviarlo
    if (!validateForm()) return;

    try {
      setStatus("Enviando mensaje...");
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("¡Mensaje enviado con éxito!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setStatus(
          `Error al enviar el mensaje: ${
            errorData.error || "Inténtalo más tarde."
          }`
        );
      }
    } catch (error) {
      setStatus(
        "Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo."
      );
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <div className="contact-container">
      <div className="info-column bg-gray-100 p-6 rounded-lg shadow-lg">
        <div>
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            ¿Quiénes Somos?
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            En <strong>Kreadium</strong>, somos expertos en convertir tus ideas
            en proyectos únicos. Nos enfocamos en ofrecer soluciones
            personalizadas que destacan en diseño, creatividad e innovación.
            ¡Estamos aquí para ayudarte a alcanzar tus metas!
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            ¿Por qué elegir Kreadium?
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            En <strong>Kreadium</strong>, somos expertos en convertir tus ideas
            en proyectos únicos. Nos enfocamos en ofrecer soluciones
            personalizadas que destacan en diseño, creatividad e innovación.
            ¡Estamos aquí para ayudarte a alcanzar tus metas!
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            ¿Por qué elegir Kreadium?
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            En <strong>Kreadium</strong>, somos expertos en convertir tus ideas
            en proyectos únicos. Nos enfocamos en ofrecer soluciones
            personalizadas que destacan en diseño, creatividad e innovación.
            ¡Estamos aquí para ayudarte a alcanzar tus metas!
          </p>
        </div>
        <ul className="space-y-3 mb-6">
          <li className="flex items-center text-white">
            <svg
              className="w-6 h-6 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Soporte al cliente 24/7
          </li>
          <li className="flex items-center">
            <svg
              className="w-6 h-6 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Soluciones innovadoras y personalizadas
          </li>
          <li className="flex items-center">
            <svg
              className="w-6 h-6 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Equipo con experiencia comprobada
          </li>
          <li className="flex items-center">
            <svg
              className="w-6 h-6 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Tiempo de respuesta rápido
          </li>
        </ul>
      </div>

      <div className="form-column">
        <h2 className="text-3xl text-white sm:text-4xl md:text-6xl font-bold">
          ¡Contáctanos!
        </h2>
        <p className="py-3 text-lg text-gray-400">
          Comparte con nosotros ese proyecto que tienes en mente y lo hacemos
          realidad. ¡Estamos para ayudarte! 🚀
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Ingrese su nombre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Ingrese su número de teléfono"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Ingrese su email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Ingrese su mensaje"
            />
          </div>

          <button type="submit" className="submit-button">
            Enviar Mensaje
          </button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
