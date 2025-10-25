import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { z } from "zod";
import bcrypt from "bcrypt";
import { contentModel, linkModel, userModel } from "./db.js";
import dotenv from "dotenv";
import { auth } from "./middleware.js";
import { random } from "./utils.js";
import cors from "cors";
dotenv.config(); // dot config
const app = express();
const url = process.env.MONGO_URL; // mongo url
const JWT_SECRET = process.env.JWT_SECRET;
await mongoose.connect(url);
app.use(express.json());
app.use(cors());
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
    });
    if (!result.success) {
        return res.status(400).json({
            error: result.error
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await userModel.create({
            username,
            password: hashedPassword
        });
        res.json({
            message: "user signed up"
        });
    }
    catch (error) {
        res.status(414).json({
            message: "User already exists"
        });
    }
});
app.post("/api/v1/signin", async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({
        username
    });
    if (!user) {
        res.status(404).json({
            error: true,
            message: "User not found"
        });
    }
    const matched = await bcrypt.compare(password, user?.password || "");
    if (user && matched) {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        res.json({
            token
        });
    }
    else {
        res.status(403).json({ message: "Incorrect credentials" });
    }
});
app.post("/api/v1/content", auth, async (req, res) => {
    const title = req.body.title;
    const link = req.body.link;
    const type = req.body.type;
    //@ts-ignore
    console.log(req.userId);
    await contentModel.create({
        title,
        link,
        type,
        //@ts-ignore
        userId: req.userId, // used ts ignore
        tags: []
    });
    res.json({
        message: "content added"
    });
});
app.get("/api/v1/content", auth, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await contentModel.find({
        userId
    }).populate("userId", "username");
    res.json({
        content
    });
});
app.delete("/api/v1/delete/:contentId", auth, async (req, res) => {
    const contentId = req.params.contentId;
    await contentModel.deleteOne({
        _id: contentId,
        //@ts-ignore
        userId: req.userId
    });
    res.json({
        "message": "Content deleted"
    });
});
app.post("/api/v1/brain/share", auth, async (req, res) => {
    const share = req.body.share;
    if (share) {
        const existingLink = await linkModel.findOne({
            //@ts-ignore
            userId: req.userId
        });
        if (existingLink) {
            res.json({
                hash: existingLink.hash
            });
            return;
        }
        const hash = random(10);
        await linkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash
        });
        res.json({
            hash
        });
    }
    else {
        await linkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        });
    }
    res.json({
        message: "Updated sharable link"
    });
});
app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;
    const link = await linkModel.findOne({
        hash,
    });
    if (!link) {
        res.status(411).json({
            message: "Sorry Incorrect input"
        });
        return;
    }
    // userId
    const content = await contentModel.find({
        userId: link.userId
    });
    const user = await userModel.findOne({
        _id: link.userId
    });
    if (!user) {
        res.status(411).json({
            message: "user not found , error should ideally not happen"
        });
        return;
    }
    res.json({
        username: user?.username,
        content
    });
});
app.listen("3000");
//# sourceMappingURL=index.js.map