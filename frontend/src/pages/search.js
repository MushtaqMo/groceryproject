import {useState} from "react"
import stock from '../availableStock'
import { addToCart } from "../api/addToCart";
import "./search.css"


const Search = () => {

    const addHandler = async (item) => {
        let product = {
        name: item.name,
        price: item.price,
        category: item.category,
        numberSelected: 1
        }
        let response = await addToCart(product)
        alert('added item')
        }

    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div className="search">
            <div className = "searchInputContainer">
            <input className = "searchInputBar"
            type="text"
             placeholder="Search..."
              onChange={e => {
                setSearchTerm(e.target.value);
                }}
                />
                </div>
                <div className = "searchResults">
            {stock.filter((val)=>{
                if (searchTerm =="") {
                    return val
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((value, key) => {
                return(
                    <div className="user" key={key}>
                        <p>{value.name}</p>
                        <p>£{value.price.toFixed(2)}</p>
                        <button className = "addButton" onClick = {() => addHandler(value)}>Add To Basket</button>
                        </div>
                       )
                })}
                </div>

            </div>
                   )
}

export default Search