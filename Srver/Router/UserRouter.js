const router=require('express').Router();
const PosteController=require('../controller/CreateUser');

router.post('/api/Create/newuser',PosteController.CreateStudent);
router.get('/api/login/user',PosteController.VerifyStudent)
module.exports={UserRouter:router}