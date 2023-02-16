const {connection}=require('../DataBaseMySQL/config')
module.exports={
    UpdatePostText:((req,res)=>{
        const query=`UPDATE postestext SET bigTitle="${req.body.bigTitle}",title="${req.body.title}",content="${req.body.content}",imagees="${req.body.imagees}" WHERE id=${req.params.id}`
        connection.query(query,(err,res)=>{
            err?res.status(500).send(err):res.status(200).send('update done')
        })
    })
}