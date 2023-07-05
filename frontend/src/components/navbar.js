import { Link } from "react-router-dom"
import "./nav.css"

const Navbar = () => {
    return (
        <div className="nav">
            <header>
                <div>
                    <Link to='/'> 
                    <button className="nav-button"> Home </button>
                    </Link>
                    <Link to='/cart'> 
                    <button className="nav-button"> Basket </button>
                    </Link>
                    <Link to='/search'> 
                    <button className="nav-button"> Search </button>
                    </Link>
                    
                </div>
            </header>
        </div>
    )
}

export default Navbar