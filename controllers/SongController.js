const Song = require('../models/SongModel')
const mongoose = require('mongoose')

// Get all songs
const getSongs = async (req, res) => {
    const songs = await Song.find({}).sort({ createdAt: -1 })
    res.status(200).json(songs)
}

// Get a single song
const getSong = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Such Song" })
    }

    const song = await Song.findById(id)

    if (!song) {
        return res.status(404).json({ error: "No Such Song" })
    }

    res.status(200).json(song)
}

// Create a new song
const createSong = async (req, res) => {
    const { song_id, song_name, song_url, song_image } = req.body

    try {
        const song = await Song.create({ song_id, song_name, song_url, song_image })
        res.status(200).json(song)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Delete a song
const deleteSong = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Such Song" })
    }

    const song = await Song.findOneAndDelete({ _id: id })

    if (!song) {
        return res.status(404).json({ error: "No Such Song" })
    }

    res.status(200).json(song)
}

// Update a song
const updateSong = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Such Song" })
    }

    const song = await Song.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })

    if (!song) {
        return res.status(404).json({ error: "No Such Song" })
    }

    res.status(200).json(song)
}

module.exports = {
    createSong,
    getSongs,
    getSong,
    deleteSong,
    updateSong
}
