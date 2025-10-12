import type { Request,Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();
export const auth = (req: Request, res: Response,next:NextFunction)=>{
    const header = req.headers["authorization"]
    const decoded = jwt.verify(header as string,process.env.JWT_SECRET!)
    if(decoded){
        //@ts-ignore
        req.userId = docoded._id;
        next()
    }
    else{
        res.status(403).json({
            message: "you are not logged in"
        })
    }
}