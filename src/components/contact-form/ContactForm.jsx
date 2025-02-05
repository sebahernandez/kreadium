const styles = {
  bg: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
};

const ContactForm = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16 px-8 container mx-auto">
      {/* Información de Contacto */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl text-white sm:text-4xl md:text-6xl font-bold text-left px-6">
          ¿Listo para empezar?
        </h2>
        <p className="mt-4 text-gray-400 px-6">
          Contáctanos para discutir tu proyecto y convertir tus ideas en
          realidad.
        </p>

        <div className="mt-8 space-y-6 px-6">
          {/* Teléfono */}
          <div className="flex items-start gap-4">
            <span className="text-3xl self-start">📞</span>
            <div>
              <h3 className="font-semibold text-white">Teléfono</h3>
              <p className="text-gray-400">+34 900 123 456</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-start gap-4">
            <span className="text-3xl self-start">✉️</span>
            <div>
              <h3 className="font-semibold text-white">Email</h3>
              <p className="text-gray-400">info@webagency.com</p>
            </div>
          </div>
          {/* Ubicación */}
          <div className="flex items-start gap-4">
            <span className="text-3xl self-start">📍</span>
            <div>
              <h3 className="font-semibold text-white">Ubicación</h3>
              <p className="text-gray-400">Santiago, Chile</p>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario de Contacto */}
      <form
        className="flex flex-col gap-4 p-8 rounded-lg shadow-lg"
        style={styles.bg}
      >
        <input
          type="text"
          placeholder="Nombre Completo"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <input
          type="tel"
          placeholder="Teléfono"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <textarea
          placeholder="Mensaje"
          rows="4"
          required
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
        ></textarea>
        <button
          type="submit"
          className="bg-[var(--accent)] text-black font-semibold p-3 rounded hover:bg-[var(--accent-hover)] transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
