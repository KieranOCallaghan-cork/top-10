import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PlayerList from './components/PlayerList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/players" element={<PlayerList />} />
            </Routes>
        </Router>
    );
};

export default App;
