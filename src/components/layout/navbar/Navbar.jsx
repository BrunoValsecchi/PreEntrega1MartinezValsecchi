import CartWidget from "../../common/cartwidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navBarDiv">

    <a className="NavBarLogo" href=""><img src="https://res.cloudinary.com/dejpg4ert/image/upload/f_auto,q_auto/pngwing.com_16_dhnxxv" alt="logo" width="38" height="38" /></a>
      <ul className="NavBarUl">
        <li className="NavBarLi"><a href="" className="NavBarA">Inicio</a></li>
        <li className="NavBarLi"><a href="" className="NavBarA">Camisetas</a></li>
        <li className="NavBarLi"><a href="" className="NavBarA">Contacto</a></li>
      </ul>
    
    <CartWidget/>

    </div>
  );
};

export default Navbar;
