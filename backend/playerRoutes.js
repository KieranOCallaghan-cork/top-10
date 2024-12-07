const express = require('express');
const Player = require('../models/player');
const router = express.Router();

// Get all players
router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get a single player by ID
router.get('/:id', async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        res.json(player);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Add a new player
router.post('/', async (req, res) => {
    try {
        const { name, goals, matches, assists, team, nationality, imageUrl } = req.body;
        const newPlayer = new Player({ name, goals, matches, assists, team, nationality, imageUrl });
        await newPlayer.save();
        res.json(newPlayer);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Update a player
router.put('/:id', async (req, res) => {
    try {
        const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPlayer);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Delete a player
router.delete('/:id', async (req, res) => {
    try {
        await Player.findByIdAndDelete(req.params.id);
        res.json({ message: 'Player deleted' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
