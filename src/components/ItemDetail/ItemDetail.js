import ItemCount from "../ItemCount";

const ItemDetail = ({id, nombre, precio, img, stock}) => {    
    
    const onAdd = (contador) => {
        console.log(contador, nombre);
    }
   
        return (
            <div key={`detalle${id}`} >
                <h2 >{nombre}</h2>
                <img src={img} alt={nombre} style={{ width: "50%" }}/>
                <p >{precio}</p>                
                <ItemCount stock={stock} initial={1} onAdd={onAdd} /> 
                <button type="button"> Volver</button>
            </div>
        )        
    
    
}

export default ItemDetail;