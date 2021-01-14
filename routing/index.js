const router = require('express').Router()
const todo = require('./todo')
const user = require('./user')

router.use('/user', user)
router.use('/todo', todo)
router.use('/', (req, res) =>{
        res.send("This is my todo list");
      });


module.exports = router