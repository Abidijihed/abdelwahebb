const {connection}=require('../DataBaseMySQL/config')
module.exports={
    createcasting:((req,res)=>{
        const query = `INSERT INTO casting(title,content,video,imagee) VALUES("${req.body.title}","${req.body.content}","${req.body.video}","${req.body.video}")`;
   connection.query(query,(err,result)=>{
    err ? res.status(500).send(err):res.status(200).send('post added')
   })
    }),
    updatecasting:((req,res)=>{
        const query = `UPDATE casting SET  title="${req.body.title}",content="${req.body.content}",imagee="${req.body.imagee}" WHERE id=${req.params.id}`;
        connection.query(query,(err,result)=>{
        err ? res.status(500).send(err):res.status(200).send('post updated')
        })
    }),
    deletecasting:((req,res)=>{
        const query=`DELETE FROM casting WHERE id=${req.params.id}`
        
        connection.query(query,(err,result)=>{
            err ? res.status(500).send(err):res.status(200).send('post deleted')
          })
    }),
    GetAllPostes:((req,res)=>{
        const query=`select * from casting`
        connection.query(query,(err,result)=>
          (err)?res.status(500).send(err):res.status(201).send(result)
        )
      })
}