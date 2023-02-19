const router=require('express').Router();
const PosteController=require('../controller/CreatePoste');
const getcontroller=require('../controller/GetAllPostes')
const updatecontroller=require('../controller/UpdatePost')
const deletepostcontroller=require('../controller/Deletepost')
router.post('/api/Create/NewPoste',PosteController.createPost);
router.get('/api/get/allpost',getcontroller.GetAllPostes)
router.post('/api/Create/NewPosteText',PosteController.createPostText)
router.get('/api/get/allpostText',getcontroller.GetAllPostesText)
router.put('/api/get/updatepostText/:id',updatecontroller.UpdatePostText)
router.delete("/api/get/deletePstText/:id", deletepostcontroller.Deletepost);
router.put("/api/update/post/:id",PosteController.updatepost)
router.delete("/api/delete/postes/:id",PosteController.deletepost)
module.exports={PosteRouter:router}