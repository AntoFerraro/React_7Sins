import CartWidget from "./CartWidget"

const NavBar = () => {
return (
    <header className="header">
        <nav className="header__nav">
            <div className="header__div">
                <h2 className="header__titulo"> 7SINS </h2>
            </div>
            <ul className="header__lista">                  
                <li > <a className="header__link" href=""> Productos </a> </li>
                <li> <a className="header__link" href=""> Contactos </a> </li>   
                <CartWidget/>             
            </ul>
        </nav>
    </header>
)
}

export default NavBar