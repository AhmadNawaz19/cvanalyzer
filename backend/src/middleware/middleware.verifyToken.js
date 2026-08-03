
import jwt from 'jsonwebtoken'

export const verifyToken = async (req, res, next) => {
    let token = req.cookies.token;
    if (!token){
        console.log('No Toke verify')
        return res.status(401).json({
            "success" : false,
            "message" : "User not login"
        });
    }else{
        let decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    }
}