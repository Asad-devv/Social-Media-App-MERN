import Post from "../models/Post.js"

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
            userPicturePath:user.picturePath,picturePath,
            likes:{},
            comment:[]

        })

        await newPost.save()
        const post = await Post.find()
        res.status(201).json(post) 
    } catch (err) {
        res.status(409).json({message:err.message})
    }
}


// read

export const getFeedPosts = async(req,res)=>{
    try {



        const post = await Post.find()
        res.status(200).json(post) 

    } catch (err) {
        res.status(409).json({message:err.message})

    }
}





export const getUserPosts = async(req,res)=>{

    try {

        const {userId} = req.params
        const posts = await Post.find(userId)
        res.status(200).json(post) 

    } catch (err) {
        res.status(409).json({message:err.message})

    }
}



export const likePosts= async(req,res) =>{
    try {
        const {id} = req.params
        const {userId} = req.body
        const post = await Post.findById(id)
        const isLiked= post.likes.get(userId)

        if(isLiked){
            
        }

    } catch (err) {
        res.status(404).json({message:err.message})

    }
}