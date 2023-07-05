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

const ShowMeatAndFish = () => {
    return (
        <div>
            <h1>Meat and Fish</h1>
            <div className = "categoryBox">
            {stock.filter(item => item.category === "meat&fish").map(meatFishStock =>
            <div className = "categoryProduct">
                <img className = "categoryImage" src = {meatFishStock.image}/>
                <p>{meatFishStock.name}</p>
                <p>£{meatFishStock.price.toFixed(2)}</p>
                <button className = "categoryButton" onClick = {() => addHandler(meatFishStock)}>Add To Basket</button>
            </div>
            )}
            </div>
        </div>
    )
}

export default ShowMeatAndFish;