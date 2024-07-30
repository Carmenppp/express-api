import { checkToken } from "./index.js"

export const checkAuthMidd =()=>{
    function middleWareAuth(req, res, next){
        const id =  parseInt(req.params.id); 
        checkToken.confirmToken(req, id)
        next();
    }
    return middleWareAuth;
}