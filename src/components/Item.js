const Item = ({id, nombre, precio, img}) => {

    return (
        <div key={id} >
            <h2 key={nombre}>{nombre}</h2>
            <img src={img} alt={nombre}/>
            <p key={precio}>{precio}</p>
        </div>
    )
}

export default Item