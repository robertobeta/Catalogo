import { Link } from 'react-router-dom';
import '../../assets/css/hero.css';

function Hero() {
    return (
        <div className="Hero">
            <div className="Hero-content">
                <h1>Estilo Refinado</h1>
                <p>Explora nuestra selecta coleccion de ropa de marca a un precio accesible</p>
                <div className="Hero-buttons">
                    <Link to="/Playeras"><button className="btn btn-primary">Comprar Ahora!</button></Link>
                    <Link to="/Footer"><button className="btn btn-secondary">Mas sobre Nosotros</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
