import { useState } from "react"
import stock from '../../../backend/availableStock.js'

const showSnacks = () => {
    let snacksStock = stock
    {snacksStock.filter(item => item.category === "snacks")}; 

    return (
        <div>
            <h1>Snacks</h1>
            {snacksStock.map((item) =>
            <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick = {() => addHandler(item)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default showSnacks;