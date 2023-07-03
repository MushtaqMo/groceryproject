import { useEffect, useState } from "react";
import { readCart } from "../api/readCart";

const Cart = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const fetchcartProducts= async () => {
            const data = await readCart()
            setCart(data)
            console.log(cart)
        }
        fetchcartProducts()
    
    }, [])

    if (!cart) return <h1>loading...</h1>
    return (
<div>

    <h1>

        cart
        cart ? cart.map((cart) =>  key={todo._id} deleteHandler={() => onDeleteTodo(todo)} todo={todo}/>)
    </h1>
</div>


    )



    }


export default Cart