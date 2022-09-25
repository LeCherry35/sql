const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post('/user', userController.createUser)
router.get('/users', userController.getUsers)
router.get('/user/:id', userController.createUser)
router.put('/user', userController.createUser)
router.delete('/user/:id', userController.createUser)


module.exports = router