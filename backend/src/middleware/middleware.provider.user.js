
import { checkUserExist } from "../services/user.service.js"
import { createToken } from "../services/jwt.service.js"

export const ProviderUserValidation = async (req, res, next) => {
    try {
        console.log('github..',req.user)
        if (req.user.email) {
            let response = await checkUserExist(req.user.email, req.user.provider)
            if (!response.email) {
                next()
            } else {
                const token = await createToken(response.email, response.id);
                res.cookie('token', token, {
                    httpOnly: false,
                    secure: false
                })
                res.send(token)
            }
        }else{
            console.log('faile in provider user validation middleware..')
        }
    } catch {

    }
}