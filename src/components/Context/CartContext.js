import {createContext , useState} from "react"
export const contexto = createContext()
export const {Provider} = contexto


//Comienza en App, y acá creamos el contexto
const CustomComponent = ({children}) => {
    
    const [cart, setCart] = useState([])

    const addToCart = (product, cantidad) => {
        console.log(cantidad, product)
    }

   

    const contextValue = {
        cart: cart,
        addToCart: addToCart
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CustomComponent