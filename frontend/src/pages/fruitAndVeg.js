import { useState } from "react"
import stock from '../../../backend/availableStock.js'

const showFruitAndVeg = () => {
    let fruitAndVegStock = stock
    {fruitAndVegStock.filter(item => item.category === "fruit&veg")}; 

    return (
        <div>
            <h1>Fruit and Veg</h1>
            {fruitAndVegStock.map((item) =>
            <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick = {() => addHandler(item)}>Add To Basket</button>
            </div>
            )}
        </div>
    )
}

export default showMFruitAndVeg;