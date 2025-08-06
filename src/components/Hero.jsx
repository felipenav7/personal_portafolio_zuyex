import React from "react";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex items-start 
        justify-center relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900
            via-purple-900/50 to-cyan-900/60"
      ></div>

      {/* Animacion Background */}
      <div className="absolute inset-0">
        {/* Lineas de codigo flotantes */}
        <div className="absolute top-20 left-10 opacity-30">
          <div className="animate-pulse text-cyan-400 font-mono text-2xl">
            <div className="animate-[slideRight_8s_ease-in-out_infinite] mb-2">
              {'<div className="hero">'}
            </div>
            <div className="animate-[slideRight_8s_ease-in-out_infinite_1s] mb-2 ml-4">
              {'const dev = "awesome";'}
            </div>
            <div className="animate-[slideRight_8s_ease-in-out_infinite_2s]">
              {"</div>"}
            </div>
          </div>
        </div>
      </div>

      {/* Avatar */}
      <div className="relative mt-10 mb-2 z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="w-full h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-red-500 rounded-full p-1 animate-pulse">
              <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  FN
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span
            className="bg-gradient-to-r from-cyan-400 via-purple-400 to-red-400 
            bg-clip-text text-transparent"
          >
            ZuyexGamer
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
          <span className="text-cyan-400">Full Stack</span> Developer &
          <span className="text-purple-400"> UI/UX </span> Designer
        </h2>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transformando ideas en experiencias digitales excepcionales.
          Especializado en tecnologías web modernas y diseño centrado en el
          usuario.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500
             text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Descargar CV
            </span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-red-500 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </button>

          <button
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold
          rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            Ver Proyectos
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          {[
            { icon: Github, href: "#", color: "hover:text-gray-300" },
            { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
            { icon: Mail, href: "#", color: "hover:text-red-400" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`text-gray-500 ${social.color} transition-all duration-300 hover:scale-110`}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer mb-2"
        >
          <ChevronDown className="h-8 w-8 text-cyan-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
