import EditCart from "./api/editCartQuantity";
import AddToCart from "./api/addToCart";
import GetCart from "./api/getCart";
import ReadCart from "./api/readCart";
import { Route } from "react-router";

const Cart = () => {
    return (
        <div>
            <BrowserRouter>
            <h1>Basket</h1>
        <Navbar />
        <Routes>
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
    )}

    export default Cart;