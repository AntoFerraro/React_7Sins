import facebook from "../../img/facebook.png"
import instagram from "../../img/instagram.png"
import whatsapp from "../../img/whatsapp.png"
import logo from "../../img/logo.jpg"

const Footer = () => {

    return (
        <div className="footer__container">
            <div className="footer__descripcionUno">
                <p className="footer__descripcion"> Somos un emprendimiento creado en Boulogne, hacemos entregas a Capital, consultar por nuestras redes.</p>
            </div>
            <div className="footer__logo">
                <img className="footer__logoFoto" src={logo} alt={"logos"}/>
            </div>
            <div class="footer__redes">
                <a target="_blank" href="https://www.facebook.com/7sinsdisenos"><img className="redes__img" src={instagram} alt={"insta"}/></a>
                <a target="_blank" href="https://www.facebook.com/7sinsdisenos"><img className="redes__img" src={facebook} alt={"face"}/></a>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=541162429952&app=facebook&entry_point=page_cta&fbclid=IwAR0mQYOgClQXHPFMa04nQ7XSQltd7_LzuLUQE-KhacsDWzHuM0K7nlrgipg"><img className="redes__img" src={whatsapp} alt={"whatsapp"}/></a>
            </div>
        </div>
    )
}

export default Footer