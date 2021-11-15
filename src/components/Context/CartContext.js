import {createContext , useState} from "react"
export const contexto = createContext()
export const {Provider} = contexto


//Comienza en App, y acá creamos el contexto
const CustomComponent = ({children}) => {
    
    const [cart, setCart] = useState([])

    //No puedo pushear sobre cart, por lo que creamos un nuevo array que agarra los elementos por separado del original
    //Se encuentra en ItemDetail
    const addToCart = (product, cantidad) => {
        if (isInCart(product.id) === false) {
            setCart( [...cart, {product, cantidad}])
        }         
    }

    const isInCart = (id) => { //NO funciona
        const cartFind = cart.find(item => item.id === id)
        if(cartFind === id) {
            return true
        }else{
            return false
        }
    }

    const removeFromCart = (id) => { //no funciona
        const carritoFiltrado = cart.filter((item) => item.id !== id)
        setCart(carritoFiltrado)
    }

    //Se encuentra en Cart, Ok
    const emptyCart = () => { 
        setCart([]);
    }
   

    const contextValue = {
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        emptyCart: emptyCart,
        isInCart: isInCart
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CustomComponent