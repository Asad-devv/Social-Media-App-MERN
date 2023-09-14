import Post from "../models/Post.js"U

import User from "../models/" 

// create
export const createPost = async (req,res)=>{

    try {
        const {userId,description,picturePath} = req.body
        const user = await User
    } catch (err) {
        res.status(409).json({message:err.message})
    }
}