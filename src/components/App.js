import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./Main/ItemList/ItemListContainer"
import ItemDetailContainer from "./Main/ItemDetail/ItemDetailContainer"
import Main from "./Main/Main"
import Header from "./AllHeader/Header"
import CustomComponent from "./Context/CartContext"
import Cart from "./Cart/Cart"


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
                    <Route path="/cart" element= {<Cart/>} />                  
                </Routes> 
            </CustomComponent>               
            </BrowserRouter>
        </div>
    )
}

export default App