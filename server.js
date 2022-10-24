//jshint esversion:11

import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path"; 

const app = express(); // Initialize express
const __filename = fileURLToPath(import.meta.url); // Initialize fileURLToPath
const __dirname = dirname(__filename); // Initialize dirname

// Starting express server 
app.listen(3000);

// GET Requests 
app.get("/", (res, req) => {
    req.sendFile(__dirname + "/index.html");
});