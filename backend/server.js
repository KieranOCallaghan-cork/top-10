const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const MONGO_URI = 'mongodb+srv://admin:admin@kieranscluster.zfxym.mongodb.net/';
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Define Mongoose Schema and Model for Players
const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    goals: { type: Number, required: true },
    team: { type: String, required: true },
});

const Player = mongoose.model('Player', playerSchema);

// Routes
// 1. Get all players
app.get('/api/players', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching players', error: err });
    }
});

// 2. Add a new player
app.post('/api/players', async (req, res) => {
    try {
        const { name, goals, team } = req.body;
        const newPlayer = new Player({ name, goals, team });
        await newPlayer.save();
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(500).json({ message: 'Error adding player', error: err });
    }
});

// 3. Update a player
app.put('/api/players/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, goals, team } = req.body;
        const updatedPlayer = await Player.findByIdAndUpdate(
            id,
            { name, goals, team },
            { new: true }
        );
        res.json(updatedPlayer);
    } catch (err) {
        res.status(500).json({ message: 'Error updating player', error: err });
    }
});

// 4. Delete a player
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
