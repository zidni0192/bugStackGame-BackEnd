const connection = require('../configs/db')

module.exports = {
    getUsers: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT user.*,score.score FROM user INNER JOIN score ON user.idUser = score.idUser GROUP BY score.idUser ", (err, result) => {
                if (!err) {
                    console.log(result)
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
    ,
    postUser: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO user SET ?', data, (err, result) => {
                if (!err) {
                    console.log('resuld',result);
                    connection.query('INSERT INTO score SET ?',{idUser:result.insertId,score:0})
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    },
    getByEmail: (email) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT user.*,score.score FROM user INNER JOIN score ON user.idUser = score.idUser WHERE email=? OR username=?', [email, email], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })
    }
}