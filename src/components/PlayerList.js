import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/players').then((res) => {
            setPlayers(res.data);
        });
    }, []);

    return (
        <div>
            <h2>Top Scorers</h2>
            <ul>
                {players.map((player) => (
                    <li key={player._id}>
                        {player.name} - {player.goals} goals
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlayerList;
