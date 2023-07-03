import { useEffect, useState } from "react";
import { addToCart } from "../api/addToCart";
import { deleteFromCart } from "../api/deleteFromCart";
import {Link} from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([])

    const deleteHandler = async (product) => {
        let response = await deleteProduct(product)
        console.log(response)
        let newItems = [...products]
        newItems.filter(Item => Item._id != response.id)
        setProducts(newItems)
        alert('deleted item')
    }
    const addHandler = async (item) => {
        let product = {
        name: item.name,
        price: item.price,
        category: item.category,
        numberSelected: 1
        }

        let response = await addToCart(product)
        console.log(response)
        alert('added item')
        }
        
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         let data = await readCart()
    //         setProducts(data.products)
    //         console.log(data.message)
    //      }
    //      fetchProducts()
    // } )

    // if (!products) return <h1>loading...</h1>
    return (
        <div>
            <Link to = '/drinks'><button>Drinks</button></Link>
            <Link to = '/snacks'><button>Snacks</button></Link>
            <Link to = '/dairy'><button>Dairy</button></Link>
            <Link to = '/fruitAndVeg'><button>Fruit and Vegetables</button></Link>
            <Link to = '/meatAndFish'><button>Meat and Fish</button></Link>
            <Link to = '/frozenFood'><button>Frozen Food</button></Link>
            <Link to = '/cart'><button>Cart</button></Link>

            
        </div>
    )
}

export default Home