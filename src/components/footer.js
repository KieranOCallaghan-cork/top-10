import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '10px', textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} Premier League Top 10 Scorers. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
