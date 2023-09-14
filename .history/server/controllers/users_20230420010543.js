import User from "../models/User";


export const getUser = async(req,res)=>{

    try{}
    catch(err){
        res.status(500).json({error:err.message})

    }


}