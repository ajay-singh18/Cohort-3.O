const express = require('express')
const app = express()
app.get("/sum",(req,res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const sum = a+b
    res.json({
        answer : sum
    })
})

app.get("/multiply",function(req,res){
    const a = req.query.a
    const b = req.query.b
    const sum = a*b
    res.json({
        answer : sum
    })
})

app.get("/divide",function(req,res){
    const a = req.query.a
    const b = req.query.b
    const sum = a/b
    res.json({
        answer : sum
    })
})
app.get("/subtract",function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const sum = a-b
    res.json({
        answer : sum
    })
})

// Another method to take input *params -> sum/:a/:b
// /sum/10/20 => 30
app.get("/sum/:a/:b",(req,res)=>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    const sum = a+b
    res.json({
        answer : sum
    })
})



app.listen(3001)