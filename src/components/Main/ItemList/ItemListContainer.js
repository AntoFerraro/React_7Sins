import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const {id} = useParams()   
      
    const [productos, setProductos] = useState([]);
    

    useEffect(() => {
        setTimeout(() => {
            if(id){
                fetch(`https://617e9eb82ff7e600174bd884.mockapi.io/api/sevenProd/products`)
                    .then(response => response.json())
                    .then(products => 
                        products.filter(item => item.categoria === id)
                    )
                    .then(myJson =>{
                        setProductos(myJson)
                    }); 
            } else {
                fetch("https://617e9eb82ff7e600174bd884.mockapi.io/api/sevenProd/products")
                    .then(response => response.json())
                    .then(myJson => {
                        setProductos(myJson); 
                    }); 
            }
        }, 2000)
    }, [id]);

    if(productos.length === 0){
        return(
            <div>
                <p>Cargando Productos</p>
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