import User from "../models/User";


export const getUser = async(req,res)=>{

    try{

        const {id} = req.params
        const user = await User.find
    }
    catch(err){
        res.status(500).json({error:err.message})

    }


}