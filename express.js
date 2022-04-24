const express= require('express')
const app= express()
const path= require('path')
const PORT= process.env.PORT ||5000
const dirpath= path.join(__dirname,'public')
/*
app.get('/',(req,resp)=>{
    resp.send('hello this is a home page')
})

app.get('/about',(req,resp)=>{
    resp.send('hello this is a about page')
})

app.get('/contact',(req,resp)=>{
    resp.send('hello this is a contact page')
})

app.listen(PORT,()=>{
    console.log(`server is listening in port ${PORT}`)
})
*/
/*
app.get('/',(req,resp)=>{
    resp.sendFile(`${dirpath}/home.html`)
})

app.get('/about',(req,resp)=>{
    resp.sendFile(`${dirpath}/about.html`)
})

app.get('/contact',(req,resp)=>{
    resp.sendFile(`${dirpath}/contact.html`)
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${dirpath}/home.html`)
})



app.listen(PORT,()=>{
    console.log(`server is listening in port ${PORT}`)
})

*/