const model = require('../models/score')
module.exports = {
    getScore:(req,res)=>{
        model.getScore()
        .then((result)=>{
            res.json(result)
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    patchScore:(req,res)=>{
        const data = {
            score:req.body.score
        }
        const idUser = req.params.idUser
        console.log(req.body,req.params)
        model.patchScore(data,idUser)
        .then((result)=>{
            res.json(result)
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}