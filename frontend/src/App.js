import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import EditCart from "./api/editCartQuantity";
import AddToCart from "./api/addToCart";
import GetCart from "./api/getCart";
import ReadCart from "./api/readCart";
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