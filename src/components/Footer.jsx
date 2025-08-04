import React from "react";
import { Heart, Code2, Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-lg">
                <Code2 className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                ZuyexPortafolio
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Desarrollador Full Stack especializado en crear experiencias
              digitales excepcionales con tecnologias modernas.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {[
                "Inicio",
                "Sobre Mí",
                "Habilidades",
                "Proyectos",
                "Contacto",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Sígueme</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white
                        hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:scale-105
                        transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              ¡Conectemos y construyamos algo increible juntos!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 ZuyexPortafolio. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2 mt-4 md:mt-0">
              Hecho con <Heart className="text-red-500 animate-pulse" /> y
              <span className="text-cyan-400">React + Tailwind</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
