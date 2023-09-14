import bcrypt from "bcrypt"
import { Jwt } from "jsonwebtoken"
import User from "../models/User.js"



// Register USER

export const register = async(req,res)=>{
    try {
        
        const {firstName,lastName,email,password,picturePath,friends,location,occupation,viewedProfile} = req.body
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password,salt)


        const newUser = new User({
            firstName,lastName,email,password:passwordHash,picturePath,friends,location,occupation,viewedProfile
        })
    } catch (error) {
                 
    }
}