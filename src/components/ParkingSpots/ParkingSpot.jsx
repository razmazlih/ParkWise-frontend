function ParkingSpot({ spot }) {
    return (
        <div key={spot.id}>
            <h3>מיקום: {spot.place_position}</h3>
            <p>תפוס: {spot.occupied ? 'כן' : 'לא'}</p>
            <p>נגיש: {spot.accessible ? 'כן' : 'לא'}</p>
        </div>
    );
}

export default ParkingSpot;
