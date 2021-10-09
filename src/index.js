//1)Tiene que estar la variable React en scope
import React from "react"

//2)Tiene que estar la variable ReactDOM en scope
import ReactDOM from "react-dom"

//3)Tengo que tener un elemento
const Elemento = () => <p> Hola Mundo! </p>

//4) Tengo que renderizar el Elemento, solo pasa una vez y nunca mas
ReactDOM.render(<Elemento/>, document.getElementById("root")); //que quiero renderizar y donde