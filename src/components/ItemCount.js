import { useState } from "react"

const ItemCount = ({stock, initial}) => {

    const [contador, setContador] = useState(0)
        
    
    const aumentarContador = () => {        
        if(contador < 0 || contador < stock){
            setContador(contador + 1);
       
        }
    }

    const disminuirContador = () => {        
        if(contador > stock || contador > initial){
            setContador(contador - 1);      
        }
    }

    const onAdd = () => {
        alert("Agregado")
    }
        

    return(
        <div>
            <div className="div_contador">
                <button className="botonMas" onClick={aumentarContador}> + </button>
                <p className="contador"> {contador} </p>
                <button className="botonMenos" onClick={disminuirContador}> - </button>                
            </div>
            <div className="div_agregar">
            <button className="Agregar" onClick={onAdd} > Agregar al carrito </button>
            </div>

        </div>
    )
}

export default ItemCount