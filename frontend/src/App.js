import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import editCart from "./api/editCartQuantity";
import addToCart from "./api/addToCart";
import getCart from "./api/getCart";
import readCart from "./api/readCart";
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
                path='/addToCart'
                element={<AddToCart/>}
            />
            <Route 
                path='editCartQuantity/:id'
                element={<EditCart/>}
            />
            <Route 
                path='/getCart'
                element={<GetCart/>}
            />
            <Route 
                path='/readCart'
                element={<ReadCart/>}
            />
        </Routes>
        </BrowserRouter>
        </div>

    )
}

export default App