import ItemListContainer from "./ItemList/ItemListContainer"
import ItemDetailContainer from "./ItemDetail/ItemDetailContainer"
import Welcome from "./WelcomePage/Welcome"

const Main = () => {
       
    return(
        <main className="background">
            <Welcome/>
            <h2 className="nuestros_prod">Nuestros Productos</h2>            
            <ItemListContainer/>
            <ItemDetailContainer/>
        </main>
    )
}

export default Main
