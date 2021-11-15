import { useNavigate } from "react-router-dom";

const Item = ({id, nombre, precio, img}) => {

    const navigate = useNavigate();
    
    const goItemDetail = (id) => {
        navigate(`/item/${id}`);
    }

    return (
        <div className="main_Cards" key={id} >
            <h2 key={nombre}>{nombre}</h2>
            <img src={img} alt={nombre} style={{ width: "30%" }}/>
            <p key={precio}>{precio}</p>            
            <button onClick={() => goItemDetail(id)}> Ver detalles</button>
        </div>
    )
}

export default Item