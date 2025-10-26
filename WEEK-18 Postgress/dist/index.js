import { Client } from "pg";
import express from "express";
// const pgClient = new Client({ // can directly paste link also
//     user: "neondb_owner",
//     password : "npg_pLtSCYhz86xj",
//     port : 5432,
//     host: "ep-autumn-butterfly-ahb1ae52-pooler.c-3.us-east-1.aws.neon.tech",
//     database:"neondb",
//     ssl: true
// })
import dotenv from "dotenv";
dotenv.config();
const url = process.env.URL;
const pgClient = new Client(url);
console.log(url);
pgClient.connect();
const app = express();
app.use(express.json());
app.post("/signup", async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const insertQuery = `INSERT INTO users (username,email, password) VALUES($1,$2,$3);`;
        const response = await pgClient.query(insertQuery, [username, email, password]);
        res.json({
            message: "Signed up successfully"
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            e
        });
    }
});
app.listen(3000);
//# sourceMappingURL=index.js.map