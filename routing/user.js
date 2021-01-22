const router = require('express').Router()
const controller = require('../controller/userController')

router.get('/', controller.find)
router.post('/save',controller.add)
router.post('/login',controller.login)
module.exports = router