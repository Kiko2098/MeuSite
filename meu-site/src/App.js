import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import AppHeader from './AppHeader';
import AboutMe from './AboutMe';
import Projects from './Projects';
import MicroGreensV2 from './MicroGreensV2';
import MicroGreensV3 from './MicroGreensV3';
import PriceTracker from './PriceTracker';
import DryWallCalc from './DryWallCalc';
import PrivacyDryWallCalc from './PrivacyDryWallCalc';  
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main className="App-content">
          <Routes>
            <Route path="/" element={<AppHeader />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/projects/MicroGreensV2" element={<MicroGreensV2 />} />
            <Route path="/projects/MicroGreensV3" element={<MicroGreensV3 />} />
            <Route path="/projects/PriceTracker" element={<PriceTracker />} />
            <Route path="/projects/DryWallCalc" element={<DryWallCalc />} />
            <Route path="/privacy/DryWallCalc" element={<PrivacyDryWallCalc />} />  
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
