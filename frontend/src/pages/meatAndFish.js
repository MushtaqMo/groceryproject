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

const ShowMeatAndFish = () => {
    return (
        <div>
            <h1>Meat and Fish</h1>
            {stock.filter(item => item.category === "meat&fish").map(meatFishStock =>
            <div>
                <p>{meatFishStock.name}</p>
                <p>£{meatFishStock.price.toFixed(2)}</p>
                <button onClick = {() => addHandler(meatFishStock)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default ShowMeatAndFish;