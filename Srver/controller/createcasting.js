const {connection}=require('../DataBaseMySQL/config')
module.exports={
    createcasting:((req,res)=>{
        const query = `INSERT INTO casting(imagee,title,content,video) VALUES("${req.body.imagee}","${req.body.title}","${req.body.content}","${req.body.video}")`
   connection.query(query,(err,result)=>{
    err ? res.status(500).send(err):res.status(200).send('post added')
   })
    }),
    updatecasting:((req,res)=>{
        const query=`UPDATE casting SET title="${req.body.imagee}",title="${req.body.title}",content="${req.body.content}", WHERE id=${req.params.id}`
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