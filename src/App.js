import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PlayerList from './components/PlayerList';
import Navbar from './components/Navbar'; // Optional: If you have a Navbar

const App = () => {
    return (
        <><Router>
        <div>
          <Navbar /> {/* Optional: Include navigation at the top */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<PlayerList />} />
          </Routes>
        </div>
      </Router>
      <Home /></>
    );
    
};

export default App;
