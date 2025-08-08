import React, { useState } from "react";
import {
  Code2,
  Database,
  Palette,
  Smartphone,
  Globe,
  Zap,
  Server,
  GitBranch,
  Monitor,
  Settings,
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: Monitor,
      color: "from-cyan-500 to-blue-500",
      description:
        "Todo lo relacionado con la parte visual y la interacción de los usuarios en la web.",
      skills: [],
    },
    {
      id: "backend",
      title: "Backend",
      icon: Server,
      color: "from-purple-500 to-red-500",
      description:
        "La lógica del servidor, las APIs, la gestión de datos y la seguridad de las aplicaciones.",
      skills: [],
    },
    {
      id: "database",
      title: "Bases de Datos",
      icon: Database,
      color: "from-red-500 to-yellow-500",
      description:
        "Las tecnologías que manejas para almacenar, gestionar y estructurar la información de tus proyectos.",
      skills: [],
    },
    {
      id: "mobile",
      title: "Desarrollo Móvil",
      icon: Smartphone,
      color: "from-emerald-500 to-cyan-500",
      description:
        "Las herramientas y lenguajes que utilizas para crear aplicaciones nativas o multiplataforma.",
      skills: [],
    },
    {
      id: "devops",
      title: "Herramientas & DevOps",
      icon: Settings,
      color: "from-stone-500 to-stone-600",
      description:
        "Todos los programas y prácticas que te ayudan a construir, probar y desplegar tus proyectos de manera eficiente.",
      skills: [],
    },
    {
      id: "design",
      title: "Diseño (UI/UX)",
      icon: Palette,
      color: "from-purple-500 to-cyan-500",
      description:
        "El diseño de interfaces y la experiencia de usuario, es decir, cómo se ve y cómo se siente usar tus aplicaciones.",
      skills: [],
    },
  ];

  return (
    <section id="skills" className="py-15 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Habilidades Técnicas
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Tecnologias y herramientas que domino para crear soluciones
            completas
          </p>
        </div>

        {/* Pestañas de categorias */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`group category px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105
                ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : `bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50`
                }`}
            >
              <div className="flex items-center space-x-2">
                <category.icon className="h-5 w-5" />
                <span>{category.title}</span>
              </div>
              {activeCategory === index && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="relative min-h-[500px]">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={`absolute inset-0 transition-all duration-350 
            ${
              activeCategory === index
                ? `opacity-100 translate-x-0 delay-160`
                : `opacity-0 -translate-x-15 pointer-events-none`
            }`}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r
                  ${category.color} rounded-full mb-6`}
                >
                  <category.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
