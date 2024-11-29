import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../services/api';
import ParkingSpot from './ParkingSpot';
import AddParkingSpot from './AddParkingSpot';

function ParkingSpots({ parmArea = null }) {
    const [parkingSpots, setParkingSpots] = useState([]);
    let { areaId } = useParams();

    areaId = areaId || parmArea;
    const useParmArea = areaId !== parmArea;

    useEffect(() => {
        apiService.getParkingSpotsByArea(areaId).then((allParkingSpots) => {
            setParkingSpots(allParkingSpots);
        });
    }, [areaId]);

    function onAddParkingSpot(newParkingSpot) {
        setParkingSpots([...parkingSpots, newParkingSpot])
    }

    const spotsDisplay = (
        <div>
            {parkingSpots.length > 0 ? (
                parkingSpots.map((spot) => (
                    <ParkingSpot key={spot.id} spot={spot} />
                ))
            ) : (
                <p> אין חניות פנויות. </p>
            )}
        </div>
    );

    return useParmArea ? (
        <div>
            <AddParkingSpot handleAddParkingSpot={onAddParkingSpot} />
            {spotsDisplay}
        </div>
    ) : (
        <div>
            <details>
                <summary> הצג חניות </summary>
                {spotsDisplay}
            </details>
        </div>
    );
}

export default ParkingSpots;
