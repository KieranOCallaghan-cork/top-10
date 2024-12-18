// Code for the server
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create the express app
const app = express();
const PORT = 4000;

//  Add middleware for handling CORS requests from axios
app.use(cors());
app.use(bodyParser.json());


// Connect to MongoDB
const MONGO_URI = 'mongodb+srv://admin:admin@kieranscluster.zfxym.mongodb.net/';
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Define the player schema
const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    goals: { type: Number, required: true },
    team: { type: String, required: true },
    imageUrl: { type: String, required: true },
});


const Player = mongoose.model('Player', playerSchema);

// Routes for handling player data in the database
app.get('/api/players', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching players', error: err });
    }
});

// Add a new player to the database
app.post('/api/players', async (req, res) => {
    try {
        const { name, goals, team, imageUrl } = req.body;
        const newPlayer = new Player({
            name,
            goals,
            team,
            imageUrl,
        });
        await newPlayer.save();
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(500).json({ message: 'Error adding player', error: err });
    }
});


// Update player data in the database
app.put('/api/players/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, goals, team, imageUrl} = req.body;
        const updatedPlayer = await Player.findByIdAndUpdate(
            id,
            { name, goals, team, imageUrl},
            { new: true }
        );
        res.json(updatedPlayer);
    } catch (err) {
        res.status(500).json({ message: 'Error updating player', error: err });
    }
});


// Delete a player from the database
app.delete('/api/players/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Player.findByIdAndDelete(id);
        res.json({ message: 'Player deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting player', error: err });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
