
# ParkWise Frontend

The frontend for ParkWise, a parking management system, built with React and styled using CSS.

## Features
- Display parking spots by area.
- Add new parking spots dynamically.
- Filter for available (unoccupied) parking spots.
- Cache parking spots data using localStorage for faster load times.

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/razmazlih/ParkWise-frontend.git
    cd ParkWise-frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

The app will be available at `http://localhost:3000`.

## File Structure
```
frontend/
├── src/
│   ├── components/
│   │   ├── ParkingSpots/
│   │   │   ├── ParkingSpots.jsx
│   │   │   ├── ParkingSpot.jsx
│   │   │   ├── AddParkingSpot.jsx
│   │   │   └── ParkingSpots.css
│   │   └── ...
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── public/
│   └── index.html
└── package.json
```

## Usage
### Viewing Parking Spots
The component `ParkingSpots` fetches parking spots for a specific area and displays them.

#### Props
- `parmArea` (optional): Default area ID if not specified in the URL.

### Adding Parking Spots
The `AddParkingSpot` component allows users to add a new parking spot. The newly added spot is dynamically appended to the list.

### LocalStorage
Parking spots are cached in `localStorage` using the key `parkingSpots-{areaId}` for offline access and performance.

## API Integration
The frontend communicates with a backend API via `apiService` (located in `src/services/api.js`). 

#### Example API Methods:
- `getParkingSpotsByArea(areaId)` - Fetches parking spots for a specific area.

## Styling
Styles are written in CSS and scoped to individual components (e.g., `ParkingSpots.css`).

## Contributing
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature-name"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

## License
This project is licensed under the MIT License.

---

### Future Enhancements
- Add real-time updates using WebSockets.
- Implement user authentication.
- Optimize performance for larger datasets.
