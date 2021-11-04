import ItemCount from "./ItemCount"
import ItemListContainer from "./ItemList/ItemListContainer"
import ItemDetailContainer from "./ItemDetail/ItemDetailContainer"

const Main = () => {
   
    
    return(
        <main>
            <p>Nuestros Productos</p>
            <ItemCount stock={20} initial={1} />
            <ItemListContainer/>
            <ItemDetailContainer/>
        </main>
    )
}

export default Main
