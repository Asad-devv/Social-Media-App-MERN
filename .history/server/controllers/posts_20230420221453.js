import Post from "../models/Post.js"U

import User from "../models/User" 

// create
export const createPost = async (req,res)=>{

    try {
        const {userId,description,picturePath} = req.body
        const user = await User.findById(userId)
        const newPost = new Post({
            firstName:user.firstName,
            lastName:user.lastName,
            location:user.location,
            description,
            userPicturePath:user.picturePath,picturePath

        })
    } catch (err) {
        res.status(409).json({message:err.message})
    }
}