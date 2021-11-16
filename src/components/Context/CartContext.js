import {createContext , useState} from "react"
export const contexto = createContext()
export const {Provider} = contexto


//Comienza en App, y acá creamos el contexto
const CustomComponent = ({children}) => {
    
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0) //Guarda valor de todos los subtotales

    //No puedo pushear sobre cart, por lo que creamos un nuevo array que agarra los elementos por separado del original
    //Se encuentra en ItemDetail
    const addToCart = (product, cantidad) => {
        const existe = cart.find((item) => item.product.id === product.id);        
        if(existe) {
             setCart(cart.map(item => item.product.id === product.id ? {...existe, cantidad: existe.cantidad += cantidad} : item)); 
             setTotal(total + ( existe.product.precio *existe.cantidad))
             
        }else {    
            setCart( [...cart, {product, cantidad}]);
            setTotal(total + (product.precio * cantidad));                       
        }
    }

  
    const removeFromCart = (id, precio, cantidad) => { //Se encuentra en CartItem, OK
        const carritoFiltrado = cart.filter((item) => item.product.id !== id)        
        setCart(carritoFiltrado)
        setTotal(total - (precio * cantidad))
    }

    //Se encuentra en Cart, Ok
    const emptyCart = () => { 
        setCart([]);
    }
     

    const contextValue = {
        cart: cart,
        total: total,
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