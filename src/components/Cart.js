import { useContext } from "react"
import { contexto } from "./Context/CartContext"
import CartItem from "./CartItem"

const Cart = () => {

    const {emptyCart, cart} = useContext(contexto)
    
    console.log(cart)
    
    return (
        <div>
            <div className="div_cart">
                <h1>Cart</h1>
            </div>
          
            <div>
            {cart.map((producto) =>
                <CartItem
                  key={producto.product.id}                  
                  nombre={producto.product.nombre}
                  precio={producto.product.precio}
                  img={producto.product.img} 
                  cantidad={producto.cantidad}
                  id={producto.product.id}
                />
              )}               
            </div>
            <div>
                <button onClick={() => emptyCart()}>Vaciar </button>
            </div>
        </div>
    )
}

export default Cart

