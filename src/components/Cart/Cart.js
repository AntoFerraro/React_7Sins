import { useContext, useState } from "react"
import { contexto } from "../Context/CartContext"
import CartItem from "./CartItem"
import {firestore, formatDate} from "../firebase"
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

    const buy =  () => { 
        const usuario = {
            nombre: "Francisco",
            email: "fran@test.com",
            telefono: "123555555"
        }

        const orden = {
            buyer: usuario,
            items : cart,
            total : total,
            date: formatDate(new Date()),
        }

        const db = firestore
        const collection = db.collection("ordenes")
        const query =  collection.add(orden)
        query.
        then((resultado) => {
            setIdOrden(resultado.id)
        })
        .catch((error) => {
            console.log(error)
        })       
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
                <div className="div_cartbuttons">                
                    <button className="cart_vaciar" onClick={() => emptyCart()} style={{ margin: "0 0 0 15px"}}>Vaciar </button>
                    <p className="total">Total: $ {total}</p>
                    <button className="cart_comprar" onClick={() => buy()} style={{ margin: "0 0 0 15px"}}> Comprar </button>                
                </div>
            </div>
        )
    } else if (idOrden) {
        return( 
            <div>
                <div className="div_changoCompra">
                    <img className="img_chango" src={chango} alt={"changoCompra"} />
                </div>
                <div className="div_compraHecha">
                    <p>Muchas gracias por su compra</p>                  
                    <p>Su Total es de <strong> ${total} </strong></p>
                    <p>Su numero de Orden es: #<strong>{idOrden}</strong> </p>
                    <button className="terminar_compra" onClick={() => compraTerminar()}> Terminar la Compra</button>
                </div>
            </div>

            
        )
    } else{
        emptyCart()
    }
}

export default Cart

