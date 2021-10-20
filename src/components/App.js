import Main from "./Main"
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"

const App = () => {
    return (
        <div>            
            <Header/>
            <ItemListContainer nombre={"Antonella"} apellido={"Ferraro"}/>
            <Main/>
        </div>
    )
}

export default App