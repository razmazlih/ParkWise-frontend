import React, { useEffect, useState } from 'react';
import apiService from '../../services/api';
import ParkingArea from './ParkingArea';
import AddParkingArea from './AddParkingArea';
import '../styles/ParkingAreas/ParkingAreas.css';

function ParkingAreas() {
    const [allAreas, setAllAreas] = useState(() => {
        const cachedAreas = localStorage.getItem('parkingAreas');
        return cachedAreas ? JSON.parse(cachedAreas) : [];
    });

    useEffect(() => {
        if (allAreas.length === 0) {
            apiService
                .getParkingAreas()
                .then((data) => {
                    setAllAreas(data);
                    localStorage.setItem('parkingAreas', JSON.stringify(data));
                })
                .catch((error) => {
                    console.error('Failed to fetch parking areas:', error);
                });
        }
    }, [allAreas]);

    const addParkingArea = (newArea) => {
        const updatedAreas = [...allAreas, newArea];
        setAllAreas(updatedAreas);
        localStorage.setItem('parkingAreas', JSON.stringify(updatedAreas)); // עדכון ה-Cache
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
