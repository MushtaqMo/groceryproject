import { useState } from "react"
import stock from '../availableStock'
import { addToCart } from "../api/addToCart";

const addHandler = async (item) => {
    let product = {
    name: item.name,
    price: item.price,
    category: item.category,
    numberSelected: 1
    }
    let response = await addToCart(product)
    alert('added item')
    }

const ShowFrozenFood = () => {
    return (
        <div>
            <h1>Frozen Food</h1>
            {stock.filter(item => item.category === "frozenfood").map(frozenStock =>
            <div>
                <p>{frozenStock.name}</p>
                <p>£{frozenStock.price.toFixed(2)}</p>
                <button onClick = {() => addHandler(frozenStock)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default ShowFrozenFood;