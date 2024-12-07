const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    goals: { type: Number, required: true },
    matches: { type: Number, required: true },
    assists: { type: Number, default: 0 },
    team: { type: String, required: true },
    nationality: { type: String, required: true },
    imageUrl: { type: String },
});

module.exports = mongoose.model('Player', playerSchema);
