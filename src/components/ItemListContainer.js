import { useEffect, useState } from "react";
import ItemList from "./ItemList"

const ItemListContainer = (greeting) => {

    const [productos, setProductos] = useState([]);
    

    useEffect(() => {
        setTimeout(() => {
            fetch("https://617e9eb82ff7e600174bd884.mockapi.io/api/sevenProd/products")
        .then(response => response.json())
        .then(myJson => {
            setProductos(myJson) });  
        }, 2000)
    }, []);

    if(productos.length === 0){
       return(
       <div>
           <p>Cargando Productos</p>
       </div> )             
    } else {      
            return(
                <div>
                    <p> Bienvenida {greeting.apellido} {greeting.nombre}</p>
                    <ItemList productos={productos}/>
                </div>                
            )}
}

export default ItemListContainer