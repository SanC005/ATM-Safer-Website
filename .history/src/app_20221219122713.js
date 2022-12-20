const express = require("express");
const path = require("path");
require("./db/conn");
const hbs = require("hbs");
const ngrok = require('ngrok');
//const ejs = require("ejs");
//const body-parser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

//path
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");

//use website - middleware
//use(body-parser)
//use(express.static("public"));
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(static_path))
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);


//Routing
app.get("/", (req, res) => {
    // res.send("Page is working");
    res.render("index");
})

// app.get("/PIN", (req, res) => {
    
//     res.render("PIN");
// })
// app.get("/home", (req, res) => {
//     // res.send("Page is working");
//     res.render("home");
// })

app.listen(port, function() {
    console.log("Server started on port 3000");
})