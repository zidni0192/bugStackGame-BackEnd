const connection = require('../configs/db')
module.exports = {
    getPattern:()=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM pattern',(error,result)=>{
                if(!error){
                    resolve(result)
                }else{
                    reject(error)
                }
            })
        })
    },
    postPattern:(data)=>{
        return new Promise((resolve,reject)=>{
            connection.query('UPDATE pattern SET ? ',data,(error,result)=>{
                if(!error){
                    resolve(result)
                }else{
                    reject(error)
                }
            })
        })
    },
    patchPattern:(data,idPattern)=>{
        return new Promise((resolve,reject)=>{
            connection.query('UPDATE pattern SET ? WHERE idPattern=?',[data,idPattern],(error,result)=>{
                if(!error){
                    resolve(result)
                }else{
                    reject(error)
                }
            })
        })
    }
}