import { useState } from "react"
import stock from '../availableStock'
import { AddToCart } from "../api/addToCart";

const addHandler = async (item) => {
    let product = {
    name: item.name,
    price: item.price,
    category: item.category,
    numberSelected: 1
    }
    let response = await AddToCart(product)
    alert('added item')
    }

const ShowDairy = () => {
    return (
        <div>
            <h1>Dairy</h1>
            {stock.filter(item => item.category === "dairy").map(dairyStock =>
            <div>
                <p>{dairyStock.name}</p>
                <p>{dairyStock.price}</p>
                <button onClick = {() => addHandler(dairyStock)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default ShowDairy;