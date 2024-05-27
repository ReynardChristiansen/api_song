require('dotenv').config()
const express = require('express')

const mongoose = require('mongoose')
const songRoutes = require('./routes/songs')
const cors = require('cors')

const app = express()


app.use(cors());
//middleware
app.use(express.json())


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/songs', songRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("connected to DB & listening on ", process.env.PORT);
    })
})
.catch((error)=>{
    console.log(error)
})





