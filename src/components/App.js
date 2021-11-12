import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemList/ItemListContainer"
import ItemDetailContainer from "./ItemDetail/ItemDetailContainer"
import Main from "./Main"
import Header from "./AllHeader/Header"
import CustomComponent from "./Context/CartContext"


const App = () => {

    

    return (
        <div>   
            <BrowserRouter>  
            <CustomComponent>       
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/categoria/:id" element={<ItemListContainer/>} />
                    <Route path="/item/:id" element={<ItemDetailContainer/>} />  
                    <Route path="/cart"/>                  
                </Routes> 
            </CustomComponent>               
            </BrowserRouter>
        </div>
    )
}

export default App