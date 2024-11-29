import { Link } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
    return (
        <div>
            <ul>
                <Link to="/" className="parking-link">
                    <li>Home</li>
                </Link>
                <Link to="/parking-areas" className="parking-link">
                    <li>Free parking spots</li>
                </Link>
                <Link to="/parking-spots" className="parking-link">
                    <li>Parking spots</li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;
