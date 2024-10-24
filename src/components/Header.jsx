
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Aplicación</h1>
        <img 
          src="" // en este apartado ira la imagen que ellos entregaron 
          alt="Logo"
          className="h-10 w-10 rounded-full" // Tamaño y forma de la imagen
        />
        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="focus:outline-none bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
          >
            Menú
          </button>
          {isOpen && (
            <ul className="absolute bg-white text-blue-600 mt-2 rounded shadow-lg">
              <li><a href="#" className="block px-4 py-2 hover:bg-blue-100">Inicio</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-blue-100">Servicios</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-blue-100">Contacto</a></li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;  
