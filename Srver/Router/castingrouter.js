const router=require('express').Router();
const castingcontroller=require('../controller/createcasting')
const castingimage=require('../controller/addimagecasting')
router.get('/api/get/casting/post',castingcontroller.GetAllPostes)
router.post('/api/addnew/casting',castingcontroller.createcasting)
router.put('/api/update/casting/:id',castingcontroller.updatecasting)
router.delete('/api/delete/casting/:id',castingcontroller.deletecasting)




module.exports={castingrouter:router}