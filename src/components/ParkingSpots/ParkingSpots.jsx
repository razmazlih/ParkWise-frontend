function ParkingSpots() {
    const parkingSpot = [{
        id: 1,
        place_position: "A1",
        occupied: false,
        accessible: true,
    }]
  return (
    <div>
            {parkingSpot.map(spot => (
                <div key={spot.id}>
                    <h3>Position: {spot.place_position}</h3>
                    <p>Occupied: {spot.occupied ? "Yes" : "No"}</p>
                    <p>Accessible: {spot.accessible ? "Yes" : "No"}</p>
                </div>
            ))}
        </div>
  )
}

export default ParkingSpots
