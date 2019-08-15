const express = require('express')
const Route = express.Router()
const controller = require('../controllers/sound')
const Auth = require('../helpers/auth')
const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./src/uploads/')
    },
    filename:(req,file,cb)=>{        
        cb(null,`${new Date().getTime()}sound`)
    },
})

const upload = multer({storage:storage})


Route
.post('/',upload.single('file'),controller.postSound)
.get('/',controller.getSounds)
module.exports = Route