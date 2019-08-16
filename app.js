require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const xss = require('x-xss-protection')
const userRoutes = require('./src/routes/user')
const soundRoutes = require('./src/routes/sound')
const scoreRoutes = require('./src/routes/score')
const patternRoutes = require('./src/routes/pattern')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const whitelist = "http://127.0.0.1,http://192.168.6.121"
const corsOption = (req, callback) => {
  console.log('asdasd');
  
  
  if (whitelist.split(',').indexOf(req.header('Origin')) !== -1) {
    console.log('Success')
    return callback(null, {
      origin: true
    })
  } else {
    console.log('Failed')
    return callback('Not Allowed', {
      origin: false
    })
  }
}
app.use(xss())
app.use(cors())
app.options('*',cors(corsOption))
app.listen(port,()=>{
    console.log(`We are running on port ${port}`)
})

app.use('/user',userRoutes)
app.use('/score',scoreRoutes)
app.use('/sound',soundRoutes)
app.use('/pattern',patternRoutes)
