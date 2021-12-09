import { useState } from "react"
import { useNavigate } from "react-router"

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(stock > 0 ? initial : 0)
    const [stockItem, setStockItem] = useState(stock > 0 ? stock - initial : 0)
    const [mostrar, setMostrar] = useState(false)
    const navigate = useNavigate();    //Para navegar a otro link
    
    const aumentarContador = () => {        
        if(stockItem === 0){
            alert("Nos quedamos sin stock, lo lamentamos.")
        } else {
            setContador(contador + 1);
            setStockItem(stockItem - 1)
        }
    }

    const disminuirContador = () => {        
        if(contador === 0){
            alert("Está seleccionando cantidades negativas")
        } else {
            setContador(contador - 1);
            setStockItem(stockItem + 1)      
        }
    }

//Esto se lo pasamos a ItemDetail para que tenga el valor de nuestro contador
    const agregar = () => {        
        onAdd(contador) 
        setMostrar(!mostrar)             
    }        

    //Aparece si hay algo agregado al cart
    const redireccionar = () => {
        navigate(`/cart`);
    }

    return(
        <div className="div_itemCount">
            <div className="div_contador">
                <button className="botonMas" onClick={aumentarContador}> + </button>
                <p className="contador"> {contador} </p>
                <button className="botonMenos" onClick={disminuirContador}> - </button>                
            </div>
            <div className="div_agregar">
            <button id="add" className="Agregar" onClick={() => agregar()} > Agregar al carrito </button> 
            { mostrar && <button className="ver_Carrito" onClick={redireccionar}>ver carrito</button> }     
            </div>

        </div>
    )
}

export default ItemCount