import Navbar from "./components/navbar"
import { addToCart } from "./api/addToCart"
import { deleteFromCart } from "./api/deleteFromCart"
import { editCart } from "./api/editCartQuantity"
import { getCart } from "./api/getCart"
import { readCart } from "./api/readCart"

const App = () => {
    return (
        <div>
            <browserRouter>
            <h1>hello world</h1>
        <Navbar />
        <Routes>
            <Route
                path='/'
                element={<Home />}
            />
            <Route 
                path='./api/addToCart'
                element={<addToCart/>}
            />
            <Route 
                path='/:id'
                element={<editCartQuantity/>}
            />
            <Route 
                path='./api/getCart'
                element={<getCart/>}
            />
            <Route 
                path='./api/readCart'
                element={<readCart/>}
            />
        </Routes>
        </browserRouter>
        </div>

    )
}

export default App