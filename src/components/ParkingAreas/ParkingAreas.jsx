import React, { useEffect, useState } from 'react';
import apiService from '../../services/api';

function ParkingAreas() {
    const [allAreas, setAllAreas] = useState([]);

    useEffect(() => {
        apiService.getParkingAreas().then(data => {            
            setAllAreas(data);
        }).catch(error => {
            console.error('Failed to fetch parking areas:', error);
        });
    }, []);

    return (
        <div>
            {allAreas.length > 0 ? (
                allAreas.map((area) => (
                    <div key={area.id}>
                        <h2>{area.city} - {area.address}</h2>
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
                ))
            ) : (
                <p>Loading parking areas...</p>
            )}
        </div>
    );
}

export default ParkingAreas;