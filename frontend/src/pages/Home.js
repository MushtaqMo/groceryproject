import { useEffect, useState } from "react";
import { addToCart } from "../api/addToCart";
import { deleteProduct } from "../deleteProduct";

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
        
    useEffect(() => {
        const fetchProducts = async () => {
            let data = await readProducts()
            setProducts(data.products)
            console.log(data.message)
         }
         fetchProducts()
    } )

    if (!products) return <h1>loading...</h1>
    return (
        <div>
            <>
            {
                products ? products.map((product) => <Card key={product._id} deleteHandler={deleteHandler} product={product}/>)
                : <p>loading...</p>
            }
            </>
        </div>
    )
}

export default Home