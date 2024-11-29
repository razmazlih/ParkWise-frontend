import { useState } from 'react';
import apiService from '../../services/api';
import '../styles/ParkingSpots/ParkingSpot.css';

function ParkingSpot({ spot, fullPage }) {
    const [spotDetails, setSpotDetails] = useState({
        id: spot.id,
        place_position: spot.place_position,
        occupied: spot.occupied,
        accessible: spot.accessible,
        area: spot.area,
    });

    const toggleOccupied = async () => {
        const updatedDetails = {
            ...spotDetails,
            occupied: !spotDetails.occupied,
        };

        try {
            await apiService.updateParkingSpot(spot.id, updatedDetails);
            setSpotDetails(updatedDetails);
        } catch (error) {
            console.error('Error updating parking spot:', error);
        }
    };

    const handleDelete = () => {
        apiService
            .deleteParkingSpot(spotDetails.id)
            .then((response) => {
                setSpotDetails(null);
            })
            .catch((error) => console.log('Error', error));
    };

    return (
         spotDetails ? (
        <div className="parking-spot">
            <h3 className="spot-position">
                מספר חנייה: {spotDetails.place_position}
            </h3>
            <p className="spot-accessible">
                נגיש: {spotDetails.accessible ? 'כן' : 'לא'}
            </p>
            {fullPage ? (
                <>
                    <p className="spot-occupied">
                        תפוס: {spotDetails.occupied ? 'כן' : 'לא'}
                    </p>
                    <button className="toggle-button" onClick={toggleOccupied}>
                        {' '}
                        שנה{' '}
                    </button>
                </>
            ) : null}
            <button className="toggle-button" onClick={handleDelete}>
                {' '}
                מחק{' '}
            </button>
        </div>
    ): null);
}

export default ParkingSpot;
