import { useEffect, useState } from "react";
import { readCart } from "../api/readCart";

const Cart = () => {
    const [cart, setCart] = useState([])

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
        <p>{item.name}</p>
        <p>{item.price}</p>
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