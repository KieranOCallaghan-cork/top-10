import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import Navigation from './Navbar';
import Footer from './footer';

// PlayerList component 
const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPlayer, setSelectedPlayer] = useState(null); // Player to update
    const [updatedGoals, setUpdatedGoals] = useState(''); 
    const [showModal, setShowModal] = useState(false);

    // Fetch players from the API
    useEffect(() => {
        fetchPlayers();
    }, []);

    const fetchPlayers = () => {
        axios
            .get('http://localhost:4000/api/players')
            .then((res) => {
                setPlayers(res.data);
            })
            .catch((err) => console.error('Error fetching players:', err));
    };

    // Handle update player goals
    const handleUpdateGoals = (player) => {
        setSelectedPlayer(player);
        setUpdatedGoals(player.goals); 
        setShowModal(true);
    };

    // Submit updated goals
    const submitUpdate = () => {
        if (selectedPlayer && updatedGoals !== '') {
            axios
                .put(`http://localhost:4000/api/players/${selectedPlayer._id}`, {
                    ...selectedPlayer,
                    goals: updatedGoals,
                })
                .then(() => {
                    setShowModal(false);
                    fetchPlayers(); // Refresh players list
                })
                .catch((err) => console.error('Error updating player:', err));
        }
    };

    // Handle delete player
    const handleDeletePlayer = (playerId) => {
        if (window.confirm('Are you sure you want to delete this player?')) {
            axios
                .delete(`http://localhost:4000/api/players/${playerId}`)
                .then(() => {
                    fetchPlayers(); // Refresh players list
                })
                .catch((err) => console.error('Error deleting player:', err));
        }
    };

    // Filter players based on search term
    const filteredPlayers = players.filter((player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* Navigation Bar */}
            <Navigation />

            {/* Main Content */}
            <Container className="mt-5">
                <h2 className="text-center mb-4">Top Premier League Scorers</h2>

                {/* Search Form */}
                <Form className="mb-4">
                    <Form.Control
                        type="text"
                        placeholder="Search by player name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Form>

                {/* Display the list of players */}
                <Row>
                    {filteredPlayers.length > 0 ? (
                        filteredPlayers.map((player) => (
                            <Col sm={12} md={6} lg={4} className="mb-4" key={player._id}>
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src={
                                            player.imageUrl && player.imageUrl.trim() !== ''
                                                ? player.imageUrl
                                                : 'https://via.placeholder.com/150'
                                        }
                                        alt={`${player.name}'s image`}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <Card.Body>
                                        <Card.Title>{player.name}</Card.Title>
                                        <Card.Text>
                                            <strong>Goals:</strong> {player.goals} <br />
                                            <strong>Team:</strong> {player.team} <br />
                                        </Card.Text>
                                        <Button
                                            variant="primary"
                                            className="me-2"
                                            onClick={() => handleUpdateGoals(player)}
                                        >
                                            Update Goals
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleDeletePlayer(player._id)}
                                        >
                                            Delete
                                        </Button>
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

                {/* Update Goals Modal */}
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Goals</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Goals</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={updatedGoals}
                                    onChange={(e) => setUpdatedGoals(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={submitUpdate}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
            
            <Footer />  
        </>
       
    );
};

export default PlayerList;
