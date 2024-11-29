import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
    return (
        <div>
            <ul>
                <Link to="/" className="parking-link">
                    <li> דף הבית </li>
                </Link>
                <Link to="/parking-areas" className="parking-link">
                    <li> איזורי חניה </li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;
