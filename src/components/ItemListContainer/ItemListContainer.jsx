import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = ({productos}) => {
    return (
        <div className="container-fluid mt-5">
            <h1 className="tituloProvisional">
                {productos}
            </h1>
        </div>
    )
}

export default ItemListContainer