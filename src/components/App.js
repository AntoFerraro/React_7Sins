import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./Main/ItemList/ItemListContainer"
import ItemDetailContainer from "./Main/ItemDetail/ItemDetailContainer"
import Main from "./Main/Main"
import NavBar from "./AllHeader/NavBar"
import CustomComponent from "./Context/CartContext"
import Cart from "./Cart/Cart"
import CartEmpty from "./Cart/CartEmpty"
import Footer from "./Footer/Footer"

const App = () => {

    return (
        <div className="app__container">   
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
                <Footer/>
            </CustomComponent>               
            </BrowserRouter>
        </div>
    )
}

export default App