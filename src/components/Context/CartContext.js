import {createContext , useState} from "react"
import { useNavigate } from "react-router";
export const contexto = createContext()
export const {Provider} = contexto


const CustomComponent = ({children}) => {
    
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0) 
    const navigate = useNavigate();

    
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

  
    const removeFromCart = (id, precio, cantidad) => { 
        const carritoFiltrado = cart.filter((item) => item.product.id !== id)        
        setCart(carritoFiltrado)
        setTotal(total - (precio * cantidad))
        navigate(`/cartEmpty`);
    }

    
    const emptyCart = () => { 
        setCart([]);
        setTotal(0);
        navigate(`/cartEmpty`);
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