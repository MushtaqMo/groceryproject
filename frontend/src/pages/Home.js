import { useEffect, useState } from "react";
import { addToCart } from "../api/addToCart";
import {Link} from "react-router-dom";
import Search from "./search";
import "./Home.css"

const Home = () => {

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
        
    return (
        <div>

        
            <div class= "grid">
            <div class= "child">
            <img className= "drinks" src = {'../images/drinks.jpg'}/>
            <Link to = '/drinks'><button className= "drinksbtn">Drinks</button></Link>
            </div>

            <div class="column">
            <img className= "dairy" src = {'../images/dairy.jpg'}/>
            <Link to = '/dairy'><button className="dairybtn" >Dairy</button></Link>
            </div>

            <div class="column">
            <img className= "fruitveg" src = {'../images/fruitveg.jpg'}/>
            <Link to = '/fruitAndVeg'><button className="fruitvegbtn">Fruit and Vegetables</button></Link>
            </div>

            <div class="column">
            <img className= "frozen" src = {'../images/frozen.jpg'}/>
            <Link to = '/frozenFood'><button className="frozenbtn">Frozen Food</button></Link>
            </div>

            <div class="column">
            <img className= "meatfish" src = {'../images/meatfish.jpg'}/>
            <Link to = '/meatAndFish'><button className="meatfishbtn">Meat and Fish</button></Link>
            </div>

            <div class="column">
            <img className= "snacks"src = {'../images/snacks.jpg'}/>
            <Link to = '/snacks'><button className="snacksbtn">Snacks</button></Link>
            </div>

            </div>
            
           
            
            

            
        </div>
    )
}

export default Home