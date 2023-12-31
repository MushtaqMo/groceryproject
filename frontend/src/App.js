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
import Search from "./pages/search"
import ChooseDelivery from "./pages/checkout";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
    return (
        <div>
            <BrowserRouter>
        <Navbar />
        <h1>TGC Groceries</h1>
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
            <Route 
                path='/search'
                element={<Search/>}
            />        
            <Route 
                path='/checkout'
                element={<ChooseDelivery/>}
            />                 
        </Routes>
        </BrowserRouter>
        </div>

    )
}

export default App