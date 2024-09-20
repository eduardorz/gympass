import React from 'react';
import Navbar from './Navbar';  // Ajusta la ruta si es necesario
import Footer from './Footer';  // Ajusta la ruta si es necesario
import './Layout.css'; // Estilos adicionales si es necesario

const Layout = ({ children }) => {
  return (
    <div className="pageContainer">
      <Navbar />
      <div className="content">
        {children} {/* Aquí se renderiza el contenido de cada página */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
