import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
// import editCart from "./api/editCartQuantity";
// import addToCart from "./api/addToCart";
// import getCart from "./api/getCart";
// import readCart from "./api/readCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowMeatAndFish from "./pages/meatAndFish";
import ShowDairy from "./pages/dairy"
import ShowDrinks from "./pages/drinks"
import ShowFruitAndVeg from "./pages/fruitAndVeg"
import ShowSnacks from "./pages/snacks"


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
            {/* <Route 
                path='/addToCart'
                element={<addToCart/>}
            />
            <Route 
                path='editCartQuantity/:id'
                element={<editCart/>}
            />
            <Route 
                path='/getCart'
                element={<getCart/>}
            />
            <Route 
                path='/readCart'
                element={<readCart/>}
            /> */}
            <Route 
            path='/drinks'
            element={<ShowDrinks/>}/>

            <Route 
            path='/snacks'
            element={<ShowSnacks/>}/>

            <Route 
            path='/dairy'
            element={<ShowDairy/>}/>

            <Route 
            path='/frozenFood'
            element={<GetFrozenFood/>}/>

            <Route 
            path='/fruitAndVeg'
            element={<ShowFruitAndVeg/>}/>

            <Route 
            path='/meatAndFish'
            element={<ShowMeatAndFish/>}/>
        </Routes>
        </BrowserRouter>
        </div>

    )
}

export default App