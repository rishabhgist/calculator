//jshint esversion:11

import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path"; 
import bodyParser from "body-parser";

const app = express(); // Initialize express
const __filename = fileURLToPath(import.meta.url); // Initialize fileURLToPath
const __dirname = dirname(__filename); // Initialize dirname
app.use(bodyParser.urlencoded({extended:true}));

// Starting express server 
app.listen(3000);

// GET Requests 
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send("The result of sum is " + result);
});