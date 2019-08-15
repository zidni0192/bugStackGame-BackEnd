const connection = require('../configs/db')
module.exports = {
    getScore:()=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT user.username,score.* FROM score INNER JOIN user ON score.idUser = user.idUser ORDER BY score.score DESC',(error,result)=>{
                if(!error){
                    resolve(result)
                }else{
                    reject(error)
                }
            })
        })
    },
    patchScore:(data,idUser)=>{
        return new Promise((resolve,reject)=>{
            connection.query('UPDATE score SET ? WHERE idUser=? AND score.score <?',[data,idUser,data.score],(error,result)=>{
                if(!error){
                    resolve(result)
                }else{
                    reject(error)
                }
            })
        })
    }
}