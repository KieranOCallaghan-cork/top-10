import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import Navigation from './Navbar';

const Home = () => {
    return (
        <>
            {/* Navigation Bar */}
            <Navigation />

            {/* Main Content */}
            <Card className="text-white" style={{ border: 'none' }}>
                {/* Background Image */}
                <Card.Img
                    src="/cup.jpg"
                    alt="Football background"
                    style={{
                        height: '100vh',
                        objectFit: 'cover',
                        position: 'relative',
                        zIndex: '-1',
                    }}
                />
                <Card.ImgOverlay
                    className="d-flex flex-column justify-content-center align-items-center"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
                        height: '100vh',
                    }}
                >
                    {/* Page Title */}
                    <Container className="text-center">
                        <Card.Title
                            as="h1"
                            className="text-light"
                            style={{
                                fontSize: '4rem',
                                fontWeight: 'bold',
                                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
                            }}
                        >
                            Welcome to Premier League Top 10 Scorers
                        </Card.Title>
                        <Card.Text
                            as="p"
                            className="text-light mt-3"
                            style={{
                                fontSize: '1.5rem',
                                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
                            }}
                        >
                            Discover the top-performing players in the Premier League! Track their
                            achievements and explore their stories.
                        </Card.Text>
                        {/* Call-to-Action Button */}
                        <Button
                            variant="light"
                            size="lg"
                            className="mt-4 px-5 py-3"
                            href="/players"
                            style={{
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                            }}
                        >
                            View Top Scorers
                        </Button>
                    </Container>
                </Card.ImgOverlay>
            </Card>
        </>
    );
};

export default Home;
