import { useEffect, useState } from "react";
import { readCart } from "../api/readCart";

const Cart = () => {
    const [cart, setCart] = useState([])

    const increaseQuantity = (item) => {
        let newCart = [...cart]
        item.numberSelected += 1;
        setCart(newCart)
      }

    const decreaseQuantity = (item) => {
        let newCart = [...cart]
        if (item.numberSelected > 1) {
            item.numberSelected -= 1;
        }
        setCart(newCart)
    }

    useEffect(() => {
        const fetchcartProducts= async () => {
            const data = await readCart()
            setCart(data.products)
        }
        fetchcartProducts()
    
    }, [])

    return (
<div>

    <h1>
        cart
    </h1>
    <div>
    {
    cart ? cart.map((item) => 
    <div>
        <p>Name of Item: {item.name}</p>
        <button onClick={() => decreaseQuantity(item)}>-</button>
        <p>Number Selected: {item.numberSelected}</p>
        <button onClick={() => increaseQuantity(item)}>+</button>
        <p>Total Price: {item.price * item.numberSelected}</p>

    </div>
    )
    :
    <p>loading...</p>
    }

    </div>
</div>
    )
    }
export default Cart