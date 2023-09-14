import User from "../models/User";


export const getUser = async(req,res)=>{

    try{

        const {id} = req.params
        const user = await User.findById(id)
        
    }
    catch(err){
        res.status(500).json({error:err.message})

    }


}