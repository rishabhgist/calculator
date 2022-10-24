//jshint esversion:6
import express from "express";
const app = express();

// Starting express server 
app.listen(3000);

// GET Requests 
app.get("/", (res, req) => {
    req.send("Hello World");
});