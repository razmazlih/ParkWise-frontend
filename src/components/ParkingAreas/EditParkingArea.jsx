import { useState } from 'react';
import apiService from '../../services/api';
import '../styles/ParkingAreas/EditParkingArea.css';

function EditParkingArea({ onEditParkingArea, oldArea }) {
    const [newName, setNewName] = useState('');
    const [newCity, setNewCity] = useState('');
    const [newAddress, setNewAddress] = useState('');

    const handleEdit = () => {
        const afterEdit = {
            name: newName || oldArea.name,
            city: newCity || oldArea.city,
            address: newAddress || oldArea.address,
        };
        setNewName('');
        setNewCity('');
        setNewAddress('');
        apiService
            .updateParkingArea(oldArea.id, afterEdit)
            .then(() => onEditParkingArea(afterEdit))
            .catch((error) => console.log('Error', error));
    };

    return (
        <details className="edit-parking-area">
            <summary className="edit-summary">ערוך</summary>
            <input
                className="input-field"
                type="text"
                placeholder="שם חדש"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
            />
            <input
                className="input-field"
                type="text"
                placeholder="עיר חדשה"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
            />
            <input
                className="input-field"
                type="text"
                placeholder="כתובת חדשה"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
            />
            <button className="submit-button" onClick={handleEdit}>
                שמור
            </button>
        </details>
    );
}

export default EditParkingArea;
