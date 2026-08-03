import express from 'express'
const router = express.Router()
import passport from '../config/config.google.js'
import { ProviderUser } from '../controller/controller.provider.user.js'
import { ProviderUserValidation } from '../middleware/middleware.provider.user.js'

router.get('/login', (req, res) => {
  res.send('please login again')
})

router.get('/profile', (req, res) => {
  res.send('login succesfully')
})

router.get(
    "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }))

  router.get(
  "/google/callback",
  passport.authenticate("google", {
    // successRedirect:"/auth/profile",
    session : false,
    failureRedirect: "/auth/login",
  }),
  ProviderUserValidation,
  ProviderUser
);

export default router