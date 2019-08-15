const jwt = require('jsonwebtoken')

module.exports ={
    authInfo: (req,res,next)=>{
        const headerAuth = req.headers["authorization"]
        const headerSecret = req.headers["x-access-token"]
        console.log(headerAuth)
        if(typeof headerAuth === 'undefined'){
            next()
        }else if(headerAuth !== "Allow"){
            return res.json("Unauthorization")
        }else{
            const bearerToken = headerSecret.split(' ')
            const token = bearerToken[1]
            req.token = token
            console.log(`Token Stored! ${token}`)
            next()
        }
    },
    accessToken: (req,res,next)=>{
        const secretKey = "SECRET-DONG"
        const accessToken = req.token
        const userToken = req.headers['x-control-user']
        console.log(accessToken)
        jwt.verify(accessToken,secretKey,(err,decoded)=>{
            if(err && err.name === 'TokenExpiredError') return res.json('Token Expired')
            if(err && err.name === 'JsonWebTokenError') return res.json('Invalid Token')
            if(parseInt(userToken) !== parseInt(decoded.userid)) return res.json('invalid User Token')
            next()
        })
    }
}