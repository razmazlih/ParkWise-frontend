import React, { useEffect, useState } from 'react';
import apiService from '../../services/api';
import ParkingArea from './ParkingArea';
import AddParkingArea from './AddParkingArea';
import '../styles/ParkingAreas/ParkingAreas.css';

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
        <div className="parking-areas-container">
            <div className="add-area-section">
                <AddParkingArea onAddParkingArea={addParkingArea} />
            </div>
            <div className="areas-list">
                {allAreas.length > 0 ? (
                    allAreas.map((area) => (
                        <ParkingArea key={area.id} area={area} />
                    ))
                ) : (
                    <p className="loading-message">טוען איזורי חניה...</p>
                )}
            </div>
        </div>
    );
}

export default ParkingAreas;
