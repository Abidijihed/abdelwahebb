const {connection}=require('../DataBaseMySQL/config')
module.exports={
    createPost:((req,res)=>{
      console.log(req.body)
        const query = `INSERT INTO postes(title,content,views,likes,comments,numberr,video) VALUES("${req.body.title}","${req.body.content}","${req.body.views}","${req.body.likes}","${req.body.comments}","${req.body.numberr}","${req.body.video}")`
        connection.query(query,(err,result)=>
          (err)?res.status(500).send(err):res.status(201).send('poste done')
        )
      }),
      createPostText:((req,res)=>{
        console.log(req.body)
          const query = `INSERT INTO postestext(bigTitle,title,content,imagees) VALUES("${req.body.bigTitle}","${req.body.title}","${req.body.content}","${req.body.imagees}")`
          connection.query(query,(err,result)=>
            (err)?res.status(500).send(err):res.status(201).send('poste done')
          )
        })
}