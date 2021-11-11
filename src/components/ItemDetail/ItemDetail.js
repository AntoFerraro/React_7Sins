import ItemCount from "../ItemCount";

const ItemDetail = ({id, nombre, precio, img, stock}) => {    
    
   
        return (
            <div key={`detalle${id}`} >
                <h2 >{nombre}</h2>
                <img src={img} alt={nombre} style={{ width: "50%" }}/>
                <p >{precio}</p>                
                <ItemCount stock={40} initial={1}/> 
                <button type="button"> Volver</button>
            </div>
        )        
    
    
}

export default ItemDetail;