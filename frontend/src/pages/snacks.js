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

const ShowSnacks = () => {
    return (
        <div>
            <h1>Snacks</h1>
            {stock.filter(item => item.category === "snacks").map(snackStock =>
            <div>
                <p>{snackStock.name}</p>
                <p>{snackStock.price}</p>
                <button onClick = {() => addHandler(snackStock)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default ShowSnacks;