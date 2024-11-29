import React, { useEffect, useState } from 'react';
import apiService from '../../services/api';
import ParkingArea from './ParkingArea';
import AddParkingArea from './AddParkingArea';

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

    const addParkingArea = (newArea) => {
        setAllAreas([...allAreas, newArea]);
    };

    return (
        <div>
            <AddParkingArea onAddParkingArea={addParkingArea}/>
            {allAreas.length > 0 ? (
                allAreas.map((area) => (
                        <ParkingArea key={area.id} area={area} />
                ))
            ) : (
                <p> טוען איזורי חניה...</p>
            )}
        </div>
    );
}

export default ParkingAreas;
