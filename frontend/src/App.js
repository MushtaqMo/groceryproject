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
            />                   
        </Routes>
        </BrowserRouter>
        </div>

    )
}

export default App