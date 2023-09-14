import User from "../models/User";


export const getUser = async(req,res)=>{

    try{

        const {id} = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json({error:err.message})

    }

}

export const getUserFriends  = async(req,res)=>{

    try{

        const {id} = req.params
        const user = await
    }
    catch(err){
        res.status(500).json({error:err.message})


    }

}