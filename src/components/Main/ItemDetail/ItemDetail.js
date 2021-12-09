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
            <div className="div_detail" key={`detalle${producto.id}`} >
                <h2 className="detail_titulo" >{producto.nombre}</h2>
                <img className="detail_img" src={producto.img} alt={producto.nombre} style={{ width: "50%" }}/>
                <p className="detail_precio" >${producto.precio}</p>                
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />                            
                <button className="detail_volver" onClick={() => volver()}> Volver</button>
            </div>
        )        
    
    
}

export default ItemDetail;