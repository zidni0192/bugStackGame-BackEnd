const models = require('../models/user')
const helper = require('../helpers/password')
const jwt = require('jsonwebtoken')
module.exports = {
    getUsers: (req, res) => {
        models.getUsers()
            .then((result) => {
                res.json(result)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    postUser: (req, res) => {
        const salt = helper.generateSalt()
        const passwordHash = helper.setPassword(req.body.password, salt)
        const data = {
            username: req.body.username,
            email: req.body.email,
            password: passwordHash.passwordHash,
            salt: passwordHash.salt,
            role: 'user',
            token: "Test",
            status: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        models.postUser(data)
            .then((result) => {
                login(data.email,req.body.password,res)
            })
            .catch((error) => {
                console.log(error)
                res.json(error)
            })
    },
    getByEmail: (req, res) => {
        const email = req.body.username || req.query.username || ""
        const password = req.body.password || req.query.password || ""
        login(email,password,res)
    }
}
function login(email,password,res){
    models.getByEmail(email)
    .then((result) => {
        if (result.length >0) {
            const dataUser = result[0]
            console.log(dataUser);
            
            const userPassword = helper.setPassword(password, dataUser.salt).passwordHash
            if (userPassword === dataUser.password) {
                dataUser.token = jwt.sign({
                    userid: dataUser.id
                }, process.env.SECRET_KEY, { expiresIn: '1h' })
                delete dataUser.salt
                delete dataUser.password
                return res.json(dataUser)
            } else {
                res.json('Password Salah')
            }
        }else{
            res.json("Email Tidak Terdaftar")
        }
    })
    .catch((error) => {
        console.log(error)
    })
}