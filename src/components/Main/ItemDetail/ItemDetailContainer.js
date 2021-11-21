import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"
import {firestore} from "../../firebase"

const ItemDetailContainer = () => {
    
    const [productosDetail, setProductosDetail] = useState([]);   
    const [carga, setCarga] = useState(true);
    const {id} = useParams()    
    
  
        
    useEffect(() => {
        if(!id){
            const dataBase = firestore
            const collection = dataBase.collection("products")
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

            const dataBase = firestore
            const collection = dataBase.collection("products")
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
       /*  setTimeout(() => {
            fetch("https://617e9eb82ff7e600174bd884.mockapi.io/api/sevenProd/products")
                .then(response => response.json())
                .then(data => {
                    if(!id) {
                        const productoFiltrado = data.find(prod => prod.id === "Mario")
                        setProductosDetail(productoFiltrado); 
                    } else {
                        const productoFiltrado = data.find(prod => prod.id === id)
                        setProductosDetail(productoFiltrado);
                    }               
                    setCarga(false);
                                                                                                
                });
                 
        }, 2000) */
    }, [id]);    

    if(carga){
       return(
       <div>
           <p>Cargando Productos</p>
       </div> )             
    } else {      
            return(
                <div>
                    <h2> Soy Item Detail </h2>
                      <ItemDetail key={productosDetail.id} producto={productosDetail}/>              
                    <div>
                    <p> El stock disponible es: {productosDetail.stock}</p>
                    </div>
                </div>   
                           
            )}
}

export default ItemDetailContainer;