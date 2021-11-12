import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    
    const [productosDetail, setProductosDetail] = useState([]);   
    const [carga, setCarga] = useState(true);
    const {id} = useParams()    
    
  
        
    useEffect(() => {
        setTimeout(() => {
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
                 
        }, 2000)
    }, []);    

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