const ModelUser = require('../model/userModel')

class UserController{
    static register(req, res){
        ModelUser.create(req.body).then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.json(err)
        })
    }
    static login(req, res){
        const { username, password} = req.body
        modelUser.findAll({ where: { username: username } })
          .then( data => {
            if(data.length){

           let hasil =  compare(password, data[0].password);
                    if(hasil){
                        res.json({message: 'berhasil login'})
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


module.exports = UserController;
