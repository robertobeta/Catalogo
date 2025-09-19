import '../../assets/css/Navbar.css';
import logo from '../Assets/R.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { useCart } from "../../Context/CartContext";

function Navbar() {

    const [menu, setMenu] = useState("inactive");
    const location = useLocation();
    const currentLocation = location.pathname;

    const { cartItems } = useCart();

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return ( 
        <nav className='Navbar'>
            <Link to="/" className='Nav-link'>
            <div className="logo">
                <img src={logo} className='logo-img' alt="logo" />
                <p style={{fontFamily : "Poppins", fontSize : "1.5rem"}}>
                   INICIO 
                </p>
            </div>
            </Link>
            <ul className={`nav-menu ${menu === "active" ? "active" : ""}`}>
                <li><Link to="Playeras" className='Nav-link'>Playeras</Link>{currentLocation == "/Playeras" ? <hr /> : <></>}</li>
                <li><Link to="Camisas" className='Nav-link'>Camisas</Link>{currentLocation == "/Camisas" ? <hr /> : <></>}</li>
                <li><Link to="Chamarras" className='Nav-link'>Chamarras</Link>{currentLocation == "/Chamarras" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-cart">
            <div className="hamburger" onClick={() => setMenu(menu == "inactive" ? "active" : "inactive")}>
                <div></div>
                <div></div>
                <div></div>
            </div>
                {/* ... 
                <Link to="/Login"><button>Login</button></Link>
                <Link to="/Cart" className='Nav-link'><FontAwesomeIcon icon={faShoppingCart} className='cart-icon' /></Link>
                <div className="nav-cart-count">{cartCount}</div>
                */} 
            </div>
        </nav>
     );
}
<style>
    .inicio{}
</style>
export default Navbar;