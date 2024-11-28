function ParkingAreas() {
    const allAreas = [
        {
            id: 1,
            city: 'Gan Yavne',
            address: 'Magadim 3',
            max_places: 2,
            available_places: 0,
            available_accessible: 1,
            parking_spots: [
                'A1 - occupied: False, accessible: True',
                'A2 - occupied: True, accessible: False',
            ],
            occupancy_rate: 50.0,
        },
    ];

    return (
        <div>
            {allAreas.map((area) => (
                <div key={area.id}>
                    <h2>
                        {area.city} - {area.address}
                    </h2>
                    <p>Maximum Places: {area.max_places}</p>
                    <p>Available Places: {area.available_places}</p>
                    <p>
                        Accessible Places Available: {area.available_accessible}
                    </p>
                    <ul>
                        {area.parking_spots.map((p, index) => (
                            <li key={index}>{p}</li>
                        ))}
                    </ul>
                    <p>Occupancy Rate: {area.occupancy_rate}%</p>
                </div>
            ))}
        </div>
    );
}

export default ParkingAreas;
