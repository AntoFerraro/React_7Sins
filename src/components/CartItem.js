import { useContext } from "react"
import { contexto } from "./Context/CartContext"

const CartItem = ({id, nombre, precio, img, cantidad}) => {
    
   const {removeFromCart} = useContext(contexto);

    const remove = (id) => { 
        removeFromCart(id)        
    }

    return (
        <div key={id} className="div_cartItem">
           <img src={img} alt={nombre} style={{ width: "10%" }}/>
           <p>{nombre}</p>
           <p>{cantidad}</p>
           <p>{precio}</p>
           <div>
               <button onClick={() => remove(id)}>Remover</button>
           </div>
        </div>
    )
}

export default CartItem
