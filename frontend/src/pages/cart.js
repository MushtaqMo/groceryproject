import { useEffect, useState } from "react";
import { readCart } from "../api/readCart";
import Card from "../components/Card";
import  { deleteFromCart } from "../api/deleteFromCart";
import { editCart } from "../api/editCartQuantity"

const Cart = () => {
    const [cart, setCart] = useState([])

    const deleteAll = async (cart, setCart) => {
        let newItems = []
        setCart(newItems)
        cart.map((product) => deleteFromCart(product) )
    }

    const deleteHandler = async (product, index) => {
        let response = await deleteFromCart(product)
        console.log(response)
        let newItems = [...cart]
        newItems.splice(index, 1)
        setCart(newItems)
        alert('deleted item')
    }

    const increaseQuantity = async (item) => {
        let newCart = [...cart]
        item.numberSelected += 1;
        setCart(newCart)
        let response = await editCart(item)
        console.log(response)

      }
        
    const decreaseQuantity = async (item) => {
        let newCart = [...cart]
        if (item.numberSelected > 1) {
            item.numberSelected -= 1;
        }
        setCart(newCart)
        let response = await editCart(item)
        console.log(response)
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
    cart 
    ? cart.map((item, index) => 
    <div>
        <p>Name: {item.name}</p>
        <p>Price per item: {item.price}</p>
        <p>Number selected: {item.numberSelected}</p>
        <button onClick={() => decreaseQuantity(item)}>-</button>
        <p>Total Price: {item.price * item.numberSelected}</p>
        <button onClick={() => increaseQuantity(item)}>+</button>    
        <button onClick={() => deleteHandler(item, index)}>Delete from cart</button>
    </div>
    )
    :
    <p>loading...</p>
    }

    </div>
    <div>
        <button onClick = {() => deleteAll(cart, setCart)}>Empty Cart</button>
    </div>
</div>
    )
    }
export default Cart