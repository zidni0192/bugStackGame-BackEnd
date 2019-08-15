const model = require('../models/pattern')
module.exports = {
    getPattern:(req,res)=>{
        model.getPattern()
        .then((result)=>{
            res.json(result)
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    postPattern:(req,res)=>{
        const data = {
            pattern:req.body.pattern,
            score:req.body.score
        }
        model.patchPattern(data)
        .then((result)=>{
            res.json({idPattern:result.insertId,data})
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    patchPattern:(req,res)=>{
        const data = {
            pattern:req.body.pattern,
            score:req.body.score
        }
        const idUser = req.params.idPattern
        model.patchPattern(data,idPattern)
        .then((result)=>{
            res.json(result)
        })
        .catch((error)=>{
            console.log(error);
        })
    }

}