import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';

const App = () => {
    return (
        <Router>
            <div>
                <nav style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff' }}>
                    <a href="/" style={{ marginRight: '15px', color: '#fff', textDecoration: 'none' }}>Home</a>
                    <a href="/players" style={{ marginRight: '15px', color: '#fff', textDecoration: 'none' }}>Players</a>
                    <a href="/add-player" style={{ color: '#fff', textDecoration: 'none' }}>Add Player</a>
                </nav>
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
