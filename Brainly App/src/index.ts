import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import {z} from "zod";
import bcrypt from "bcrypt"
import {contentModel,userModel} from "./db.js";
import dotenv from "dotenv"
import { auth } from "./middleware.js";
dotenv.config(); // dot config
const app = express();
const url = process.env.MONGO_URL! // mongo url
const JWT_SECRET = process.env.JWT_SECRET!
await mongoose.connect(url)
app.use(express.json());



app.post("/api/v1/signup", async (req, res) => {
  // zod validaton and hash passowrd
  const username = req.body.username;
  const password = req.body.password;
  const userSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });
  const result = userSchema.safeParse({
    username,
    password
  })
  if(!result.success){
    return res.status(400).json({
        error: result.error
    })
  }
  const hashedPassword = await bcrypt.hash(password,10);
  try {
    await userModel.create({
    username,
    password: hashedPassword
  })

  res.json({
    message: "user signed up"
  })
  } catch (error) {
    res.status(414).json({
        message:"User already exists"
    })
  }

});
app.post("/api/v1/signin",async (req, res) => {
    const {username,password} = req.body;

    const user = await userModel.findOne({
        username
    })
    if(!user){
        res.status(404).json({
            error: true,
            message: "User not found"
        })
    }
    const matched = await bcrypt.compare(password,user?.password || "")
    if(user && matched){
        const token = jwt.sign({
            id: user._id
        },JWT_SECRET)
        res.json({
            token
        })
    }else{
        res.status(403).json({message: "Incorrect credentials"})
    }
});
app.post("/api/v1/content", auth,async (req, res) => {
    const title = req.body.title;
    const link = req.body.link;
    await contentModel.create({
        title,
        link,
        //@ts-ignore
        userId: req.userId, // used ts ignore
        tags: []
    })
    res.json({
      message: "content added"
    })
});
app.get("/api/v1/content", auth, (req, res) => {
    
});
app.delete("api/v1/content", (req, res) => {});
app.post("api/v1/brain/share", (req, res) => {});
app.post("api/v1/brain:shareLink", (req, res) => {});
app.listen("3000")