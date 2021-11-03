import ItemCount from "./ItemCount"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"

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
