import { useContext } from "react";
import { contexto } from "../Context/CartContext";
import { useNavigate } from "react-router";

const CartWidget = () => {
    
    const {cart} = useContext(contexto);
    const navigate = useNavigate();
    
    const goToCart = () => {
        navigate(`/cart`)
    }
    
    return (
        <div className="div_widget"> 
            <span className="material-icons" id="icons" onClick={() => goToCart()}> shopping_cart</span>
            <p className="cart_lenght">{cart.length} </p> 
                       
        </div>
    )
}

export default CartWidget