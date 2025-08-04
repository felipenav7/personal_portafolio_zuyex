import React from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "felipenavarretedev@gmail.com",
      color: "from-red-500 to-yellow-500",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+56 9 62443242",
      color: "from-emerald-500 to-cyan-500",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Chillán, Chile",
      color: "from-cyan-500 to-purple-500",
    },
  ];
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos y hágamoslo realidad!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                ¡Conectemos!
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Estoy siempre abierto a discutir nuevos proyectos, oportunidades
                y colaboraciones. Si tienes alguna pregunta, comentario o idea,
                no dudes en contactarme.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-800/50
                   rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <div
                    className={`bg-gradient-to-r ${info.color} p-3 rounded-lg`}
                  >
                    <info.icon className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 p-8 
          rounded-xl border border-gray-600/30"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="text"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                         text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2
                         focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                             text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2
                             focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Tu email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                             text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2
                             focus:ring-red-500/20 transition-all duration-300"
                  placeholder="Asunto del mensaje"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white
                placeholder-gray-400 focus:outline-none focus:border-emerald-500 focus:ring-2
                focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-cyan-500
               to-purple-500 text-white font-semibold rounded-lg overflow-hidden transition-all
               duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Enviar Mensaje
                  <Send className="w-4 h-4 ml-1.5 mt-1 group-hover:scale-110 transition-transform duration-300" />
                </span>

                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-red-500
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
