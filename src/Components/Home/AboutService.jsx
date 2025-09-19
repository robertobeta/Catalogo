import React from 'react';
import '../../assets/css/aboutService.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faClock, faTags, faQuestion } from '@fortawesome/free-solid-svg-icons';

function AboutService() {
  const services = [
    {
      icon: faTruck,
      title: "Entregas Seguras",
      description: "Recibe tus prendas personalmente o a traves de envios con la certeza de que lo que compras es lo que recibes.",
    },
    {
      icon: faQuestion,
      title: "Asesoria Gratuita",
      description: "En conjunto con nuestra pagina te brindamos asesoria completa para que escogas el producto ideal que estabas buscando.",
    },
    {
      icon: faClock,
      title: "Soporte 24/7",
      description: "Comprometidos para aclarar y resolver cualquier duda o inconveniente que tengas.",
    },
    {
      icon: faTags,
      title: "Mejores Precios",
      description: "Disfruta de los mejores precios del mercado en tus marcas favoritas.",
    },
  ];

  return (
    <div className="about-service">
      <h2>Sobre Nuestro Servicio</h2>
      <div className="service-blocks">
        {services.map((service, index) => (
          <div key={index} className="service-block">
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutService;