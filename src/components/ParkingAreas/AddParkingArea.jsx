import { useState } from 'react';
import apiService from '../../services/api';
import '../styles/ParkingAreas/AddParkingArea.css';

function AddParkingArea({ onAddParkingArea }) {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const areaData = {
            name,
            city,
            address,
        };
        apiService
            .createParkingArea(areaData)
            .then((response) => onAddParkingArea(response))
            .catch((error) => console.log('Error', error));
    };

    return (
        <form className="add-parking-area-form" onSubmit={handleSubmit}>
            <input
                className="input-field"
                type="text"
                placeholder="שם המקום"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="input-field"
                type="text"
                placeholder="עיר"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <input
                className="input-field"
                type="text"
                placeholder="כתובת"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button className="submit-button" type="submit">
                הוסף איזור חניה
            </button>
        </form>
    );
}

export default AddParkingArea;
