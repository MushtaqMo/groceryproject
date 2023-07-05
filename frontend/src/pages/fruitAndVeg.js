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

const ShowFruitAndVeg = () => {
    return (
        <div>
            <h1>Fruit and Veg</h1>
            <div className = "categoryBox">
            {stock.filter(item => item.category === "fruit&veg").map(fruitVegStock =>
            <div className = "categoryProduct">
                <p>{fruitVegStock.name}</p>
                <p>£{fruitVegStock.price.toFixed(2)}</p>
                <button className = "categoryButton" onClick = {() => addHandler(fruitVegStock)}>Add To Basket</button>
            </div>
            )}
            </div>
        </div>
    )
}

export default ShowFruitAndVeg;