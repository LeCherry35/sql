const Router = require('express')
const router = new Router()
const postController = require('../controller/post.controller')

router.post('/post', postController.createPost)
router.get('/posts', postController.getPostByUser)
// router.get('/post/:id', userController.getOneUser)
// router.put('/user', userController.updateUser)
// router.delete('/user/:id', userController.deleteUser)


module.exports = router