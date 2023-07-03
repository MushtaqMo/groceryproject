import { useState } from "react"
import stock from '../availableStock'
import addHandler from '../pages/Home.js'

const ShowDrinks = () => {
    return (
        <div>
            <h1>Drinks</h1>
            {stock.filter(item => item.category === "drinks").map(drinksStock =>
            <div>
                <p>{drinksStock.name}</p>
                <p>{drinksStock.price}</p>
                <button onClick = {() => addHandler(item)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default ShowDrinks;