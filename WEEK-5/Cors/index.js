const express  = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
// we can restrict host and domains
// app.use(cors({
//     domain:["https://google.com", https://facebook.com]. // only these domains can send request to server
// }
// ))
app.use(express.json()) 
app.post("/sum",function(req,res){
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)
    res.json({
        answer: a+b
    })
})
app.listen(3001)