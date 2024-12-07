import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Card className="text-white my-5" style={{ border: 'none' }}>
           
            <Card.Img
                src="/cup.jpg" 
                alt="Football background"
                style={{
                    height: '100vh', 
                    objectFit: 'cover', 
                }}
            />
            <Card.ImgOverlay
                className="d-flex flex-column justify-content-center align-items-center"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                    height: '100vh', 
                }}
            >
                <Card.Title as="h1" className="text-center text-light" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                    Welcome to Premier League Top 10 Scorers
                </Card.Title>
                <Card.Text as="p" className="text-center text-light" style={{ fontSize: '1.25rem' }}>
                    Discover the top-performing players in the Premier League!
                </Card.Text>
                <Button
                    variant="light"
                    size="lg"
                    className="mt-4"
                    href="/players" 
                    style={{ fontSize: '1.2rem' }}
                >
                    View Top Scorers
                </Button>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Home;
