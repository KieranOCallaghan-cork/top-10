import React from 'react';

const About = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', textAlign: 'center' }}>
            <h1>About the Premier League</h1>
            <p>
                The Premier League is the top tier of English football and one of the most popular sports leagues in the world. 
                Known for its competitive matches, world-class players, and passionate fans, it has become a global phenomenon 
                since its inception in 1992.
            </p>
            <p>
                Featuring 20 teams from across England, the Premier League showcases incredible talent, iconic stadiums, and 
                thrilling moments each season. From historic clubs like Manchester United and Liverpool to rising stars like Brighton & Hove Albion, 
                the league offers something for every football enthusiast.
            </p>
            <p>
                With its fast-paced style of play, dramatic rivalries, and unforgettable goals, the Premier League continues to captivate millions of fans 
                worldwide, making it the ultimate stage for football excellence.
            </p>
            <img 
                src="/about-image.jpg" 
                alt="Premier League" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px', marginTop: '20px' }}
            />
        </div>
    );
};

export default About;
