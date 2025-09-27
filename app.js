const express = require("express");
const app = express();
const bcrypt = require('bcrypt');

const userModel = require("./model/user");
const postModel = require("./model/post")

const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", (req, res) => {});

app.post('/register', async (req,res) =>{
  let {email,password, username, name, age} = req.body;
  bcrypt.genSalt(10, async (err, hash) =>{
    let user = await userModel.create({
      username,
      email,
      age,
      name,
      password: hash,
    });
    let token = jwt.sign({email:email, userid: user._id}, "shhhhh");
    res.cookie("token", token);
    res.send("registered");
  })
})

app.listen(8000);
