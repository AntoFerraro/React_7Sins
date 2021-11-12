import ItemCount from "../ItemCount";
import { useContext } from "react"
import { contexto } from "../Context/CartContext"

const ItemDetail = ({producto}) => {    

    //Llamamos al contexto
    const {addToCart} = useContext(contexto)

    //Traido por ItemCount
    const onAdd = (contador) => {        
        addToCart(contador, producto)
    }
 
    //Card Individual
        return (
            <div key={`detalle${producto.id}`} >
                <h2 >{producto.nombre}</h2>
                <img src={producto.img} alt={producto.nombre} style={{ width: "50%" }}/>
                <p >{producto.precio}</p>                
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} /> 
                <button type="button"> Volver</button>
            </div>
        )        
    
    
}

export default ItemDetail;