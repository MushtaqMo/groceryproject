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

const ShowFruitAndVeg = () => {
    return (
        <div>
            <h1>Fruit and Veg</h1>
            {stock.filter(item => item.category === "fruit&veg").map(fruitVegStock =>
            <div>
                <p>{fruitVegStock.name}</p>
                <p>£{fruitVegStock.price.toFixed(2)}</p>
                <button onClick = {() => addHandler(fruitVegStock)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default ShowFruitAndVeg;