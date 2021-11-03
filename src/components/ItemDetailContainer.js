import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    
    const [productosDetail, setProductosDetail] = useState([]);
    
    
    useEffect(() => {
        setTimeout(() => {
            fetch("https://617e9eb82ff7e600174bd884.mockapi.io/api/sevenProd/products")
        .then(response => response.json())
        .then(data => {
            setProductosDetail(data) });  
        }, 2000)
    }, []);

    if(productosDetail.length === 0){
       return(
       <div>
           <p>Cargando Productos</p>
       </div> )             
    } else {      
            return(
                <div>
                    <ItemDetail productosDetail={productosDetail}/>                   
                </div>                
            )}
}

export default ItemDetailContainer;