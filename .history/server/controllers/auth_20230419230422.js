import bcrypt from "bcrypt"
import { Jwt } from "jsonwebtoken"
import User from "../models/User.js"



// Register USER

export const register = async(req,res)=>{
    try {
        
        const {firstName,lastName,email,password,picturePath,friends,location,occupation} = req.body
    } catch (error) {
        const salt = await bcrypt        
    }
}