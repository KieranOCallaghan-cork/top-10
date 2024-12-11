import React, { useState } from 'react';
import axios from 'axios';
import Navigation from './Navbar';

const AddPlayer = () => {
    const [name, setName] = useState('');
    const [goals, setGoals] = useState('');
    const [team, setTeam] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newPlayer = {
                name,
                goals: parseInt(goals),
                team,
                imageUrl,
            };

            await axios.post('http://localhost:4000/api/players', newPlayer);
            setMessage('Player added successfully!');
            setName('');
            setGoals('');
            setTeam('');
            setImageUrl('');
        } catch (error) {
            setMessage('Error adding player.');
            console.error(error);
        }
    };

    return (
        <>
            {/* Navigation Bar */}
            <Navigation />

            {/* Main Content */}
            <div
                style={{
                    maxWidth: '600px',
                    margin: '20px auto',
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9',
                }}
            >
                <h2>Add a New Player</h2>
                {message && (
                    <p style={{ color: message.includes('Error') ? 'red' : 'green' }}>
                        {message}
                    </p>
                )}
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="name">Player Name:</label><br />
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="goals">Goals Scored:</label><br />
                        <input
                            type="number"
                            id="goals"
                            value={goals}
                            onChange={(e) => setGoals(e.target.value)}
                            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="team">Team:</label><br />
                        <input
                            type="text"
                            id="team"
                            value={team}
                            onChange={(e) => setTeam(e.target.value)}
                            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label htmlFor="imageUrl">Player Image URL:</label><br />
                        <input
                            type="text"
                            id="imageUrl"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        Add Player
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddPlayer;
