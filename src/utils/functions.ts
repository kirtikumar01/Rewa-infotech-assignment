import { UserType } from "./types";
import fs from "fs";
import AES from 'crypto-js/aes'
import CryptoJS from "crypto-js";
const filePath = process.cwd() + "/src/utils/userData.json"



export function getUserData(){
    const fileData = fs.readFileSync(filePath)
    const data:UserType[] = JSON.parse(fileData as any);
    return data.map((e)=>{
        return decryption(e)
    })
}

export function setUserData(data:UserType[]){
    fs.writeFileSync(filePath, JSON.stringify(data))
}

export function encryption(data:{[key:string]:string}){
    let result:any = {}
    Object.keys(data).forEach((key)=>{
        result[key] = AES.encrypt(data[key], process.env.SECRET_KEY as string).toString()
    })
    return result
}

export function decryption(data:{[key:string]:string}){
    let result:any = {}
    Object.keys(data).forEach((key)=>{
        result[key] = AES.decrypt(data[key], process.env.SECRET_KEY as string).toString(CryptoJS.enc.Utf8)
    })
    return result
}