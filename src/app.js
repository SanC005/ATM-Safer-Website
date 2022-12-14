const express = require("express");
const path = require("path");
require("./db/conn");
const hbs = require("hbs");

// const ngrok = require('ngrok');
// var SibApiV3Sdk = require('sib-api-v3-sdk');
// console.log(lib.addnum(2,2));


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

// app.get('/', function (req, res) {
//     var userIP = req.connection.remoteAddress;
//     console.log(userIP + " connected to the site.");
// });
// let defaultClient = SibApiV3Sdk.ApiClient.instance;
// let apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = '';
// new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({

//    "sender":{ "email":"sandeepcsrao@gmail.com", "name":"ATM"},
//    "subject":"Alert! Someone tried to enter your account.",
//    "htmlContent":"<!DOCTYPE html><html><body><h1>Dear Customer,</h1><p>There has been an attempt to enter you bank account. Please contact us if it was not you.<br> you may ignore this mail if it is not case.<br> Yours Regards<br> The Bank</p></body></html>",
//    "params":{
//       "greeting":"Thanking you",
//       "headline":"This is the default headline"
//    },
//  "messageVersions":[
//    //Definition for Message Version 1 
//    {
//        "to":[
//           {
//              "email":"sandeep222002rao@gmail.com",
//              "name":"The Customer"
//           }
          
//        ],
       
//     }
//  ]

// }).then(function(data) {
// console.log(data);
// }, function(error) {
// console.error(error);
// });
// let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
// let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
// const num=4;
// module.exports = {
//     sendEmail : sendSmtpEmail,
//     apiInstance : apiInstance,
//     num : num
// }




// var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
// var currentLocation = window.location;
// window.onload = function() {
    // if ('http://localhost:3000/html/invalid.html') {
        
            // }  
//   };
//     new apiInstance.sendSmtpEmail({

//         "sender":{ "email":"sandeepcsrao@gmail.com", "name":"ATM"},
//         "subject":"Alert! Someone tried to enter your account.",
//         "htmlContent":"<!DOCTYPE html><html><body><h1>Dear Customer,</h1><p>Someone tried to enter you bank account unsuccessfully. Due to exceeding your maximum invalid PIN attempts, your account has been frozen. Please contact us if it was not you or you wish to have your account unfrozen.</p></body></html>",
//         "params":{
//            "greeting":"Thanking you",
//            "headline":"This is the default headline"
//         },
//       "messageVersions":[
//         //Definition for Message Version 1 
//         {
//             "to":[
//                {
//                   "email":"sandeep222002rao@gmail.com",
//                   "name":"The Customer"
//                }
               
//             ],
            
//          }
//       ]
   
//    }).then(function(data) {
//      console.log(data);
//    }, function(error) {
//      console.error(error);
//    });
// }


//Routing
app.get("/", (req, res) => {
    // res.send("Page is working");
    res.render("index");
})
// function foo(){
//     console.log("working");
// }
// export {
//     appInstance as fn1,
//     foo as fn2,
// };



//  export { foo, bar };
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