import "./NavBar.css"
import logo from "../../assets/images/wolfLogo.png"

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
            </div>
        </nav>
    );
}

export default NavBar