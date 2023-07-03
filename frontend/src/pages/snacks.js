import { useState } from "react"
import stock from '../availableStock'
import addHandler from '../pages/Home.js'

const ShowSnacks = () => {
    return (
        <div>
            <h1>Snacks</h1>
            {stock.filter(item => item.category === "snacks").map(snackStock =>
            <div>
                <p>{snackStock.name}</p>
                <p>{snackStock.price}</p>
                <button onClick = {() => addHandler(item)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default ShowSnacks;