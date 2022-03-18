import { useContext } from "react"
import { contexto } from "../Context/CartContext"

const CartItem = ({id, nombre, precio, img, cantidad}) => {
    
   const {removeFromCart} = useContext(contexto);

    const remove = (id, precio, cantidad) => { 
        removeFromCart(id, precio, cantidad);        
    }

    return (
        <div key={id} className="div_cartItem">
           <img src={img} alt={nombre} style={{ width: "15%" }}/>
           <p className="cart_nombre">{nombre}</p>
           <p className="cart_cantidad">{cantidad}</p>
           <p className="cart_precio">${precio}</p>
           <p className="cart_subtotal">Subtotal: ${precio * cantidad}</p>
           <div>
               <button onClick={() => remove(id, precio,cantidad)}>Remover</button>
           </div>
        </div>
    )
}

export default CartItem
