import React from 'react'
import Contador from '../Contador/Contador'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({productos}) => {

    const onAdd = () => {
        console.log(`Agregaste un producto al carrito`);
    }

    const onCheckout = (cant) => {
        alert(`Compraste ${cant} productos`);
    }

    return (
        <div className="container-fluid mt-5">
            <h1 className="tituloProvisional">
                {productos}
            </h1>
            <Contador initial={1} stock={15} onAdd={onAdd} funcionComprar={onCheckout} />
            <ItemList />
        </div>
    )
}

export default ItemListContainer