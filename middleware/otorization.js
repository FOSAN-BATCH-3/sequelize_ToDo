

function authentification(req, res, next){
   if(req.headers.user.role=='babu'){
       next()
   }else{
    res.status(500).json({status: 'maaf anda bukan babu'})
   }


}

module.exports = authentification;