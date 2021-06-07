import React, { useState, Fragment } from 'react'
import "./Contador.css"

const Contador = ({initial, stock, funcion, funcionComprar}) => {

    const [producto, setProducto] = useState(initial);
    const Agregar = () => {
        producto < stock && setProducto(producto + 1);
        producto < stock && funcion();
    } 
    const Quitar = () => {
        producto > 0 && setProducto(producto - 1);
    }

    return (
        <Fragment>
            <div className="container d-flex justify-content-center mt-4">
                <div className="d-flex flex-row contenedorBotones justify-content-center">
                    <button className="btn btn-success botones" onClick={Quitar}>-</button>
                    <span className="text-center productos">{producto}</span>
                    <button className="btn btn-danger botones" onClick={Agregar}>+</button>
                </div>
            </div>
            <div className="container mt-5">
                <button className="btn btn-info botonCompra" onClick={()=>{
                    funcionComprar(producto)
                }}>Comprar</button>
            </div>
        </Fragment>
    )
}

export default Contador;