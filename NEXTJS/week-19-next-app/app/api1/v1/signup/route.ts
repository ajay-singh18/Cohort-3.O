import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
// const prismaClient = new PrismaClient()
import prismaClient from "../../../lib/index" // for singleton prisma
export async  function POST(req:NextRequest){
    const data = await req.json()
    console.log(data);
    await prismaClient.users.create({
        data:{
            username: data.username,
            password: data.password
        }
    })
    return NextResponse.json({
        "message":"Signed up successfully"
    })
}