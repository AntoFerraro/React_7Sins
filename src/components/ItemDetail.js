import ItemCount from "./ItemCount";

const ItemDetail = ({id, nombre, precio, img}) => {
    
    
   
        return (
            <div key={`detalle${id}`} >
                <h2 >{nombre}</h2>
                <img src={img} alt={nombre} style={{ width: "50%" }}/>
                <p >{precio}</p>
                <ItemCount stock={20} initial={1}/> {/*Debo implementar en JSON el stock*/}
                <button type="button"> Volver</button>
            </div>
        )        
    
    
}

export default ItemDetail;