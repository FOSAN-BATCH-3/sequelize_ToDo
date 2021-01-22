const {verifyToken} = require('../helper/jwt')

function authentification(req, res, next){
    if(req.headers.token){
       let hasil =  verifyToken(req.headers.token)
       req.headers.user = hasil;
       next();

    }else{
        res.status(500).json({status: 'maaf anda belum login'})
    }


}

module.exports = authentification;