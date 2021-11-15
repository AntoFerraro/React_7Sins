import ItemCount from "./ItemCount";
import { useContext } from "react"
import { contexto } from "../../Context/CartContext"
import { useNavigate } from "react-router";

const ItemDetail = ({producto}) => {    

    const navigate = useNavigate();
    const volver = () => {
        navigate(`/`)
    }


    //Llamamos al contexto
    const {addToCart} = useContext(contexto)

    //Traido por ItemCount
    const onAdd = (contador) => {        
        addToCart(producto, contador)
    }    
 
    //Card Individual
        return (
            <div key={`detalle${producto.id}`} >
                <h2 >{producto.nombre}</h2>
                <img src={producto.img} alt={producto.nombre} style={{ width: "50%" }}/>
                <p >{producto.precio}</p>                
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} /> 
                <button onClick={() => volver()}> Volver</button>
            </div>
        )        
    
    
}

export default ItemDetail;