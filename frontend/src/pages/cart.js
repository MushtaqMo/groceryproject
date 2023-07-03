import { useEffect, useState } from "react";
import { readCart } from "../api/readCart";
import Card from "../components/Card";
import { DeleteFromCart } from "../api/deleteFromCart";

const Cart = () => {
    const [cart, setCart] = useState([])

    const deleteHandler = async (product) => {
        let response = await DeleteFromCart(product)
        console.log(response)
        let newItems = [...cart]
        newItems.filter(Item => Item._id != response.id)
        setCart(newItems)
        alert('deleted item')
    }

    const increaseQuantity = (item, cart, setCart) => {
        let newCart = [...cart]
        item.numberSelected += 1;
        setCart(newCart)
      }

    const decreaseQuantity = (item, cart, setCart) => {
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
        <p>Name: {item.name}</p>
        <p>Price per item: {item.price}</p>
        <p>Number selected: {item.numberSelected}</p>
        <button onClick={() => decreaseQuantity(item)}>-</button>
        <p>Total Price: {item.price * item.numberSelected}</p>
        <button onClick={() => increaseQuantity(item)}>+</button>    
        <Card item = {item} cart = {cart} setCart = {setCart} deleteHandler = {deleteHandler}/>

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