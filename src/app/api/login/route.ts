import { getUserData } from "@/utils/functions";
import { getJwtToken } from "@/utils/uiFunctions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try{
        const {email,password} = await req.json()
        if(!email || !password){
            return NextResponse.json({success:false, message:"both email and password are required"})
        }
        const fileData = getUserData()
        // console.log("filedata - ", fileData)
        const user = fileData.find((obj)=>{
            return obj.email===email && obj.password===password
        })
        if(!user){
            return NextResponse.json({success:false, message:"email or password is incorrect"})
        }
        const token = getJwtToken(user)
        return NextResponse.json({success:true, message:"logged in successflly!", token, fileData})
    }catch(err){
        console.log(err)
        NextResponse.json({success:false, message:"Something went wrong!"})
    }
}