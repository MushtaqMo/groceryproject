import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            <header>
                <div>
                    <button>
                    <Link to='../Home'> Home </Link>
                    </button>
                    <button>
                    <Link to='../Basket'> Basket </Link>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar