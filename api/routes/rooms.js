const express = require("express");

const roomRoute = express.Router();

roomRoute.get("/",()=>{
    res.send("hello buddy");
})

module.exports = roomRoute