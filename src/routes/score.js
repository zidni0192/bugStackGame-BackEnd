const express = require('express')
const Route = express.Router()
const controller = require('../controllers/score')
const Auth = require('../helpers/auth')
Route
.get('/',controller.getScore)
.patch('/:idUser',controller.patchScore)

module.exports = Route