const express = require('express')
const app = express()
let requestCount = 0

function requestIncrement(req,res,next){
    requestCount = requestCount+1
    console.log("No of response = "+requestCount);
    res.json({
        "msg": "I ended the request"
    })
    console.log(req);
    
    next()
}
function sum(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const sum = a+b
    res.json({
        answer : sum
    })

}
app.get("/sum",requestIncrement,sum)
app.get("/multiply",requestIncrement,sum)
app.get("/sum",requestIncrement,sum)

// another way to use middleware

// app.use(requestIncrement) // below this every route use automatically use it
// app.get("sum",sum) // no need to write requestIncrement function everttime

app.listen(3000) 