import Vacio from '../../img/carritoVacio.jpg';

const CartEmpty = () => {
    return (
        <div className="div_imagen">
            <img className="imagenVacio" src={Vacio} alt={"imagenVacio"}/>
        </div>
    )
}

export default CartEmpty
