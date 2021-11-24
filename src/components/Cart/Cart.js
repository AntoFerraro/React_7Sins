import { useContext, useState } from "react"
import { contexto } from "../Context/CartContext"
import CartItem from "./CartItem"
import {firestore} from "../firebase"


const Cart = () => {

    const {emptyCart, cart, total} = useContext(contexto)
    const [idOrden, setIdOrden] = useState()
    console.log(cart)

    const buy = async () => {
        const usuario = {
            nombre: "Francisco",
            email: "fran@test.com",
            telefono: "123555555"
        }

        const orden = {
            buyer: usuario,
            items : cart,
            total : total,
            //date : firebase.firestore.TimeStamp.now()
        }

        const db = firestore
        const collection = db.collection("ordenes")
        const query = await collection.add(orden)
        setIdOrden(query.id)
        alert(`Gracias por su compra, su numero de orden es: ${query.id}, su total es de ${total}`);

        // query.
        // then((resultado) => {
        //     setIdOrden(resultado.id)
        // })
        emptyCart()
        
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

