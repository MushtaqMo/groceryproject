import { useState } from "react"
import stock from '../availableStock'
import addHandler from '../pages/Home.js'

const ShowDrinks = () => {
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

export default ShowDrinks;