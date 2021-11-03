const Item = ({id, nombre, precio, img}) => {

    return (
        <div key={id} >
            <h2 key={nombre}>{nombre}</h2>
            <img src={img} alt={nombre} style={{ width: "30%" }}/>
            <p key={precio}>{precio}</p>
            <button type="button"> Ver detalles</button>
        </div>
    )
}

export default Item