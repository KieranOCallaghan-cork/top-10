import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/players" element={<PlayerList />} />
                    <Route path="/add-player" element={<AddPlayer />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
