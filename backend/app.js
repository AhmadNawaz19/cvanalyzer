import express from "express";
import cors from 'cors'
import CookieParser from 'cookie-parser'
import userRouter from "./src/router/router.user.js";
import googleLoginRouter from './src/router/router.googleLogin.js'
import githubLoginRouter from './src/router/router.githubLogin.js'
import fileUploadRouter from './src/router/router.fileUpload.js'
import "./src/config/config.github.js";
import { handleMulterError } from "./src/middleware/middleware.multerError.handling.js";
import { profileRouter } from "./src/router/router.updateprofile.js";
import { verifyToken } from "./src/middleware/middleware.verifyToken.js";
import { logout } from "./src/middleware/middleware.logout.js";

import passport from "./src/config/config.google.js";

const app = express();

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))
app.use(CookieParser())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(passport.initialize());

app.get('/', (req, res) => {
    res.send('helllo')
})
app.use('/user', userRouter)
app.use('/auth', googleLoginRouter)
app.use('/githubauth', githubLoginRouter)
app.use('/file', fileUploadRouter)
app.use('/profile', verifyToken, profileRouter)
app.use('/logout', logout)

app.use(handleMulterError)

export default app