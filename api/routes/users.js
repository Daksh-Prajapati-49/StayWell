const express = require("express");

const userRoute = express.Router();

userRoute.get("/",()=>{
    res.send("hello buddy");
})

module.exports = userRoute