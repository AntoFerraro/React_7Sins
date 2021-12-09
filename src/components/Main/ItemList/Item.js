import { useNavigate } from "react-router-dom";

const Item = ({id, nombre, precio, img}) => {

    const navigate = useNavigate();
    
    const goItemDetail = (id) => {
        navigate(`/item/${id}`);
    }

    return (
        <div className="main_Cards" key={id} >
            <h2 className="item_h2" key={nombre}>{nombre}</h2>
            <img className="item_img" src={img} alt={nombre} />
            <p className="item_precio" key={precio}>{precio}</p>            
            <button className="item_detalles" onClick={() => goItemDetail(id)}> Ver detalles</button>
        </div>
    )
}

export default Item