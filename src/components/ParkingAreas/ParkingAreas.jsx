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
                    <>
                        <ParkingArea key={area.id} area={area} />
                        <ParkingSpots parmArea={area.id} />
                    </>
                ))
            ) : (
                <p>Loading parking areas...</p>
            )}
        </div>
    );
}

export default ParkingAreas;
