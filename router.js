var express = require("express")
var router = express.Router()

const credential = {
    email:"marnin@gmail.com",
    password:"1234"
} 

//User login
router.post("/login", (req, res)=>{
    if (req.body.email == credential.email && req.body.password==credential.password) {
        req.session.user=req.body.email;
        res.redirect("/dashboard")
        // res.end("Login Successful")
    }else{
        res.end("Invalid Username or Password")
    }
})

module.exports = router;