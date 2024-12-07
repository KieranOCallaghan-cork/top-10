import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddPlayer = () => {
    const [name, setName] = useState('');
    const [goals, setGoals] = useState('');
    const [team, setTeam] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [message, setMessage] = useState('');
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState('');

    // Fetch players
    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/players');
                const sortedPlayers = response.data.sort((a, b) => b.goals - a.goals);
                setPlayers(sortedPlayers);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };
        fetchPlayers();
    }, []);

    // Add player
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
            const response = await axios.get('http://localhost:4000/api/players');
            setPlayers(response.data.sort((a, b) => b.goals - a.goals));
        } catch (error) {
            setMessage('Error adding player.');
            console.error(error);
        }
    };

    // Delete player
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/players/${id}`);
            setMessage('Player deleted successfully!');
            setPlayers(players.filter((player) => player._id !== id));
        } catch (error) {
            setMessage('Error deleting player.');
            console.error(error);
        }
    };

    // Update goals
    const handleUpdateGoals = async () => {
        if (!selectedPlayer || !goals) {
            setMessage('Please select a player and enter a valid number of goals.');
            return;
        }
        try {
            const updatedPlayer = await axios.put(
                `http://localhost:4000/api/players/${selectedPlayer}`,
                { goals: parseInt(goals) }
            );
            setMessage('Player goals updated successfully!');
            setPlayers(players.map((player) =>
                player._id === updatedPlayer.data._id
                    ? updatedPlayer.data
                    : player
            ));
            setSelectedPlayer('');
            setGoals('');
        } catch (error) {
            setMessage('Error updating player goals.');
            console.error(error);
        }
    };

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h2>Add a New Player</h2>
            {message && <p style={{ color: message.includes('Error') ? 'red' : 'green' }}>{message}</p>}
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
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Add Player
                </button>
            </form>

            <h3 style={{ marginTop: '40px' }}>Player Rankings (Most Goals)</h3>
            <div style={{ marginTop: '10px' }}>
                <label>Select Player:</label><br />
                <select
                    value={selectedPlayer}
                    onChange={(e) => setSelectedPlayer(e.target.value)}
                    style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                >
                    <option value="">-- Select a Player --</option>
                    {players.map((player) => (
                        <option key={player._id} value={player._id}>
                            {player.name} ({player.goals} goals)
                        </option>
                    ))}
                </select>
                <button
                    onClick={handleUpdateGoals}
                    style={{
                        marginRight: '10px',
                        padding: '10px 20px',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Update Goals
                </button>
                <button
                    onClick={() => handleDelete(selectedPlayer)}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#dc3545',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Delete Player
                </button>
            </div>
        </div>
    );
};

export default AddPlayer;
