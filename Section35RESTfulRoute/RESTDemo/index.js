const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}))

app.get("/tacos", (req, res) =>{
    res.send("Get For Tacos")
})

app.post("/tacos", (req, res) =>{
    res.send("POST For Tacos")
})

app.listen(80, () => {
    console.log("LISTENING ON PORT 80")
})