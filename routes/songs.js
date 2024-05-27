    const express = require('express')
    const {createSong, getSongs, getSong, deleteSong, updateSong} = require('../controllers/SongController')
    const Song = require('../models/SongModel')
    const router = express.Router()

    //get all the song
    router.get('/', getSongs)

    router.get('/:id', getSong)
    
    router.post('/', createSong)
   

    router.delete('/:id', deleteSong)

    router.patch('/:id', updateSong)



    module.exports = router;