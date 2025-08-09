import React, { useState } from "react";
import {
  Database,
  Palette,
  Smartphone,
  Server,
  Monitor,
  Settings,
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const [isAnimating, setIsAnimating] = useState(true);

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: Monitor,
      color: "from-cyan-500 to-blue-500",
      description:
        "Todo lo relacionado con la parte visual y la interacción de los usuarios en la web.",
      skills: [
        { name: "React", level: 95 },
        { name: "Vue.js", level: 88 },
        { name: "TypeScript", level: 92 },
        { name: "Tailwind CSS", level: 96 },
        { name: "Next.js", level: 89 },
        { name: "JavaScript ES6+", level: 94 },
      ],
    },
    {
      id: "backend",
      title: "Backend",
      icon: Server,
      color: "from-purple-500 to-red-500",
      description:
        "La lógica del servidor, las APIs, la gestión de datos y la seguridad de las aplicaciones.",
      skills: [
        { name: "Node.js", level: 91 },
        { name: "Python", level: 50 },
        { name: "Express.js", level: 93 },
        { name: "FastAPI", level: 85 },
        { name: "REST APIs", level: 94 },
        { name: "GraphQL", level: 82 },
      ],
    },
    {
      id: "database",
      title: "Bases de Datos",
      icon: Database,
      color: "from-red-500 to-yellow-500",
      description:
        "Las tecnologías que manejas para almacenar, gestionar y estructurar la información de tus proyectos.",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 82 },
        { name: "Supabase", level: 87 },
        { name: "Firebase", level: 84 },
      ],
    },
    {
      id: "mobile",
      title: "Desarrollo Móvil",
      icon: Smartphone,
      color: "from-emerald-500 to-cyan-500",
      description:
        "Las herramientas y lenguajes que utilizas para crear aplicaciones nativas o multiplataforma.",
      skills: [
        { name: "React Native", level: 89 },
        { name: "Flutter", level: 83 },
        { name: "Expo", level: 91 },
        { name: "iOS Development", level: 78 },
        { name: "Android Development", level: 80 },
        { name: "PWA", level: 86 },
      ],
    },
    {
      id: "devops",
      title: "Herramientas & DevOps",
      icon: Settings,
      color: "from-green-500/80 to-green-700",
      description:
        "Todos los programas y prácticas que te ayudan a construir, probar y desplegar tus proyectos de manera eficiente.",
      skills: [
        { name: "Docker", level: 87 },
        { name: "AWS", level: 84 },
        { name: "Git & GitHub", level: 95 },
        { name: "CI/CD", level: 82 },
        { name: "Linux", level: 88 },
        { name: "Vercel", level: 90 },
      ],
    },
    {
      id: "design",
      title: "Diseño (UI/UX)",
      icon: Palette,
      color: "from-purple-500 to-cyan-500",
      description:
        "El diseño de interfaces y la experiencia de usuario, es decir, cómo se ve y cómo se siente usar tus aplicaciones.",
      skills: [
        { name: "Figma", level: 92 },
        { name: "Adobe XD", level: 85 },
        { name: "Photoshop", level: 88 },
        { name: "Design Systems", level: 89 },
        { name: "Prototyping", level: 91 },
        { name: "User Research", level: 83 },
      ],
    },
  ];

  // Esta función ahora maneja la lógica de la animación
  const handleCategoryChange = (index) => {
    // Paso 1: Reiniciamos la animación. El ancho de las barras se volverá 0%
    setIsAnimating(false);

    // Paso 2: Actualizamos la categoría activa
    setActiveCategory(index);

    // Paso 3: Usamos setTimeout para dar tiempo a React de renderizar con el ancho en 0%
    // y luego actualizamos el estado para iniciar la animación al 100% (o al valor de la habilidad)
    setTimeout(() => {
      setIsAnimating(true);
    }, 10);
  };

  const renderCategoryContent = () => {
    const category = skillCategories[activeCategory];
    if (!category) {
      return null;
    }

    return (
      <div
        key={activeCategory} // Importante para forzar la re-renderización y la animación
        className="animate-fadeInRight"
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

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.skills.map((skill, skillIndex) => (
            <div
              key={skill.name}
              className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 p-6
              rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300
              hover:scale-105 hover:shadow-xl"
              style={{
                animationDelay: `${skillIndex * 100}ms`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">
                  {skill.name}
                </h4>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>

              Progress bar

              <div className="w-full bg-gray-600/50 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: activeCategory === index ? `${skill.level}%` : "0%",
                    transitionDelay: `${skillIndex * 150}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.skills.map((skill, skillIndex) => (
            <div
              key={skill.name}
              className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 p-6
              rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300
              hover:scale-105 hover:shadow-xl"
              style={{
                animationDelay: `${skillIndex * 100}ms`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">
                  {skill.name}
                </h4>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-600/50 rounded-full h-3 overflow-hidden">
                <div
                  // La animación se controla aquí. isAnimating es `false` al principio y `true` después de 10ms.
                  // Esto fuerza una doble renderización que permite la animación.
                  className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: isAnimating ? `${skill.level}%` : "0%",
                    transitionDelay: `${skillIndex * 150}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="py-15 bg-gray-900 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Habilidades Técnicas
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones
            completas
          </p>
        </div>

        {/* Pestañas de categorias */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(index)}
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

        {/* Contenedor del contenido */}
        <div className="relative">{renderCategoryContent()}</div>
      </div>
    </section>
  );
};

export default Skills;
