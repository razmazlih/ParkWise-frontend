import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../services/api';
import ParkingSpot from './ParkingSpot';

function ParkingSpots({ parmArea = null }) {
    const [parkingSpots, setParkingSpots] = useState([]);
    let { areaId } = useParams();

    areaId = areaId || parmArea;

    useEffect(() => {
        apiService.getParkingSpotsByArea(areaId).then((allParkingSpots) => {
            setParkingSpots(allParkingSpots);
        });
    }, [areaId]);

    const spotsDisplay = (
        <div>
            {parkingSpots.length > 0 ? (
                parkingSpots.map((spot) => (
                    <ParkingSpot key={spot.id} spot={spot} />
                ))
            ) : (
                <p>No parking spots available.</p>
            )}
        </div>
    );

    return areaId !== parmArea ? (
        spotsDisplay
    ) : (
        <div>
            <details>
                <summary>Show spots</summary>
                {spotsDisplay}
            </details>
        </div>
    );
}

export default ParkingSpots;
