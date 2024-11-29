import { Link } from 'react-router-dom';
import apiService from '../../services/api';
import { useState } from 'react';
import ParkingSpots from '../ParkingSpots/ParkingSpots';
import EditParkingArea from './EditParkingArea';

function ParkingArea({ area }) {
    const [parkingArea, setParkingArea] = useState(area);

    function handleDelete(areaId) {
        apiService
            .deleteParkingArea(areaId)
            .then((data) => {
                setParkingArea([]);
            })
            .catch((error) => console.log('Error', error));
    }

    const parkingSpotsList =
        parkingArea.length > 0 ? (
            <ul>
                {parkingArea.parking_spots.map((spot, index) => (
                    <li key={index}>{spot}</li>
                ))}
            </ul>
        ) : (
            <></>
        );

    function onEditParkingArea(editedArea) {
        setParkingArea((prevArea) => {
            return {
                ...prevArea,
                ...editedArea,
            };
        });
    }

    return parkingArea.id ? (
        <div key={parkingArea.id}>
            <h1>{parkingArea.name}</h1>
            <h2>
                {parkingArea.city} - {parkingArea.address}
            </h2>
            <Link to={`/parking-spots/${parkingArea.id}`}>
                צפה במקומות החניה
            </Link>
            <p> מספר מקומות חניה: {parkingArea.max_places}</p>
            <p> מקומות פנויים: {parkingArea.available_places}</p>
            <p>מקומות חניה נגישים פנויים: {parkingArea.available_accessible}</p>
            {parkingSpotsList}
            <p> אחוזי תפוסה: {parseFloat(parkingArea.occupancy_rate).toFixed(1)}%</p>            <ParkingSpots parmArea={area.id} />
            <EditParkingArea
                onEditParkingArea={onEditParkingArea}
                oldArea={parkingArea}
            />
            <button onClick={() => handleDelete(parkingArea.id)}>
                מחק איזור חניה
            </button>
        </div>
    ) : (
        <></>
    );
}

export default ParkingArea;
