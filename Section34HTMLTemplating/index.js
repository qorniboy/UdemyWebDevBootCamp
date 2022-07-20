const express = require("express");
const app = express();
const path = require('path');

app.use(express.static("public"));

const subredditData = require("./data.json")

app.set("view engine", "ejs");

//below line used for calling nodemon / node outside of index.js directory
//example : node folder/index.js
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs")
});

app.get("/random", (req, res) => {
    const num = Math.floor(Math.random() * 10)
    res.render("random.ejs", { num });
});

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const data = subredditData[subreddit];
    if (data){
        res.render("subreddit.ejs", { ...data });
    }
    else{
        res.render("notfound.ejs", { subreddit })
    }
});

app.listen(80, ()=> {
    console.log("LISTENING ON PORT 80");
});