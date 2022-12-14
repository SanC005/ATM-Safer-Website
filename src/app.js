const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("working");
})

app.listen(port, function() {
    console.log("Server started on port ${port}");
})