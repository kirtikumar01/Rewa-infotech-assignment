import { encryption, getUserData, setUserData } from "@/utils/functions";
import { UserType } from "@/utils/types";
import { getJwtToken } from "@/utils/uiFunctions";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try{
        const filePath = process.cwd() + "/src/utils/userData.json"
        const data = await req.json();
        const newData = getUserData()
        for(let i=0;i<newData.length;i++){
            const keys = Object.keys(newData[i]) as (keyof UserType)[]
            for(let j=0;j<keys.length;j++){
                // if(newData[i][keys[j]]===data[keys[j]] && keys[j]!=="password"){
                //     return NextResponse.json({success:false, message:"user already exists!"})
                // }
                if(keys[j]==="email" && newData[i][keys[j]]===data[keys[j]] ){
                    return NextResponse.json({success:false, message:"user email already exists!"})
                }else if(keys[j]==="phone" && newData[i][keys[j]]===data[keys[j]] ){
                    return NextResponse.json({success:false, message:"phone number already exists!"})
                }
            }
        }
        newData.push(data)
        var token = getJwtToken(data)
        setUserData(newData)
        return NextResponse.json({token,success:true,message:"Registered Successfully!"})
    }catch(err){
        console.log(err)
        return NextResponse.json({success:false,message:"Something went wrong!"})
    }
}
