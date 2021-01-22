
const modelUser = require('../model/userModel')
const { QueryTypes } = require('sequelize');
const {hashPassword, compare} = require('../helper/bcrypt')
const {generateToken, verifyToken} = require('../helper/jwt')


class userController{
    static async find(req, res){
        modelUser.findAll().then(data =>{
          
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
    }

    static add(req,res){
        req.body.password = hashPassword(req.body.password);
        modelUser.create(req.body).then(data=>{
            res.status(200).json({pesan: 'berhasil'})
        }).catch(err=>{
            res.status(500).json({pesan: 'maaf gabisa'})
        })
    }

    static login(req, res){


        const { username, password} = req.body
        console.log(username)
        modelUser.findAll({ where: { username: username } })
          .then( data => {
            if(data.length){

           let hasil =  compare(password, data[0].password);
                    if(hasil){
                        res.json({message: 'berhasil login', token: generateToken(data[0].toJSON())})
                    }else{
                        res.json({message: 'maaf password anda salah'})
                    }   
            } else {
                res.json({message: 'maaf username tidak terdaftar'})
            }
          })
          .catch(err => {
            console.log(err)
            res.json({message: err})
          })
    }
}

module.exports = userController;