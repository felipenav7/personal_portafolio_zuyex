import React from "react";
import { User, Target, Award } from "lucide-react";
import aboutMeImage from "../assets/img/aboutme.jpg";

const About = () => {
  return (
    <section id="about" className="py-15 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
            <img
              src={aboutMeImage}
              alt="Sobre mi.."
              className="w-full object-cover h-auto mask-radial-at-center mask-radial-from-55% mask-radial-to-72% rounded-lg max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>

          <div className="space-y-6 ">
            <p className="text-lg text-gray-300 leading-relaxed">
              Soy un desarrollador Full Stack apasionado por crear soluciones
              tecnológicas innovadoras. Me caracterizo por mi compromiso con el
              producto final, abordando cada proyecto como si fuera propio y
              cuidando cada detalle para asegurar la máxima calidad.
              Profesionalmente, me esfuerzo por superar las expectativas,
              manteniendo altos estándares y una actitud proactiva en la
              resolución de problemas.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Mi enfoque se centra en escribir código limpio, escalable y
              eficiente, siempre manteniéndome actualizado con las últimas
              tendencias y tecnologías del mundo del desarrollo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
