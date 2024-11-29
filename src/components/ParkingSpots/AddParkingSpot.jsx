import { useParams } from 'react-router-dom';
import apiService from '../../services/api';
import { useState } from 'react';

function AddParkingSpot({ handleAddParkingSpot }) {
    const [parkNumber, setParkNumber] = useState('');
    const [isOccupied, setIsOccupied] = useState(false);
    const [isAccessible, setIsAccessible] = useState(false);
    const { areaId } = useParams();

    function handleSubmit() {
        const newParkingSpot = {
            place_position: parkNumber,
            occupied: isOccupied,
            accessible: isAccessible,
            area: areaId,
        };
        apiService
            .createParkingSpot(newParkingSpot)
            .then((response) => {
                handleAddParkingSpot(response);
            })
            .catch((error) => console.log('Error', error));
    }

    return (
        <div>
            <input
                type="text"
                placeholder="מספר חניה"
                value={parkNumber}
                onChange={(e) => setParkNumber(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={isAccessible}
                    onChange={() => setIsAccessible(!isAccessible)}
                />{' '}
                נגיש לנכים
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={isOccupied}
                    onChange={() => setIsOccupied(!isOccupied)}
                />{' '}
                חניה תפוסה
            </label>
            <button onClick={handleSubmit}> הוסף חניה </button>
        </div>
    );
}

export default AddParkingSpot;
