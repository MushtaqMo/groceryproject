import { Link } from "react-router-dom"
import "/public/index.css";

const Navbar = () => {
    return (
        <div className="nav">
            <header>
                <div>
                    <Link to='../'> 
                    <button className="nav-button"> Home </button>
                    </Link>
                    <Link to='../Cart'> 
                    <button className="nav-button"> Basket </button>
                    </Link>
                    
                </div>
            </header>
        </div>
    )
}

export default Navbar