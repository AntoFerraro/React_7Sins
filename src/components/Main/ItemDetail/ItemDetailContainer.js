import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"
import {firestore} from "../../firebase"

const ItemDetailContainer = () => {
    
    const [productosDetail, setProductosDetail] = useState([]);   
    const [carga, setCarga] = useState(true);
    const {id} = useParams()    
    
        
    useEffect(() => {
        const dataBase = firestore
        const collection = dataBase.collection("products")
        if(!id){            
            const query = collection.doc("Mario")
            const promesa = query.get()

            promesa
                .then((resultado) => {                    
                    const data = resultado.data()                    
                    setProductosDetail(data)
                    setCarga(false)
                    })   
            
                .catch(err => {
                    console.log(err)
                })
        } else{
            const query = collection.doc(id)
            const promesa = query.get()

            promesa
                .then((resultado) => {                    
                    const data = resultado.data()                                      
                    setProductosDetail(data)
                    setCarga(false)
                    })   
            
                .catch(err => {
                    console.log(err)
                })
            }
     
    }, [id]);    

    if(carga){
       return(
       <div className="div_cargando">
           <p className="cargando">Cargando Productos</p>
       </div> )             
    } else {      
            return(
                <div>                    
                      <ItemDetail key={productosDetail.id} producto={productosDetail}/>              
                    <div className="div_stock">
                        <p className="stock"> El stock disponible es: {productosDetail.stock}</p>
                    </div>
                </div>   
                           
            )}
}

export default ItemDetailContainer;