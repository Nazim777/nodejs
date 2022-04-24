//const register = require('./auth') when single function require
/*
const auth= require('./auth') //when multiple function require
auth.register(' Mohammad Nazim Hossain')
auth.login( ' Mohammad','secret')
*/
/*
//path module
console.log(__filename)
const path= require('path')
console.log(path.dirname(__filename))
console.log(path.extname('index.html'))
console.log(path.basename(__filename))
console.log(path.parse(__filename))
console.log(path.join(__dirname,'hello','sayhi.js'))
*/
/*
const path= require('path')
const fs= require('fs')
/*
fs.mkdir(path.join(__dirname,'test'),(err)=>{
    if(err){
        console.log(err)
    }
    console.log('done')
})
*/


/*
//fs module
fs.writeFile(path.join(__dirname,'test','hello.txt'),'hello this is txt file',(err)=>{
    if(err){
        console.log(err)
    }

fs.appendFile(path.join(__dirname,'test','hello.txt'),'hello more data added',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('data added')
})

    console.log('file create done')
})
*/

/*

fs.readFile(path.join(__dirname,'test','hello.txt'),'utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})

*/

/*
//os module
const os= require('os')
console.log(os.freemem())
console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.cpus())
console.log(os.homedir())
*/

//events module 

/*
const Emitter= require('events')
const Helloemitter= new Emitter()

Helloemitter.on('name',(data)=>{
    console.log(data)
})
Helloemitter.emit('name',{
    name:'Mohammad nazim Hossain'
})
*/

/*
const http= require('http')
const PORT= process.env.PORT||5000

const app=http.createServer((req,resp)=>{
    resp.end(`<h1>hello from server <h1/>`)
})

app.listen(PORT,()=>{
    console.log(`server listenting on port ${PORT}`)
})
*/
/*
const http= require('http')
const PORT= process.env.PORT ||5000


http.createServer((req,resp)=>{
    resp.write('hello this is a home page')
    resp.end()
}).listen(PORT,()=>{console.log('server is lestening in port 5000 ')})
*/
/*
const http= require('http')
const PORT= process.env.PORT||5000
const data= ('/',(req,resp)=>{
    resp.write('hello this is a home page')
    resp.end()
})

http.createServer(data).listen(PORT,()=>{
    console.log(`server is listening in port ${PORT}`)
})

*/