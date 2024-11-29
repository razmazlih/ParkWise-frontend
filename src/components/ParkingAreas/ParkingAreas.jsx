import React, { useEffect, useState } from 'react';
import apiService from '../../services/api';
import ParkingArea from './ParkingArea';
import ParkingSpots from '../ParkingSpots/ParkingSpots';

function ParkingAreas() {
    const [allAreas, setAllAreas] = useState([]);

    useEffect(() => {
        apiService
            .getParkingAreas()
            .then((data) => {
                setAllAreas(data);
            })
            .catch((error) => {
                console.error('Failed to fetch parking areas:', error);
            });
    }, []);

    return (
        <div>
            {allAreas.length > 0 ? (
                allAreas.map((area) => (
                    <div key={area.id}>
                        <ParkingArea area={area} />
                        <ParkingSpots parmArea={area.id} />
                    </div>
                ))
            ) : (
                <p>Loading parking areas...</p>
            )}
        </div>
    );
}

export default ParkingAreas;
