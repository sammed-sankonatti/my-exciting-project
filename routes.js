const router = require("express").Router()

router.get("/", (req,res)=>{
    res.send("new home page")
})