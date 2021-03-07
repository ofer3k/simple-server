const express=require('express')
const cors=require('cors')
const path=require('path')
const port=process.env.PORT

const app=express()
app.use(cors())

app.get('/',(req,res)=>{
    const indexPage=path.join(__dirname,'../public/index.html')
    res.sendFile(indexPage)
})
app.get('/tryMe',(req,res)=>{
    const indexPage=path.join(__dirname,'../public/tryMe.html')
    res.sendFile(indexPage)
})

app.listen(port,()=>{
    console.log(`running on ${port}`)
})