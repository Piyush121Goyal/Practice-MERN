const express = require('express');
const app = express();
const path = require('path')
//used for static files path
const userModel=require("./usermodel");
//by this we can export model from usermodel.js to this file 

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//middleware to convert unreadable into readable data 

app.use(express.static(path.join(__dirname, 'public')));
//to look for static file like images , videos , stylesheets , frontend js on that path

app.set('view engine', 'ejs');
//to render ejs on frontend 



app.get("/",function(req,res){
    res.render("index");
    //we didnt use res.send because now frontend is handled by ejs, so we write res.render("file name in views folder that we have to render")
})

app.get("/profile/:username/:age", function(req,res){
    res.send(`welcome, ${req.params.username} of age ${req.params.age}`)
    // : used for its dynamic(changing) nature, then `` because otherwise will be a string , req.params because of :
})

app.get("/create",async (req,res) => {
    let createdUser =await userModel.create({
        name: "piyushika",
        username: "piyush_goyalshika",
        email: "piyush@gmail.comshika"
    })//This function is an async fuction so that's why we use await and async 
    res.send(createdUser);
})
//Create operation for usermodel

app.get("/read",async (req,res) => {
    let readUser =await userModel.find();
    //This function is an async fuction so that's why we use await and async 
    res.send(readUser);
})
//Read operation for usermodel

app.get("/update",async (req,res) => {
    let updatedUser =await userModel.findOneAndUpdate({username: "piyush_goyal"}, {name:"vansh"}, {new:true});
    //in arguments first is which user to update(here user with that) , second is what to update in that user 
    //This function is an async fuction so that's why we use await and async 
    res.send(updatedUser);
})
//Update operation for usermodel

app.get("/delete",async (req,res) => {
    let deletedUser =await userModel.findOneAndDelete({username: "piyush_goyal"});
    //This function is an async fuction so that's why we use await and async 
    res.send(deletedUser);
})
//Delete operation for usermodel


app.listen(3000, function(){
    console.log("its running");
});

