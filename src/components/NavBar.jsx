import { Link } from "react-router-dom";
import '../css/Navbar.css';
import { useMovieContext } from "../contexts/MovieContexts";

function NavBar() {
    const { favorites, clearFavorites } = useMovieContext();
    
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/"> Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/Favorite" className="nav-link">Favorites</Link>
            {(favorites) ? <Link to="/Favorite" onClick={clearFavorites} className="nav-link">Clear Favorites</Link> : ""}
        </div>
    </nav>
}
export default NavBar;
