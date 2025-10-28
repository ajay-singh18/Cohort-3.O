import {Client} from "pg"
import express from "express"
// const pgClient = new Client({ // can directly paste link also
//     user: "neondb_owner",
//     password : "npg_pLtSCYhz86xj",
//     port : 5432,
//     host: "ep-autumn-butterfly-ahb1ae52-pooler.c-3.us-east-1.aws.neon.tech",
//     database:"neondb",
//     ssl: true
// })
import dotenv from "dotenv" //jhggjbjk
dotenv.config();
const url = process.env.URL;
const pgClient = new Client(url)
console.log(url);


pgClient.connect();
const app = express();
app.use(express.json())

app.post("/signup",async (req,res)=>{
   try{
     const {username,password,email} = req.body
     const {country,city,street,pincode} = req.body
    const insertQuery = `INSERT INTO users (username,email, password) VALUES($1,$2,$3) RETURNING id;`
    const response =  await pgClient.query(insertQuery,[username,email,password])
    const user_id = response.rows[0].id
    console.log(user_id,response);


    await pgClient.query("BEGIN;") // started the transection
    const insertAddressQuery = `INSERT INTO addresses (country,city,street,pincode,user_id) VALUES($1,$2,$3,$4,$5)`
    const addressResponse = await pgClient.query(insertAddressQuery,[country,city,street,pincode,user_id])
    await pgClient.query("COMMIT;") // ended the transaction

    
    res.json({
        message: "Signed up successfully"
    })
   }catch(e){
     console.log(e);
     res.json({
        e
     })
   }

})
app.listen(3000)
