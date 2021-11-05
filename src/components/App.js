import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemList/ItemListContainer"
import ItemDetailContainer from "./ItemDetail/ItemDetailContainer"
import Main from "./Main"
import Header from "./Header"



const App = () => {
    return (
        <div>   
            <BrowserRouter>         
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/categoria/:id" element={<ItemListContainer/>} />
                    <Route path="/item/:id" element={<ItemDetailContainer/>} />
                </Routes>                
            </BrowserRouter>
        </div>
    )
}

export default App