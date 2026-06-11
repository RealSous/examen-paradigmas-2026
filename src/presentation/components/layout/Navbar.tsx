import { useState } from "react";
import { Link } from "react-router-dom";
import { Joystick, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white hover:bg-blue-100 transition-colors duration-300 text-gray-800 p-4 shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-2">

        {/* logo y titulo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Joystick size={28} className="text-blue-600" />
          <span className="font-bold text-2xl tracking-wide text-gray-900">GameStore</span>
        </Link>

        {/* menu de computadora */}
        <div className="hidden md:flex items-center gap-4 font-semibold">
          <Link to="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <Link to="/catalog" className="hover:text-blue-600 transition-colors">Catalogo</Link>
        </div>

        {/* boton de menu movil */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors text-gray-600"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* menu movil (renderizado condicional) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 border-t border-gray-200 pt-4 pb-2 px-2">
          <Link to="/" className="hover:text-blue-600 font-semibold transition-colors" onClick={toggleMenu}>Inicio</Link>
          <Link to="/catalog" className="hover:text-blue-600 font-semibold transition-colors" onClick={toggleMenu}>Catalogo</Link>
        </div>
      )}
    </nav>
  );
};
