const express = require("express");
const path = require("path");
require("./db/conn");
const hbs = require("hbs");
const ngrok = require('ngrok');
var SibApiV3Sdk = require('sib-api-v3-sdk');
//const ejs = require("ejs");
//const body-parser = require("body-parser");
// (async function() {
//   const url = await ngrok.connect();
//  })();
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

SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = 'YOUR_API_KEY';

new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({

     "sender":{ "email":"sendinblue@sendinblue.com", "name":"Sendinblue"},
     "subject":"This is my default subject line",
     "htmlContent":"<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>",
     "params":{
        "greeting":"This is the default greeting",
        "headline":"This is the default headline"
     },
   "messageVersions":[
     //Definition for Message Version 1 
     {
         "to":[
            {
               "email":"bob@example.com",
               "name":"Bob Anderson"
            },
            {
               "email":"anne@example.com",
               "name":"Anne Smith"
            }
         ],
         "htmlContent":"<!DOCTYPE html><html><body><h1>Modified header!</h1><p>This is still a paragraph</p></body></html>",
         "subject":"We are happy to be working with you"
      },
     
     // Definition for Message Version 2
      {
         "to":[
            {
               "email":"jim@example.com",
               "name":"Jim Stevens"
            },
            {
               "email":"mark@example.com",
               "name":"Mark Payton"
            },
            {
               "email":"andrea@example.com",
               "name":"Andrea Wallace"
            }
         ]
      }
   ]

}).then(function(data) {
  console.log(data);
}, function(error) {
  console.error(error);
});

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