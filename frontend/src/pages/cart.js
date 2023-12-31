import { useEffect, useState } from "react";
import { readCart } from "../api/readCart";
import {Link} from "react-router-dom";
import  { deleteFromCart } from "../api/deleteFromCart";
import { editCart } from "../api/editCartQuantity";
import "./cart.css";

const Cart = () => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const deleteAll = async (cart, setCart) => {
        let newItems = []
        setCart(newItems)
        cart.map((product) => deleteFromCart(product) )
        setTotal(0)
    }

    const deleteHandler = async (product, index) => {
        let newTotal = total
        newTotal -= product.price * product.numberSelected
        setTotal(newTotal)
        let response = await deleteFromCart(product)
        console.log(response)
        let newItems = [...cart]
        newItems.splice(index, 1)
        setCart(newItems)
        alert('deleted item')

    }

    const increaseQuantity = async (item) => {
        let newTotal = total
        newTotal += item.price
        setTotal(newTotal)
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
            let newTotal = total
            newTotal -= item.price
            setTotal(newTotal)
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

    useEffect(() => {
        const checkTotal = async () => {
            const data = await readCart()
            let newTotal = total
            data.products.map((item) => newTotal += item.price * item.numberSelected)
            setTotal(newTotal)
        }

        checkTotal()
    
    }, [])



    return (
    <div>
    <h2 className="heading"> Cart </h2>
    <div>
    { cart 
    ? cart.map((item, index) => 
    <div className="cart-item">
        <p className="item-name">{item.name}</p>
        <p className="item-price">Price per item: £{item.price.toFixed(2)}</p>
        <button className="cart-button" onClick={() => decreaseQuantity(item)}>-</button>
        <p className="item-num">{item.numberSelected}</p>
        <button className="cart-button" onClick={() => increaseQuantity(item)}>+</button>    
        <p className="item-total">Total Price: £{(item.price * item.numberSelected).toFixed(2)}</p>
        <button className="cart-button" onClick={() => deleteHandler(item, index)}>Delete from cart</button>
    </div>
    )
    :
    <p>loading...</p>
    }

    </div>
    <div className = "emptyButtonContainer">
        <button className="empty-button" onClick = {() => deleteAll(cart, setCart)}>Empty Cart</button>
    </div>
    <div>
        <p className="total">Total: £{total.toFixed(2)}</p>
    </div>
    <div className = "checkoutButtonContainer">
        <Link to = '/checkout'><button className="cart-button">Checkout</button></Link>
    </div>
</div>
    )
    }
export default Cart