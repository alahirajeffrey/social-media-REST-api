const router = require('express').Router()
const User = require('../models/users')
const bcrypt = require('bcrypt')

//Register user
router.post('/register', async (req, res)=>{

    try{
        //generate hashed pasword
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        //create a new user
        const newUser = new User({
            username = req.body.username,
            email = req.body.email,
            password = req.body.hashedPassword
        })
    
        //save user and respond
        const user =  await newUser.save()
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})

//Login
router.get('/register', async (req, res)=>{

    try{
        //check if user exists
        const user = await User.findOne(req.body.email)
        if(!user){
            res.status(404).json('user not found')
    }
        //check is password is correct
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword){
            res.status(400).json('wrong password')
        }

        //return user
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
    
})

module.exports = router