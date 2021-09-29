const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')

//configure dotenv
env.config()

//create express app
const app = express()

//setup database connection
mongoose.connect(process.env.MONGO_URL, {  
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Database connected successfully')
}).catch(err =>{
    console.log(err)
})

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use('api/auth', authRoute)
app.use('api/users', userRoute)
app.use('api/posts', postRoute)

// setup port number
const port = process.env.port || 5000

//create server to listen for requests
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})