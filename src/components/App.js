import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./Main/ItemList/ItemListContainer"
import ItemDetailContainer from "./Main/ItemDetail/ItemDetailContainer"
import Main from "./Main/Main"
import NavBar from "./AllHeader/NavBar"
import CustomComponent from "./Context/CartContext"
import Cart from "./Cart/Cart"
import CartEmpty from "./Cart/CartEmpty"


const App = () => {

    return (
        <div>   
            <BrowserRouter>  
            <CustomComponent>       
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/categoria/:id" element={<ItemListContainer/>} />
                    <Route path="/item/:id" element={<ItemDetailContainer/>} />  
                    <Route path="/cart" element= {<Cart/>} />
                    <Route path="/cartEmpty" element={<CartEmpty/>} />                  
                </Routes> 
            </CustomComponent>               
            </BrowserRouter>
        </div>
    )
}

export default App