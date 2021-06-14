import React, {useState, useEffect} from 'react'
import './Item.css'

const Item = (props) => {
    return (
        <div className="container mt-3">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>${props.price}</p>
        </div>
    )
}

export default Item;

