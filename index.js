const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');

//configure dotenv
env.config()

//create express app
const app = express()

//app configuration
app.use(express.json())

//setup database connection
mongoose.connect(process.env.MONGO_URL, {  
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Database connected successfully')
}).catch(err =>{
    console.log(err)
})

// setup port number
const port = process.env.port || 5000

//create server to listen for requests
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})