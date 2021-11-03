import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    
    const [productosDetail, setProductosDetail] = useState([]);
    const [carga, setCarga] = useState(true);
    
    
    useEffect(() => {
        setTimeout(() => {
            fetch("https://617e9eb82ff7e600174bd884.mockapi.io/api/sevenProd/products")
                .then(response => response.json())
                .then(data => {
                    const productoFiltrado = data.find(prod => prod.id === "Mario")
                    setProductosDetail(productoFiltrado);                    
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
                      <ItemDetail key={productosDetail.id} nombre={productosDetail.nombre} precio={productosDetail.precio} img={productosDetail.img}/>              
                </div>                
            )}
}

export default ItemDetailContainer;