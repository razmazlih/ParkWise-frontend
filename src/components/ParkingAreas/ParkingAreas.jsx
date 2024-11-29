import { useEffect, useState } from 'react';
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
        apiService
            .getParkingAreas()
            .then((data) => {
                localStorage.setItem('parkingAreas', JSON.stringify(data));
                setAllAreas(data);
            })
            .catch((error) => {
                console.error('Failed to fetch parking areas:', error);
            });
    }, []);

    const addParkingArea = (newArea) => {
        const updatedAreas = [...allAreas, newArea];
        setAllAreas(updatedAreas);
        localStorage.setItem('parkingAreas', JSON.stringify(updatedAreas));
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
