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

const ShowDrinks = () => {
    return (
        <div>
            <h1>Drinks</h1>
            {stock.filter(item => item.category === "drinks").map(drinksStock =>
            <div>
                <p>{drinksStock.name}</p>
                <p>{drinksStock.price}</p>
                <button onClick = {() => addHandler(drinksStock)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default ShowDrinks;