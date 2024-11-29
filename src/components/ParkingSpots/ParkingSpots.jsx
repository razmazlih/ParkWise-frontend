import { useEffect, useState } from 'react';
import apiService from '../../services/api';
import ParkingSpot from './ParkingSpot';

function ParkingSpots() {
    const [parkingSpots, setParkingSpots] = useState([]);

    useEffect(() => {
        apiService.getParkingSpots()
        .then(allParkingSpots => {
            setParkingSpots(allParkingSpots)
        })
    }, []);
    return (
        <div>
            {parkingSpots.length > 0 ? 
            (parkingSpots.map((spot) => (
                <ParkingSpot key={spot.id} spot={spot} />)
            ))
        : (
            <p>No parking spots available.</p>
        )}
        </div>
    );
}

export default ParkingSpots;
