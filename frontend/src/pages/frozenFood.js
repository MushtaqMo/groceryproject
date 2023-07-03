import { useState } from "react"
import stock from '../availableStock'
import addHandler from '../pages/Home.js'

const ShowFrozenFood = () => {
    return (
        <div>
            <h1>Frozen Food</h1>
            {stock.filter(item => item.category === "frozenfood").map(frozenStock =>
            <div>
                <p>{frozenStock.name}</p>
                <p>{frozenStock.price}</p>
                <button onClick = {() => addHandler(item)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default ShowFrozenFood;