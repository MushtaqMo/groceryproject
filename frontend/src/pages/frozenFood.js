import { useState } from "react"
import stock from '../../../backend/availableStock.js'

const showFrozenFood = () => {
    let frozenFoodStock = stock
    {frozenFoodStock.filter(item => item.category === "frozenfood")}; 

    return (
        <div>
            <h1>Frozen Food</h1>
            {frozenFoodStock.map((item) =>
            <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick = {() => addHandler(item)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default showFrozenFood;