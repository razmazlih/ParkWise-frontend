import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../../services/api';
import ParkingSpot from './ParkingSpot';
import AddParkingSpot from './AddParkingSpot';
import '../styles/ParkingSpots/ParkingSpots.css';

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
        setParkingSpots([...parkingSpots, newParkingSpot]);
    }

    const filteredSpots = useMemo(() => {
        return !useParmArea ? parkingSpots.filter((spot) => !spot.occupied) : parkingSpots;
    }, [parkingSpots, useParmArea]);

    const spotsDisplay = (
        <div className="spots-container">
            {filteredSpots.length > 0 ? (
                filteredSpots.map((spot) => (
                    <ParkingSpot key={spot.id} spot={spot} fullPage={useParmArea} />
                ))
            ) : (
                <p className="no-spots-message">אין חניות פנויות.</p>
            )}
        </div>
    );

    return useParmArea ? (
        <div className="parking-spots">
            <AddParkingSpot handleAddParkingSpot={onAddParkingSpot} />
            {spotsDisplay}
        </div>
    ) : (
        <div className="parking-spots">
            <details className="spots-details">
                <summary className="details-summary">הצג חניות פנויות</summary>
                {spotsDisplay}
            </details>
        </div>
    );
}

export default ParkingSpots;
