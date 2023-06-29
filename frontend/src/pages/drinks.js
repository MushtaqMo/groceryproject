import { useState } from "react"
import stock from '../../../backend/availableStock.js'
import addHandler from '../pages/Home.js'

const showDrinks = () => {
    let drinksStock = stock
    {drinksStock.filter(item => item.category === "drinks")}; 

    return (
        <div>
            <h1>Drinks</h1>
            {drinksStock.map((item) =>
            <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick = {() => addHandler(item)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default showDrinks;