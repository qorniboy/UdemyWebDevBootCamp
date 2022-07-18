const express = require("express");
const app = express();
console.dir(app);

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})