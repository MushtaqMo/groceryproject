import { useState } from "react"
import stock from '../availableStock'
import addHandler from '../pages/Home.js'

const ShowDairy = () => {
    return (
        <div>
            <h1>Dairy</h1>
            {stock.filter(item => item.category === "dairy").map(dairyStock =>
            <div>
                <p>{dairyStock.name}</p>
                <p>{dairyStock.price}</p>
                <button onClick = {() => addHandler(item)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default ShowDairy;