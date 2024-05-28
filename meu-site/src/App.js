import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import AppHeader from './AppHeader';
import AboutMe from './AboutMe';
import Projects from './Projects';
import MicroGreens from './MicroGreens';
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
            <Route path="/projects/MicroGreens" element={<MicroGreens />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
