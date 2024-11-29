import { Link } from 'react-router-dom';

function ParkingArea({ area }) {
    return (
        <div key={area.id}>
            <h2>{area.city} - {area.address}</h2>
            <Link to={`/parking-spots/${area.id}`}>View Parking Spots</Link>
            <p>Maximum Places: {area.max_places}</p>
            <p>Available Places: {area.available_places}</p>
            <p>Accessible Places Available: {area.available_accessible}</p>
            <ul>
                {area.parking_spots.map((spot, index) => (
                    <li key={index}>{spot}</li>
                ))}
            </ul>
            <p>Occupancy Rate: {area.occupancy_rate}%</p>
        </div>
    );
}

export default ParkingArea;