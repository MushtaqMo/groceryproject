import { useState } from "react"
import stock from '../availableStock'
import addHandler from '../pages/Home.js'

const ShowMeatAndFish = () => {
    return (
        <div>
            <h1>Meat and Fish</h1>
            {stock.filter(item => item.category === "meat&fish").map(meatFishStock =>
            <div>
                <p>{meatFishStock.name}</p>
                <p>{meatFishStock.price}</p>
                <button onClick = {() => addHandler(item)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default ShowMeatAndFish;