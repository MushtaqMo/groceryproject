import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import ShowDairy from "./pages/dairy"
import ShowDrinks from "./pages/drinks"
import ShowFrozenFood from "./pages/frozenFood"
import ShowSnacks from "./pages/snacks"
import ShowMeatAndFish from "./pages/meatAndFish";
import ShowFruitAndVeg from "./pages/fruitAndVeg";
import Cart from "./pages/cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
    return (
        <div>
            <BrowserRouter>
            <h1>hello world</h1>
        <Navbar />
        <Routes>
            <Route
                path='/'
                element={<Home />}
            />   
            <Route 
                path='/dairy'
                element={<ShowDairy/>}
            /> 
            <Route 
                path='/drinks'
                element={<ShowDrinks/>}
            />   
            <Route 
                path='/frozenFood'
                element={<ShowFrozenFood/>}
            />    
            <Route 
                path='/snacks'
                element={<ShowSnacks/>}
            />   
            <Route 
                path='/meatAndFish'
                element={<ShowMeatAndFish/>}
            /> 
            <Route 
                path='/cart'
                element={<Cart/>}
            />    
            <Route 
                path='/fruitAndVeg'
                element={<ShowFruitAndVeg/>}
            />                     
        </Routes>
        </BrowserRouter>
        </div>

    )
}

export default App