import jwt from "jsonwebtoken"
import { UserType } from "./types";
import { randomBytes } from "crypto";


export function getJwtToken(data:UserType){
    const secret = process.env.SECRET_KEY as any
    return jwt.sign(data, secret, {expiresIn:"1h"});
}