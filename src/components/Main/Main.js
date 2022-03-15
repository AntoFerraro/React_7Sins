import ItemListContainer from "./ItemList/ItemListContainer"

import Welcome from "./WelcomePage/Welcome"

const Main = () => {
       
    return(
        <main className="background">
            <Welcome/>
            <h2 className="nuestros_prod">Nuestros Productos</h2>            
            <ItemListContainer/>            
        </main>
    )
}

export default Main
