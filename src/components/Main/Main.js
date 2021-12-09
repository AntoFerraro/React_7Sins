import ItemListContainer from "./ItemList/ItemListContainer"
import ItemDetailContainer from "./ItemDetail/ItemDetailContainer"

const Main = () => {
       
    return(
        <main>
            <h2 className="nuestros_prod">Nuestros Productos</h2>            
            <ItemListContainer/>
            <ItemDetailContainer/>
        </main>
    )
}

export default Main
