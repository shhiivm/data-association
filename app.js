const express = require("express");
const app = express();

const userModel = require('./model/user');
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());



app.post("/create", (req,res) =>{

})

app.listen(8000);
