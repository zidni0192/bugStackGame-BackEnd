const model = require('../models/sound')
const cloudinary = require('cloudinary').v2
module.exports = {
    postSound: async (req, res) => {
        let path = req.file.path
        let filename = req.file.filename.replace(/\s/g, '')
        let getUrl = async () => {
            cloudinary.config({
                cloud_name: 'dboxbbxe4',
                api_key: '461246952114187',
                api_secret: '0Ek0wq8tap2RlE2RxzHQB_8UtZU'
            })
            const options = { public_id: filename, resource_type: "video", bytes_limit: 50825347 }
            let data
            await cloudinary.uploader.upload(path, options, (error, result) => {
                const fs = require('fs')
                fs.unlinkSync(path)
                data = result
            })

            return data
        }
        let result
        await getUrl().then((res) => {
            result = res
            console.log(res);
            
        }).catch((err) => {
            console.log(err);
        })

        const data = {
            url: `v${result.version}/${filename}.${result.format}`
        }
        model.postSound(data).then((result) => {
            res.json(result)
        }).catch((error) => {
            console.log(error);
        })
    },
    getSounds:(req,res)=>{        
        model.getSounds()
        .then((result)=>{
            res.json(result)
        })
        .catch((error)=>{
            console.log(error);
            
        })
    },
    patchSound:async(req,res)=>{
        let path = req.file.path
        let filename = req.file.filename.replace(/\s/g, '')
        let getUrl = async () => {
            cloudinary.config({
                cloud_name: 'dboxbbxe4',
                api_key: '461246952114187',
                api_secret: '0Ek0wq8tap2RlE2RxzHQB_8UtZU'
            })
            const options = { public_id: filename, resource_type: "video", bytes_limit: 50825347 }
            let data
            await cloudinary.uploader.upload(path, options, (error, result) => {
                const fs = require('fs')
                fs.unlinkSync(path)
                data = result
            })

            return data
        }
        let result
        await getUrl().then((res) => {
            result = res
            console.log(res);
            
        }).catch((err) => {
            console.log(err);
        })

        const data = {
            url: `v${result.version}/${filename}.${result.format}`
        }
    }
}