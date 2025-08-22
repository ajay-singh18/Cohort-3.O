// creating an http server
//express
// node default library => no

// const express = require("express")
// function sum(n){
//     let ans = 0;
//     for(let i =0;i<=n;i++){
//         ans = ans+i;
//     }
//     return ans;
// }
// const app = express();
// app.get("/",function(req,res){
//     const m = req.query.n // taking query/input
//     const ans = sum(m)
//     res.send("hi your answer is " + ans); // sending response
// })
// app.listen(3000);

// kidney example

const express = require("express")
const app = express();

const user = [{
    name:"Ajay",
    kidneys:[{
        healthy: false
    }]
}];

app.use(express.json()); // for middleware

app.get("/",function(req,res){
    const ajayKidneys = user[0].kidneys
    const numberOfKidneys = ajayKidneys.length
    let numberOfHealthyKidneys = 0;
    for(let i =0;i<numberOfKidneys;i++){
        if(ajayKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

// PUT

app.put("/",function(req,res){
    if(isThereUnhealthyKidney()){
        for(let i =0;i<user[0].kidneys.length;i++){
            user[0].kidneys[i].healthy = true;
        }
        res.json({})
    }
    else{
        res.status(411).json({
            msg: "you have no bad kidney"
        })
    }
})
// removing all the unhealthy kidneys
app.delete("/" , function(req,res){
    // if there is no unhealthy kidney we should return a 411
    // check for unhealthy kidney. if not return 411 status code
    if(isThereUnhealthyKidney()){
        const newKidneys = []
        for(let i =0;i<user[0].kidneys.length;i++){
            if(user[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy : true
                })
            }
        }
        user[0].kidneys = newKidneys;
        res.json({msg: "Done"})
    }
    else{
        res.status(411).json({
            msg: "You have no bad kidneys"
        })
    }
})

//  function to check if there is atleast one unhealthy kidney
function isThereUnhealthyKidney(){
    let kidney = false;
    for(let i =0;i<user[0].kidneys.length;i++){
        if(!user[0].kidneys[i].healthy){
            kidney = true
        }
    }
    return kidney
}

app.listen(3000)