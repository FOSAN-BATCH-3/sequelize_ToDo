
const modelTodo = require('../model/todoModel')
const { QueryTypes } = require('sequelize');

class todoController{
    static async find(req, res){
        modelTodo.findAll().then(data =>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })

    }

    static add(req,res){
   
        modelTodo.create(req.body).then(data=>{
            res.status(200).json({pesan: 'berhasil'})
        }).catch(err=>{
            res.status(500).json({pesan: 'maaf gabisa'})
        })
    }
}

module.exports = todoController;