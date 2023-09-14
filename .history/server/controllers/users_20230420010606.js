import User from "../models/User";


export const getUser = async(req,res)=>{

    try{

        const {id} = req.params
    }
    catch(err){
        res.status(500).json({error:err.message})

    }


}