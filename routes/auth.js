const router = require('express').Router()
const {body} = require('express-validator')

const authCtrl = require("../controllers/auth")

router.get('/auth/signup', authCtrl.auth_signup_get)
router.post('/auth/signup', [
    body('firstName').isLength({min: 5}).withMessage("First Name must be at least 5 chars long"),
    body('lastName').isLength({min: 5}),
    body('username').isLength({min: 5}),
    body('emailAddress').isEmail(),
    body('password').isLength({min: 5})
], authCtrl.auth_signup_post)

router.get('/auth/signin', authCtrl.auth_signin_get)
router.post('/auth/signin', authCtrl.auth_signin_post)

router.get('/auth/logout', authCtrl.auth_logout_get)



module.exports = router;