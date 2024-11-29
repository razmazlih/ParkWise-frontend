import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../services/api';
import ParkingSpot from './ParkingSpot';

function ParkingSpots() {
    const [parkingSpots, setParkingSpots] = useState([]);
    const { areaId } = useParams();

    useEffect(() => {
        apiService.getParkingSpotsByArea(areaId)
        .then(allParkingSpots => {
            setParkingSpots(allParkingSpots)
        })
    }, [areaId]);
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
