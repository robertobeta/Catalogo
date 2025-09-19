import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h2>Sobre Nosotros</h2>
          <p>
            Somos una tienda de ropa de alta calidad con experiencia en la marca Ralph Lauren. Nos apasiona ofrecer lo meojor de la marca a un excelente precio,
            con nosotros vas a poder encontrar desde ropa informal hasta ropa para el invierno. La mayoria de nuestro inventario son piezas unicas asi que aprovecha y llevate lo mejor para ti!
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h2>Accesos Rapidos</h2>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/shop">Apartar</a></li>
            <li><a href="/about">Acerca de</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h2>Contactanos</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> soporteonline@outlook.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> +52 5575 0765 35
            </li>
            <li>
              <FontAwesomeIcon icon={faMapLocation} /> Ubicacion : Calle De las Vaquillas 40, Villas de la hacienda, Atiazapan de Zaragoza, Estado de Mexico.
              <br/> 
              <br/> 
              <FontAwesomeIcon icon={faMapLocation} /> Ubicacion Tianguis : El Campanario MZ 024, 52929 Atizapán de Zaragoza, Estado de México.
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social">
          <h2>Nuestras Redes Sociales</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>m
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Saldos Ralph. Derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
