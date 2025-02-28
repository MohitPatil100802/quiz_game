const express = require("express");
const Leaderboard = require("../models/Leaderboard");
const router = express.Router();

// Save player's score
router.post("/", async (req, res) => {
    try {
        const { name, score } = req.body;
        const newEntry = new Leaderboard({ name, score });
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(500).json({ error: "Error saving score" });
    }
});

// Get leaderboard
router.get("/", async (req, res) => {
    try {
        const leaderboard = await Leaderboard.find().sort({ score: -1 }).limit(10);
        res.status(200).json(leaderboard);
    } catch (error) {
        res.status(500).json({ error: "Error fetching leaderboard" });
    }
});

module.exports = router;
