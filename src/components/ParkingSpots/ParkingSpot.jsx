function ParkingSpot({ spot }) {
    return (
        <div key={spot.id}>
            <h3>Position: {spot.place_position}</h3>
            <p>Occupied: {spot.occupied ? 'Yes' : 'No'}</p>
            <p>Accessible: {spot.accessible ? 'Yes' : 'No'}</p>
        </div>
    );
}

export default ParkingSpot;