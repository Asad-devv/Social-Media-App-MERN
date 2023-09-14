import Jwt  from "jsonwebtoken";

export const verifyToken = async(req,res,next)=>{
    try{

        let token = req.header("auth-token")
        if(!token){
            return res.status
        }

    }
    catch(err){

    }
}