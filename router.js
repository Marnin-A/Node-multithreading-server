var express = require("express")
var router = express.Router()

const credential = {
    Username:"Marnin",
    password:"1234"
} 

//User login
router.post("/login", (req, res)=>{
    if (req.body.Username == credential.Username && req.body.password==credential.password) {
        req.session.user=req.body.Username;
        res.redirect("/route/dashboard")
        // res.end("Login Successful")
    }else{
        res.end("Invalid Username or Password")
    }

    //Dashboard Routing
    router.get("/dashboard", (req,res)=>{
        if (req.session.user) {
            res.render("dashboard",{user:req.session.user})
        } else {
            res.send("Unauthorized user")
        }
    })
})

module.exports = router;