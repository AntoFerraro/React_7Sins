import { useContext, useState } from "react"
import { contexto } from "../Context/CartContext"
import CartItem from "./CartItem"
import {firestore} from "../firebase"
import { useNavigate } from "react-router";
import chango from "../../img/shoppingCart.jpg"


const Cart = () => {

    const {emptyCart, cart, total} = useContext(contexto)    
    const [idOrden, setIdOrden] = useState()
    const navigate = useNavigate();

    
    const compraTerminar = () => {
        emptyCart()
        navigate(`/`)
       
    }

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
            //date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        const db = firestore
        const collection = db.collection("ordenes")
        const query = await collection.add(orden)
        setIdOrden(query.id)
        console.log(cart)
    }


    if(cart.length >= 1 && !idOrden) {    
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
    } else if (idOrden) {
        return( 
            <div>
                <div className="div_changoCompra">
                    <img className="img_chango" src={chango} alt={"changoCompra"} />
                </div>
                <div>
                    <p>Muchas gracias por su compra</p>
                  
                    <p>Su Total es de ${total}</p>
                    <p>Su numero de Orden es: #<strong>{idOrden}</strong> </p>
                    <button onClick={() => compraTerminar()}> Terminar la Compra</button>
                </div>
            </div>

            
        )
    } else{
        emptyCart()
    }
}

export default Cart

