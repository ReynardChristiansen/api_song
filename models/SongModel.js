const mongoose = require('mongoose')

const Schema = mongoose.Schema

const songSchema = new Schema({
    song_id : {
        type : String,
        required: true
    },
    song_name: {
        type: String,
        required: true
    },
    song_url: {
        type: String,
        required: true
    },
    song_image: {
        type: String,
        required: true
    }
}, {timestamps: true})


module.exports = mongoose.model('Song', songSchema)

 