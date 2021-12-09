import { useContext } from "react"
import { contexto } from "../Context/CartContext"

const CartItem = ({id, nombre, precio, img, cantidad}) => {
    
   const {removeFromCart} = useContext(contexto);

    const remove = (id, precio, cantidad) => { 
        removeFromCart(id, precio, cantidad);        
    }

    return (
        <div key={id} className="div_cartItem">
           <img src={img} alt={nombre} style={{ width: "10%" }}/>
           <p className="cart_nombre">{nombre}</p>
           <p>{cantidad}</p>
           <p>${precio}</p>
           <p>Subtotal: ${precio * cantidad}</p>
           <div>
               <button onClick={() => remove(id, precio,cantidad)}>Remover</button>
           </div>
        </div>
    )
}

export default CartItem
