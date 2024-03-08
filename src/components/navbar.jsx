import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}