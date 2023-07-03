import { useState } from "react"
import stock from '../availableStock'
import addHandler from '../pages/Home.js'

const ShowSnacks = () => {
    let snacksStock = stock
    console.log(snacksStock)
    {snacksStock.filter(item => item.category === "snacks")}; 
    console.log(snacksStock)

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

export default ShowSnacks;