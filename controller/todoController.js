const ModelTodo = require('../model/todoModel');

class TodoController{
    static view(req,res){
        ModelTodo.findAll().then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.json(err)
        })
    }
    static input(req, res){
        ModelTodo.create(req.body).then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.json(err)
        })
    }
}

module.exports = TodoController;