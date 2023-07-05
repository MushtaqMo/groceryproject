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

const ShowDairy = () => {
    return (
        <div>
            <h1>Dairy</h1>
            <div className = "categoryBox">
            {stock.filter(item => item.category === "dairy").map(dairyStock =>
            <div className = "categoryProduct">
                <p>{dairyStock.name}</p>
                <p>£{dairyStock.price.toFixed(2)}</p>
                <button className = "categoryButton" onClick = {() => addHandler(dairyStock)}>Add To Basket</button>
            </div>
            )}
            </div>
        </div>
    )
}

export default ShowDairy;