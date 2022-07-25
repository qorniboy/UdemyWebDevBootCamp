const express = require("express");
app = express();

app.get("/tacos", (req, res) => {
    res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
    res.send("POST /tacos response");
});

app.listen(80, () => {
    console.log("STARTED ON PORT 80");
})