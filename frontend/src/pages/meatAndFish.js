import { useState } from "react"
import stock from '../../../backend/availableStock.js'
import addHandler from '../pages/Home.js'

const showMeatAndFish = () => {
    let meatAndFishStock = stock
    {meatAndFishStock.filter(item => item.category === "meat&fish")}; 

    return (
        <div>
            <h1>Meat and Fish</h1>
            {meatAndFishStock.map((item) =>
            <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick = {() => addHandler(item)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default showMeatAndFish;