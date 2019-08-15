const express = require('express')
const Route = express.Router()
const controller = require('../controllers/user')
const Auth = require('../helpers/auth')
Route
.get('/',controller.getUsers)
.post('/register',controller.postUser)
.post('/login',controller.getByEmail)
.post('/getToken',Auth.authInfo,Auth.accessToken)
// .delete('/:userid',Auth.authInfo,Auth.accessToken)

module.exports = Route