import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import ItemList from "./ItemList"
import {firestore} from "../../firebase"

const ItemListContainer = () => {

    const {id} = useParams()   
      
    const [productos, setProductos] = useState([]);
    

    useEffect(() => {
        if(id){
            const dataBase = firestore
            const collection = dataBase.collection("products")
            const query = collection.where("categoria", "==", id)
            const promesa = query.get()

            promesa
                .then(resultado => {
                    const productos = []

                    resultado.docs.forEach(docs => {
                        const producto = {...docs.data(), id:docs.id}
                        productos.push(producto)
                    })
                    setProductos(productos)                    
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            const dataBase = firestore
            const collection = dataBase.collection("products")
            const promesa = collection.get()
            

            promesa
                .then(resultado => {
                    const productos = []

                    resultado.docs.forEach(docs => {
                        const producto = {...docs.data(), id:docs.id}
                        productos.push(producto)
                    })
                    setProductos(productos)                    
                })
                .catch(err => {
                    console.log(err)
                })
        }     
    }, [id]);

    if(productos.length === 0){
        return(
            <div className="div_cargando">
                <p className="cargando">Cargando Productos</p>
            </div> 
        )
    } else{               
        return(
            <div >                
                <ItemList  productos={productos}/>
            </div>
        )
    }
    
}

export default ItemListContainer