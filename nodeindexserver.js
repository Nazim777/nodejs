const http= require('http')
const port = process.env.port ||3000
const fs=require('fs')
const path= require('path')
const res = require('express/lib/response')

const app= http.createServer((req,resp)=>{
  //  resp.writeHead(200,{
    //    'Content-Type': 'text/html'
   // })


   if(req.url=='/'){

    fs.readFile(path.join(__dirname,'public','home.html'),(err,content)=>{
        if(err){
            throw err
        } else{
            resp.end(content)
        }

    
    }) 


   }else if(req.url=='/about'){
       fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
           if(err){
               throw err
           } else{
               resp.end(content)
           }
       })
   }else if(req.url=='/contact'){
       fs.readFile(path.join(__dirname,'public','contact.html'),(err,content)=>{
           if(err){
               throw err
           }else{
               resp.end(content)
           }
       })
   }
})
app.listen(port,()=>{
    console.log(`server is listening in port ${port}`)
})