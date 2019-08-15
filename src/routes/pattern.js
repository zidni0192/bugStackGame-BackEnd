const express = require('express')
const Route = express.Router()
const controller = require('../controllers/pattern')
const Auth = require('../helpers/auth')
Route
.get('/',controller.getPattern)
.post('/',controller.postPattern)
.patch('/:idUser',controller.patchPattern)

module.exports = Route