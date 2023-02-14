const router=require('express').Router();
const PosteController=require('../controller/CreatePoste');
const getcontroller=require('../controller/GetAllPostes')
router.post('/api/Create/NewPoste',PosteController.createPost);
router.get('/api/get/allpost',getcontroller.GetAllPostes)
module.exports={PosteRouter:router}