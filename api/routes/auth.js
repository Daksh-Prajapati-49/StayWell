const express = require("express");

const authRoute = express.Router();

authRoute.get("/",()=>{
    res.send("hello buddy");
})

module.exports = authRoute