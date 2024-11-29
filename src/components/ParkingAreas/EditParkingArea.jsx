import { useState } from 'react';
import apiService from '../../services/api';

function EditParkingArea({ onEditParkingArea, oldArea }) {
    const [newName, setNewName] = useState('');
    const [newCity, setNewCity] = useState('');
    const [newAddress, setNewAddress] = useState('');

    const handleEdit = () => {
        const afterEdit = {
            name: newName ? newName : oldArea.name,
            city: newCity ? newCity : oldArea.city,
            address: newAddress ? newAddress : oldArea.address,
        };
        setNewName('');
        setNewCity('');
        setNewAddress('');
        apiService
            .updateParkingArea(oldArea.id, afterEdit)
            .then((response) => {
                onEditParkingArea(afterEdit);
            })
            .catch((error) => console.log('Error', error));
    };

    return (
        <details>
            <summary> ערוך </summary>
            <input
                type="text"
                placeholder="שם חדש"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
            />
            <input
                type="text"
                placeholder="עיר חדשה"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
            />
            <input
                type="text"
                placeholder="כתובת חדשה"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
            />
            <button onClick={handleEdit}> שמור </button>
        </details>
    );
}

export default EditParkingArea;
