import { useState } from "react"
import stock from '../availableStock'
import addHandler from '../pages/Home.js'

const ShowFruitAndVeg = () => {
    return (
        <div>
            <h1>Fruit and Veg</h1>
            {stock.filter(item => item.category === "fruit&veg").map(fruitVegStock =>
            <div>
                <p>{fruitVegStock.name}</p>
                <p>{fruitVegStock.price}</p>
                <button onClick = {() => addHandler(item)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default ShowFruitAndVeg;