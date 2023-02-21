const router=require('express').Router();
const castingcontroller=require('../controller/createcasting')
const castingimage=require('../controller/addimagecasting')
router.get('/api/get/casting/post',castingcontroller.GetAllPostes)
router.post('/api/addnew/casting',castingcontroller.createcasting)
router.put('/api/update/casting/:id',castingcontroller.updatecasting)
router.delete('/api/delete/casting/:id',castingcontroller.deletecasting)


router.get("/api/get/castingimage/post", castingimage.GetAllPostesimage);
router.post("/api/addnewimage/casting", castingimage.createcastingimage);
router.put("/api/updateimage/casting/:id", castingimage.updatecastingimage);
router.delete("/api/deleteimage/casting/:id", castingimage.deletecastingimage);

module.exports={castingrouter:router}