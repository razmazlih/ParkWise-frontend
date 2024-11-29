import { useState } from 'react';
import apiService from '../../services/api';

function ParkingSpot({ spot }) {
    const [spotDetails, setSpotDetails] = useState({
        place_position: spot.place_position,
        occupied: spot.occupied,
        accessible: spot.accessible,
        area: spot.area
    });

    const toggleOccupied = async () => {
        const updatedDetails = {
            ...spotDetails,
            occupied: !spotDetails.occupied
        };

        try {
            await apiService.updateParkingSpot(spot.id, updatedDetails);
            setSpotDetails(updatedDetails);
        } catch (error) {
            console.error('Error updating parking spot:', error);
        }
    };

    return (
        <div>
            <h3>מיקום: {spotDetails.place_position}</h3>
            <p>תפוס: {spotDetails.occupied ? 'כן' : 'לא'}</p>
            <button onClick={toggleOccupied}> שנה </button>
            <p>נגיש: {spotDetails.accessible ? 'כן' : 'לא'}</p>
        </div>
    );
}

export default ParkingSpot;
