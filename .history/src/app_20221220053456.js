const express = require("express");
const path = require("path");
require("./db/conn");
const hbs = require("hbs");

// const ngrok = require('ngrok');
var SibApiV3Sdk = require('sib-api-v3-sdk');
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


let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';
let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
// const num=4;
// module.exports = {
//     sendEmail : sendSmtpEmail,
//     apiInstance : apiInstance,
//     num : num
// }
if(count==1){

}


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