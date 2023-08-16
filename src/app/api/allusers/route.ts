import { NextRequest, NextResponse } from "next/server";
import { getUserData } from "@/utils/functions";

export async function GET(req:NextRequest){
    try{
        const fileData = getUserData()
        return NextResponse.json({success:true, fileData})
    }catch(err){
        console.log(err)
        NextResponse.json({success:false, message:"Something went wrong!"})}
}