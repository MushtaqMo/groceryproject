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

const ShowMeatAndFish = () => {
    return (
        <div>
            <h1>Meat and Fish</h1>
            {stock.filter(item => item.category === "meat&fish").map(meatFishStock =>
            <div>
                <p>{meatFishStock.name}</p>
                <p>{meatFishStock.price}</p>
                <button onClick = {() => addHandler(meatFishStock)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default ShowMeatAndFish;