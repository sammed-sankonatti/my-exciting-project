const router = require("express").Router()

router.get("/", (req,res)=>{
    res.send("Home page is now with feature3")
})