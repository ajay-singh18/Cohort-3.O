const express = require("express")
const jwt = require('jsonwebtoken')
const JWT_SECRET = "ajaykrsingh"
const app = express()
app.use(express.json())
const users = []

// localhost:3000
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.post("/signup", function(req,res){
    const username = req.body.username
    const password = req.body.password
    users.push({
        username: username,
        password: password
    })
    res.json({
        message: "You are signed in"
    })

})
app.post("/signin", function(req,res){
    const username = req.body.username
    const password = req.body.password

    let foundUser = null
    for(let i =0;i<users.length;i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i]
        }
    }
    if(!foundUser){
        res.json({
            message : "Incorrect credentials"
        })
        return
    }
    else{
        const token = jwt.sign({
            username:username
        },JWT_SECRET)
        res.json({
            token:token
        })
    }
})
function auth(req,res,next){
    const token = req.headers.token
    const decodeData = jwt.verify(token, JWT_SECRET)
    if(decodeData.username){
        req.username = decodeData.username
        next()
    }else{
        res.json({
            message: "You are not logged in"
        })
    }
}
app.get("/me", auth, function(req,res){
        // const token = req.headers.token
        // const decodeData = jwt.verify(token, JWT_SECRET)
        // we are repeating this...better use this check in middleware for authentication
        let foundUser = null
        for(let i =0;i<users.length;i++){
            if(users[i].username === req.username){
                foundUser = users[i]
            }
        }
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
})

app.listen(3000)