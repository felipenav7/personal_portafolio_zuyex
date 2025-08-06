import React from "react";
import { Code2 } from "lucide-react";

function Header() {
  const navItems = [
    { href: "#hero", label: "Inicio" },
    { href: "#about", label: "Sobre Mí" },
    { href: "#skills", label: "Habilidades" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <header className="relative top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20 z-50">
      <div className="flex justify-between items-center py-4 max-w-6xl m-auto px-2">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-lg">
            <Code2 className="text-white w-6 h-6" />
          </div>

          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            ZuyexGamer
          </span>
        </div>
        <nav className="flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-semibold text-lg text-gray-300 transition-colors duration-300 relative group"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 
              bg-clip-text text-transparent opacity-0 group-hover:opacity-100
              transition-all duration-300 ease-in-out flex items-center justify-center"
              >
                {item.label}
              </span>
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
