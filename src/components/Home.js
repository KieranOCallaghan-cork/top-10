import React from 'react';
import { Card } from 'react-bootstrap';

const Home = () => {
    return (
        <Card className="text-white my-5" style={{ border: 'none' }}>
            <Card.Img
                src="../cup.jpg"
                alt="Football background"
                style={{ height: '400px', objectFit: 'cover' }}
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title as="h1" className="text-center">
                    Welcome to Premier League Top 10 Scorers
                </Card.Title>
                <Card.Text as="p" className="text-center">
                    Discover the top-performing players in the Premier League and explore their
                    achievements!
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Home;
