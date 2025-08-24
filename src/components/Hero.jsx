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
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/15 to-purple-900/15"></div>

      {/* Nuevo fondo central circular con degradado */}
      {/* Se ajustó la posición del círculo de forma absoluta para bajarlo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-2xl h-80 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-20 transform scale-125"></div>
      </div>

      {/* Animacion Background */}
      <div className="absolute inset-0">
        {/* Lineas de codigo flotantes */}
        <div className="absolute top-25 left-30">
          <div className="animate-pulse text-cyan-400 font-mono pointer-events-none text-2xl">
            <div className="animate-[slideRight_8s_ease-in-out_infinite] mb-2">
              {/* {'<div className="hero">'} */}
              <span className="text-cyan-500">{"<div "}</span>
              <span className="text-yellow-500">{"className"}</span>
              <span>{"="}</span>
              <span className="text-fuchsia-500">{'"hero"'}</span>
              <span>{">"}</span>
            </div>
            <div className="animate-[slideRight_8s_ease-in-out_infinite_0.5s] mb-2 ml-4">
              {/* {'const dev = "awesome";'} */}
              <span className="text-yellow-500">{"const "}</span>
              <span>{"dev"}</span>
              <span>{" = "}</span>
              <span>{"awesome"}</span>
            </div>
            <div className="animate-[slideRight_8s_ease-in-out_infinite_1s]">
              {"</div>"}
            </div>
          </div>
        </div>

        <div className="absolute top-50 right-40">
          <div className="animate-pulse text-purple-400 font-mono pointer-events-none text-2xl">
            <div className="animate-[slideLeft_8s_ease-in-out_infinite] mb-2">
              {/* {"function create() {"} */}
              <span className="text-yellow-500">{"function "}</span>
              <span className="text-cyan-500">{"create"}</span>
              <span className="text-yellow-500">{"() "}</span>
              <span className="text-yellow-500">{"{"}</span>
            </div>
            <div className="animate-[slideLeft_8s_ease-in-out_infinite_0.5s] mb-2 ml-4">
              {/* {"return magic;"} */}
              <span className="text-cyan-500">{"return "}</span>
              <span className="text-blue-500">{"magic"}</span>
              <span className="text-shadow-zinc-800">{";"}</span>
            </div>
            <div className="animate-[slideLeft_8s_ease-in-out_infinite_1s]">
              <span className="text-yellow-500">{"}"}</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-30 right-35">
          <div className="animate-pulse text-red-400  pointer-events-none font-mono text-2xl">
            <div className="animate-[slideUp_8s_ease-in-out_infinite] mb-2">
              <span className="text-red-500 mr-3">npm</span>
              <span className="text-yellow-500 mr-3">install</span>
              <span className="text-cyan-500">creativity</span>
            </div>
            <div
              className="animate-[slideUp_8s_ease-in-out_infinite_0.2s] bg-gradient-to-r
    from-green-500 via-yellow-500 to-red-500 bg-clip-text text-transparent"
            >
              {"✓ Success!"}
            </div>
          </div>
        </div>

        {/* Animated Light Rays */}

        {/* Verticales */}
        <div
          className="absolute top-0 left-48 w-px h-full bg-gradient-to-b from-transparent
         via-cyan-500 to-transparent opacity-0 animate-[lightRayY_6s_ease-in-out_infinite]"
        ></div>
        <div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent
         via-purple-500 to-transparent opacity-0 animate-[lightRayY_8s_ease-in-out_infinite_0.5s]"
        ></div>
        <div
          className="absolute top-0 right-48 w-px h-full bg-gradient-to-b from-transparent
         via-red-500 to-transparent opacity-0 animate-[lightRayY_10s_ease-in-out_infinite_1s]"
        ></div>
        <div
          className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent
         via-green-500 to-transparent opacity-0 animate-[lightRayY_7s_ease-in-out_infinite_4s]"
        ></div>
        <div
          className="absolute top-0 right-1/2 w-px h-full bg-gradient-to-b from-transparent
         via-yellow-500 to-transparent opacity-0 animate-[lightRayY_9s_ease-in-out_infinite_3s]"
        ></div>

        {/* Horizontales */}
        <div
          className="absolute top-45 left-0 h-px w-full bg-gradient-to-r from-transparent
         via-cyan-500 to-transparent opacity-0 animate-[lightRayX_6s_ease-in-out_infinite]"
        ></div>
        <div
          className="absolute bottom-31 right-0 h-px w-full bg-gradient-to-r from-transparent
         via-purple-500 to-transparent opacity-0 animate-[lightRayX_8s_ease-in-out_infinite_0.5s]"
        ></div>
        <div
          className="absolute top-1/2 right-0 h-px w-full bg-gradient-to-r from-transparent
         via-red-500 to-transparent opacity-0 animate-[lightRayX_10s_ease-in-out_infinite_1s]"
        ></div>

        <div
          className="absolute top-5 left-0 h-px w-full bg-gradient-to-r from-transparent
         via-yellow-500 to-transparent opacity-0 animate-[lightRayX_9s_ease-in-out_infinite_2.5s]"
        ></div>

        <div
          className="absolute bottom-5 right-0 h-px w-full bg-gradient-to-r from-transparent
         via-teal-500 to-transparent opacity-0 animate-[lightRayX_9s_ease-in-out_infinite_3s]"
        ></div>

        {/* Floating Orbs */}
        {/* <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-[float_6s_ease-in-out_infinite] opacity-60"></div>
        <div className="absolute top-2/8 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-[float_8s_ease-in-out_infinite_2s] opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-red-400 rounded-full animate-[float_10s_ease-in-out_infinite_4s] opacity-70"></div>
        <div className="absolute top-4/5 left-3/10 w-4 h-4 bg-indigo-400 rounded-full animate-[float_7s_ease-in-out_infinite_1s] opacity-55"></div>
        <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-pink-400 rounded-full animate-[float_9s_ease-in-out_infinite_3s] opacity-65"></div>
        <div className="absolute top-1/2 left-1/5 w-3 h-3 bg-teal-400 rounded-full animate-[float_11s_ease-in-out_infinite_5s] opacity-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-[float_6.5s_ease-in-out_infinite_2.5s] opacity-75"></div>
        <div className="absolute top-1/5 right-1/3 w-3 h-3 bg-lime-400 rounded-full animate-[float_8.5s_ease-in-out_infinite_4.5s] opacity-50"></div>
        <div className="absolute top-4/5 right-3/10 w-4 h-4 bg-fuchsia-500 rounded-full animate-[float_7s_ease-in-out_infinite_1s] opacity-55"></div>
        <div className="absolute top-1/10 left-3/10 w-3 h-3 bg-blue-500-400 rounded-full animate-[float_8.5s_ease-in-out_infinite_4.5s] opacity-50"></div> */}
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
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
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
             text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-600/25"
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
