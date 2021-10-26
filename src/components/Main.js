import ItemCount from "./ItemCount"

const Main = () => {
   
    
    return(
        <main>
            <p>Nuestros Productos</p>
            <ItemCount stock={20} initial={1} />
        </main>
    )
}

export default Main
