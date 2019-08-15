const connection = require('../configs/db')
module.exports = {
    postSound : (data)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO sound SET ?',data,(error,result)=>{
                if(!error){
                    resolve(result)
                }else{
                    reject(error)
                }
            })
        })
    },
    getSounds: ()=>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM sound',(error,result)=>{
                if(!error){
                    resolve(result)
                }else{
                    reject(error)
                }
            })
        })
    }
}