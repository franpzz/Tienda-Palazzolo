import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const Productos = [
    {id: 1, title: 'camisa 1', description: 'camisa de verano', price: 1200, stock: 10},
    {id: 2, title: 'camisa 2', description: 'camisa de verano', price: 3200, stock: 10},
    {id: 3, title: 'camisa 3', description: 'camisa de verano', price: 1450, stock: 10},
]

const MiPromesa = new Promise ((resolve, reject) => {
    setTimeout(()=>{
        resolve(Productos);
    }, 2000)
})

const ItemList = () => {

    const [listado, setListado] = useState ([]);

    useEffect(()=>{
        MiPromesa.then((data)=>{
            setListado(data)
        }, []);
    })

    return (
        <div class="container mt-3 d-flex">
            {listado.map((element, i) =><Item title={element.title} description={element.description} price={element.price} key={i}  />)}
        </div>
    )
}

export default ItemList;
