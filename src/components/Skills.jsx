import React, { useState } from "react";
import clsx from "clsx";

import {
  Html5Logo,
  CssLogo,
  JavascriptLogo,
  ReactLogo,
  BootstrapLogo,
  TailwindCSSLogo,
  PythonLogo,
  DjangoLogo,
  FirebaseLogo,
  MongoDBLogo,
  AndroidLogo,
  FlutterLogo,
  JavaLogo,
  KotlinLogo,
  AWSLogo,
  GitLogo,
  GitHubLogo,
  LinuxLogo,
  VercelLogo,
  DiscordLogo,
  VisualStudioCodeLogo,
  VisualStudioLogo,
  CSharpLogo,
  UnityLogo,
  FigmaLogo,
} from "../icons";

import {
  Database,
  Palette,
  Smartphone,
  Server,
  Monitor,
  Settings,
  Puzzle,
} from "lucide-react";

import { FaTrello } from "react-icons/fa6";
import { GrMysql, GrOracle } from "react-icons/gr";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiMysql, SiPhpmyadmin, SiXampp, SiVirtualbox } from "react-icons/si";
import { BsFiletypeXml } from "react-icons/bs";

// Mapeo de color de texto -> ring correspondiente
const ringColors = {
  "text-orange-600": "hover:ring-orange-600",
  "text-blue-500": "hover:ring-blue-500",
  "text-yellow-400": "hover:ring-yellow-400",
  "text-cyan-400": "hover:ring-cyan-400",
  "text-purple-600": "hover:ring-purple-600",
  "text-cyan-500": "hover:ring-cyan-500",
  "text-green-800": "hover:ring-green-800",
  "text-blue-400": "hover:ring-blue-400",
  "text-red-500": "hover:ring-red-500",
  "text-indigo-400": "hover:ring-indigo-400",
  "text-purple-500": "hover:ring-purple-500",
  "text-blue-600": "hover:ring-blue-600",
  "text-yellow-500": "hover:ring-yellow-500",
  "text-green-500": "hover:ring-green-500",
  "text-orange-500": "hover:ring-orange-500",
  "text-orange-400": "hover:ring-orange-400",
  "text-gray-400": "hover:ring-gray-400",
  "text-white": "hover:ring-white",
  "text-purple-400": "hover:ring-purple-400",
};

