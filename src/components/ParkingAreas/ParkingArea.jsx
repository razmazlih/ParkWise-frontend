import { Link } from 'react-router-dom';
import apiService from '../../services/api';
import { useEffect, useState } from 'react';
import ParkingSpots from '../ParkingSpots/ParkingSpots';
import EditParkingArea from './EditParkingArea';
import '../styles/ParkingAreas/ParkingArea.css';

function ParkingArea({ area }) {
    const [parkingArea, setParkingArea] = useState(area);

    useEffect(() => {
        setParkingArea(area);
    }, [area]);

    function handleDelete(areaId) {
        apiService
            .deleteParkingArea(areaId)
            .then(() => {
                setParkingArea([]);
                const allParkingAreas = JSON.parse(
                    localStorage.getItem('parkingAreas') || '[]'
                );
                const filterdParkingAreas = allParkingAreas.filter(
                    (oneparkingArea) => oneparkingArea.id !== areaId
                );
                localStorage.setItem(
                    'parkingAreas',
                    JSON.stringify(filterdParkingAreas)
                );
            })
            .catch((error) => console.log('Error', error));
    }

    return parkingArea.id ? (
        <div className="parking-area">
            <h1 className="area-title">{parkingArea.name}</h1>
            <h2 className="area-subtitle">
                {parkingArea.city} - {parkingArea.address}
            </h2>
            <Link to={`/parking-spots/${parkingArea.id}`} className="area-link">
                צפה בכל מקומות החניה
            </Link>
            <p className="area-info">
                מספר מקומות חניה: {parkingArea.max_places}
            </p>
            <p className="area-info">
                מקומות פנויים: {parkingArea.available_places}
            </p>
            <p className="area-info">
                מקומות חניה נגישים פנויים: {parkingArea.available_accessible}
            </p>
            <p className="area-info">
                אחוזי תפוסה: {parseFloat(parkingArea.occupancy_rate).toFixed(1)}
                %
            </p>
            <ParkingSpots parmArea={area.id} />
            <EditParkingArea
                onEditParkingArea={(editedArea) =>
                    setParkingArea((prevArea) => ({
                        ...prevArea,
                        ...editedArea,
                    }))
                }
                oldArea={parkingArea}
            />
            <button
                className="delete-button"
                onClick={() => handleDelete(parkingArea.id)}
            >
                מחק איזור חניה
            </button>
        </div>
    ) : null;
}

export default ParkingArea;
