import Item from "./Item"

const ItemList = ({productos}) => {
    return (
        <div className="div_Item">
            {productos.map((item) => {
                return (
                    <Item id={item.id} nombre={item.nombre} precio={item.precio} img={item.img}/>
                )    
            })
            }
        </div>
    )
}

export default ItemList