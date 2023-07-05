import { useState } from "react"
import stock from '../availableStock'
import { addToCart } from "../api/addToCart";
import "./categories.css"

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
            <div className = "categoryBox">
            {stock.filter(item => item.category === "drinks").map(drinksStock =>
            <div className = "categoryProduct">
                <p>{drinksStock.name}</p>
                <p>£{drinksStock.price.toFixed(2)}</p>
                <button className = "categoryButton" onClick = {() => addHandler(drinksStock)}>Add To Basket</button>
            </div>
            )}
            </div>
        </div>
    )
}

export default ShowDrinks;