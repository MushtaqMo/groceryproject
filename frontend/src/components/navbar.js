import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div>
            <header>
                <div>
                    <button>
                    <Link to='/'> Home </Link>
                    </button>
                    <button>
                    <Link to='/cart'> Basket </Link>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar