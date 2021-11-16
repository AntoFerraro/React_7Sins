import {createContext , useState} from "react"
export const contexto = createContext()
export const {Provider} = contexto


//Comienza en App, y acá creamos el contexto
const CustomComponent = ({children}) => {
    
    const [cart, setCart] = useState([])

    //No puedo pushear sobre cart, por lo que creamos un nuevo array que agarra los elementos por separado del original
    //Se encuentra en ItemDetail
    const addToCart = (product, cantidad) => {
        const existe = cart.find((item) => item.product.id === product.id);        
        if(existe) {
             setCart(cart.map(item => item.product.id === product.id ? {...existe, cantidad: existe.cantidad += cantidad} : item));             
        }else {    
            setCart( [...cart, {product, cantidad}]);            
        }
    }

  
    const removeFromCart = (id) => { //Se encuentra en CartItem, OK
        const carritoFiltrado = cart.filter((item) => item.product.id !== id)
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
        
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CustomComponent