import { useState } from "react"
import stock from '../../../backend/availableStock.js'
import addHandler from '../pages/Home.js'

const showDairy = () => {
    let dairyStock = stock
    {dairyStock.filter(item => item.category === "dairy")}; 

    return (
        <div>
            <h1>Dairy</h1>
            {dairyStock.map((item) =>
            <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick = {() => addHandler(item)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default showDairy;