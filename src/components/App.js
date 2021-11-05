import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemList/ItemListContainer"
import Main from "./Main"
import Header from "./Header"


const App = () => {
    return (
        <div>   
            <BrowserRouter>         
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>} exact/>
                    <Route path="/categoria/:id" element={<ItemListContainer/>} exact/>
                </Routes>
                <Main/>
            </BrowserRouter>
        </div>
    )
}

export default App