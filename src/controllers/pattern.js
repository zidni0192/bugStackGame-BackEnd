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
        model.postPattern(data)
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
        const idPattern = req.params.idPattern
        console.log(idPattern);
        
        model.patchPattern(data,idPattern)
        .then((result)=>{
            res.json(result)
        })
        .catch((error)=>{
            console.log(error);
        })
    }

}