const shadowColors = {
  "text-orange-600": "hover:shadow-orange-600/50",
  "text-blue-500": "hover:shadow-blue-500/50",
  "text-yellow-400": "hover:shadow-yellow-400/50",
  "text-cyan-400": "hover:shadow-cyan-400/50",
  "text-purple-600": "hover:shadow-purple-600/50",
  "text-cyan-500": "hover:shadow-cyan-500/50",
  "text-green-800": "hover:shadow-green-800/50",
  "text-blue-400": "hover:shadow-blue-400/50",
  "text-red-500": "hover:shadow-red-500/50",
  "text-indigo-400": "hover:shadow-indigo-400/50",
  "text-purple-500": "hover:shadow-purple-500/50",
  "text-blue-600": "hover:shadow-blue-600/50",
  "text-yellow-500": "hover:shadow-yellow-500/50",
  "text-green-500": "hover:shadow-green-500/50",
  "text-orange-500": "hover:shadow-orange-500/50",
  "text-orange-400": "hover:shadow-orange-400/50",
  "text-gray-400": "hover:shadow-gray-400/50",
  "text-white": "hover:shadow-white/50",
  "text-purple-400": "hover:shadow-purple-400/50",
};

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
        { name: "HTML5", icon: Html5Logo, color: "text-orange-600" },
        { name: "CSS", icon: CssLogo, color: "text-blue-500" },
        { name: "JavaScript", icon: JavascriptLogo, color: "text-yellow-400" },
        { name: "React", icon: ReactLogo, color: "text-cyan-400" },
        { name: "Bootstrap", icon: BootstrapLogo, color: "text-purple-600" },
        { name: "Tailwind CSS", icon: TailwindCSSLogo, color: "text-cyan-500" },
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
        { name: "Python", icon: PythonLogo, color: "text-yellow-400" },
        { name: "Django", icon: DjangoLogo, color: "text-green-800" },
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
        { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
        { name: "Oracle Database", icon: GrOracle, color: "text-red-500" },
        { name: "SQL", icon: AiOutlineConsoleSql, color: "text-indigo-400" },
        { name: "PhpMyAdmin", icon: SiPhpmyadmin, color: "text-purple-500" },
        { name: "MySQL Workbench", icon: GrMysql, color: "text-blue-600" },
        { name: "Firebase", icon: FirebaseLogo, color: "text-orange-600" },
        { name: "MongoDB", icon: MongoDBLogo, color: "text-green-500" },
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
        { name: "Android Studio", icon: AndroidLogo, color: "text-green-500" },
        { name: "Flutter", icon: FlutterLogo, color: "text-cyan-500" },
        { name: "Java", icon: JavaLogo, color: "text-orange-500" },
        { name: "Kotlin", icon: KotlinLogo, color: "text-purple-600" },
        { name: "XML", icon: BsFiletypeXml, color: "text-orange-400" },
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
        { name: "XAMPP", icon: SiXampp, color: "text-orange-400" },
        { name: "AWS", icon: AWSLogo, color: "text-orange-400" },
        { name: "Git", icon: GitLogo, color: "text-orange-600" },
        { name: "GitHub", icon: GitHubLogo, color: "text-gray-400" },
        { name: "VirtualBox", icon: SiVirtualbox, color: "text-blue-500" },
        { name: "Linux", icon: LinuxLogo, color: "text-yellow-400" },
        { name: "Vercel", icon: VercelLogo, color: "text-white" },
        { name: "Trello", icon: FaTrello, color: "text-blue-600" },
        { name: "Discord", icon: DiscordLogo, color: "text-indigo-400" },
        {
          name: "Visual Studio Code",
          icon: VisualStudioCodeLogo,
          color: "text-blue-400",
        },
        {
          name: "Visual Studio 2022",
          icon: VisualStudioLogo,
          color: "text-purple-600",
        },
      ],
    },
    {
      id: "software-dev",
      title: "Desarrollo de Software",
      icon: Puzzle,
      color: "from-indigo-500 to-fuchsia-500",
      description:
        "Experiencia en el desarrollo de aplicaciones de escritorio y videojuegos con estas herramientas y lenguajes.",
      skills: [
        { name: "C#", icon: CSharpLogo, color: "text-purple-500" },
        { name: "Unity", icon: UnityLogo, color: "text-white" },
        {
          name: "Visual Studio 2022",
          icon: VisualStudioLogo,
          color: "text-purple-600",
        },
      ],
    },
    {
      id: "design",
      title: "Diseño (UI/UX)",
      icon: Palette,
      color: "from-purple-500 to-cyan-500",
      description:
        "El diseño de interfaces y la experiencia de usuario, es decir, cómo se ve y cómo se siente usar tus aplicaciones.",
      skills: [{ name: "Figma", icon: FigmaLogo, color: "text-purple-400" }],
    },
  ];

  const handleCategoryChange = (index) => {
    setIsAnimating(false);
    setActiveCategory(index);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const renderCategoryContent = () => {
    const category = skillCategories[activeCategory];
    if (!category) return null;

    return (
      <div key={activeCategory} className="animate-fadeInRight">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.color} rounded-full mb-6`}
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

        <div className="flex flex-wrap justify-center gap-8">
          {category.skills.map((skill, skillIndex) => (
            <div
              key={skill.name}
              className={clsx(
                `group relative flex flex-shrink-0 flex-col items-center justify-center w-40 h-40 
                 bg-gradient-to-br from-gray-800/80 to-gray-700/80 p-6 rounded-xl border border-gray-600/30
                 transition-all duration-300 hover:scale-110 hover:ring-2 hover:shadow-lg`,
                ringColors[skill.color] || "hover:ring-purple-500",
                shadowColors[skill.color] || "hover:shadow-purple-500"
              )}
              style={{
                animationDelay: `${skillIndex * 150}ms`,
              }}
            >
              <div className="flex justify-center items-center transition-all duration-500 ease-in-out group-hover:-translate-y-4">
                {skill.icon && (
                  <skill.icon
                    className={`h-18 w-18 ${skill.color || "text-white"}`}
                  />
                )}
              </div>
              <div className="absolute bottom-4 left-0 right-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                <h4 className="text-base font-semibold text-white text-center mt-4">
                  {skill.name}
                </h4>
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
      className="py-15 bg-gray-900 flex items-center justify-center"
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
            </button>
          ))}
        </div>

        <div className="relative">{renderCategoryContent()}</div>
      </div>
    </section>
  );
};

export default Skills;
