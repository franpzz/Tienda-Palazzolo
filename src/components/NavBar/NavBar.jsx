import "./NavBar.css"
import logo from "../../assets/images/wolfLogo.png"
import CartWidget from "../CartWidget/CartWidget"

function NavBar () {
    return (
        <nav className="menu">
            <div className="logoContainer">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="linkContainer">
                <a href="#" className="menuItem">Nosotros</a>
                <a href="#" className="menuItem">Productos</a>
                <a href="#" className="menuItem">Contacto</a>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar