import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ParkingAreas from "./ParkingAreas/ParkingAreas";
import ParkingSpots from "./ParkingSpots/ParkingSpots";
import Navbar from "./Navbar";

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/parking-areas" element={<ParkingAreas />} />
        <Route path="/parking-spots" element={<ParkingSpots />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;