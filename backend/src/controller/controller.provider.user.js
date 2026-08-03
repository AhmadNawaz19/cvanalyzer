
import { CreateProviderUser } from "../services/user.service.js"
import { createToken } from "../services/jwt.service.js"

export const ProviderUser = async (req, res) => {
    try {
        let response = await CreateProviderUser(req.user)
        if (!response.id) {
            res.send('google login error')
        } else {
            const token = await createToken(response.email, response.id);
            console.log(token)
            if (token) {
                res.cookie('token', token, {
                    httpOnly: false,
                    secure: false
                })
                res.send(response)
            }
        }
    } catch (err) {
        console.log(err)
    }
}