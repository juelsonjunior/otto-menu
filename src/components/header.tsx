import { Clock4, Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full shadow-md bg-white sticky top-0 rounded-2xl z-50">
      
      <div className="bg-gray-100 text-gray-700 text-sm flex justify-between items-center px-6 py-2 rounded-2xl">
        <ul className="flex gap-6">
          <li className="flex gap-1">
            {" "}
            <Mail size={20} strokeWidth={2} /> otto.luanda@gmail.com
          </li>
          <li className="flex gap-1">
            <Phone size={20} strokeWidth={2} /> 936 000 021
          </li>
          <li className="flex gap-1">
            <Clock4 size={20} strokeWidth={2} /> 12h - 23h
          </li>
        </ul>
        <div className="flex gap-2">
          <p>
            <Facebook size={20} strokeWidth={2} />
          </p>
          <p>
            <Instagram size={20} strokeWidth={2} />
          </p>
        </div>
      </div>

      {/* Barra de navegação */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-600">Otto Luanda</div>

        {/* Links */}
        <nav className="flex gap-8 text-gray-800 font-medium">
          <Link
            to="/"
            className="hover:text-red-600 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="hover:text-red-600 transition-colors duration-300"
          >
            Menu
          </Link>
          <Link
            to="/contact"
            className="hover:text-red-600 transition-colors duration-300"
          >
            Contactos
          </Link>
        </nav>
      </div>
    </header>
  );
};
