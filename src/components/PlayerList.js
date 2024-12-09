import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Form } from 'react-bootstrap';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:4000/api/players')
            .then((res) => {
                setPlayers(res.data);
            })
            .catch((err) => console.error('Error fetching players:', err));
    }, []);
    // The code above fetches the players from the API when the component mounts and stores them in the players state. This is also used for the search functionality.
    const filteredPlayers = players.filter((player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Top 10 Premier League Scorers</h2>

           
            <Form className="mb-4">
                <Form.Control
                    type="text"
                    placeholder="Search by player name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form>

          
            <Row>
                {filteredPlayers.length > 0 ? (
                    filteredPlayers.map((player) => (
                        <Col sm={12} md={6} lg={4} className="mb-4" key={player._id}>
                            <Card>
                            <Card.Img
                                    variant="top"
                                    src={player.imageUrl && player.imageUrl.trim() !== "" 
                                        ? player.imageUrl  
                                        : 'https://via.placeholder.com/150'}  
                                    alt={`${player.name}'s image`}
                                   
                                />
                                <Card.Body>
                                    <Card.Title>{player.name}</Card.Title>
                                    <Card.Text>
                                        <strong>Goals:</strong> {player.goals} <br />
                                        <strong>Team:</strong> {player.team} <br />

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col>
                        <p className="text-center">No players found.</p>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default PlayerList;
