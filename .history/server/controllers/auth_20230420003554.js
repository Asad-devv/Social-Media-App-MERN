import bcrypt from "bcrypt"
import  Jwt  from "jsonwebtoken"
import User from "../models/User.js"



// Register USER

export const register = async(req,res)=>{
    try {
        
        const {firstName,lastName,email,password,picturePath,impressions,friends,location,occupation,viewedProfile} = req.body
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password,salt)


        const newUser = new User({
            firstName,lastName,email,password:passwordHash,picturePath,friends,location,occupation,viewedProfile :Math.floor(Math.random()*1000) , impressions:Math.floor(Math.random()*1000)
        })

        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
        

    } catch (error) {
     
        res.status(500).json({error:error.message})
    }
}


// logging in 

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body
        const user = await User.findOne({email:email})

        if(!)
    }
    catch(err){

    }
}