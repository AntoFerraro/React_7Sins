import { useContext } from "react"
import { contexto } from "../Context/CartContext"
import CartItem from "./CartItem"

const Cart = () => {

    const {emptyCart, cart, total} = useContext(contexto)
    
    console.log(cart)

    const buy = () => {
        alert(`Gracias por su compra, su total es de ${total}`);
        emptyCart();
    }
    
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
                  subtotal={producto.product.precio * producto.cantidad}
                />
              )}               
            </div>
            <div>
                <button onClick={() => emptyCart()} style={{ margin: "0 0 0 15px"}}>Vaciar </button>
                <p style={{ margin: "0 0 0 15px"}}>Total: $ {total}</p>
                <button onClick={() => buy()} style={{ margin: "0 0 0 15px"}}> Comprar </button>
                
            </div>
        </div>
    )
}

export default Cart

