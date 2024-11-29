import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">
                        דף הבית
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/parking-areas" className="navbar-link">
                        איזורי חניה
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
