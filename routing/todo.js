const router = require('express').Router()
const controller = require('../controller/todoController')
const auten = require('../middleware/authentification');
const oto = require('../middleware/otorization');
router.get('/', controller.find)
router.post('/save',auten,oto, controller.add)
module.exports = router