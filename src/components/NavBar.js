import {NavLink} from "react-router-dom";
import CartWidget from "./CartWidget"

const NavBar = () => {
return (
    <header className="header">
        <nav className="header__nav">
            <div className="header__div">
                <NavLink to="/" >
                    <h2 className="header__titulo"> 7SINS </h2>
                </NavLink>
            </div>
            <ul className="header__lista">                  
                <li > <NavLink to="/categoria/remeras"className="header__link" > Remeras </NavLink> </li>
                <li> <NavLink to="/categoria/vestidos" className="header__link" > Vestidos </NavLink> </li>  
                <li> <NavLink to="/item/mario" className="header__link"> Item Mario</NavLink> </li> 
                <CartWidget/>             
            </ul>
        </nav>
    </header>
)
}

export default NavBar