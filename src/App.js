import Navbar from './components/Navbar';
import ParkingAreas from './components/ParkingAreas/ParkingAreas';
import ParkingSpots from './components/ParkingSpots/ParkingSpots';

function App() {
    return (
        <div className="App">
            <Navbar />
            <ParkingAreas />
            <ParkingSpots />
        </div>
    );
}

export default App;
