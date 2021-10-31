import ItemCount from "./ItemCount"
import ItemListContainer from "./ItemListContainer"

const Main = () => {
   
    
    return(
        <main>
            <p>Nuestros Productos</p>
            <ItemCount stock={20} initial={1} />
            <ItemListContainer/>
        </main>
    )
}

export default Main
