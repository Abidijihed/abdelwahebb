const router=require('express').Router();
const PosteController=require('../controller/CreatePoste');
const getcontroller=require('../controller/GetAllPostes')
const updatecontroller=require('../controller/UpdatePost')

router.post('/api/Create/NewPoste',PosteController.createPost);
router.get('/api/get/allpost',getcontroller.GetAllPostes)
router.post('/api/Create/NewPosteText',PosteController.createPostText)
router.get('/api/get/allpostText',getcontroller.GetAllPostesText)
router.put('/api/get/updatepostText/:id',updatecontroller.UpdatePostText)

module.exports={PosteRouter:router}