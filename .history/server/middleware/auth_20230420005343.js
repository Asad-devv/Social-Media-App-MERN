import Jwt  from "jsonwebtoken";

export const verifyToken = async(req,res,next)=>{
    try{

        let token = req.header("auth-token")
        if(!token){
            return res.status(403).send("Access Denied")
        }
        if(token.startsWith("Bearer ")){
            token = token.slice(7,token.length).trimleft()
        }

        const verified = jwt
    }
    catch(err){

    }
}