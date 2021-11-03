const ItemDetail = ({productosDetail}) => {
    
    const filtrado = productosDetail.filter(prod => prod.categorias === 'vestidos');
    

   {filtrado.map((items) => {
        return (
            <div key={items.id} >
                <h2 key={items.nombre}>{items.nombre}</h2>
                <img src={items.img} alt={items.nombre}/>
                <p key={items.precio}>{items.precio}</p>
            </div>
        )  
        })
    }
    
}

export default ItemDetail;