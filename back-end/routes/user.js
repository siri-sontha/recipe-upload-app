const express = require('express')
const router = express.Router() 
const {userSignup, userLogin, getUser} = require('../controller/user.js') 

router.post('/signup',userSignup)
router.post('/login',userLogin)
router.get('/user/:id',getUser)

module.exports = router