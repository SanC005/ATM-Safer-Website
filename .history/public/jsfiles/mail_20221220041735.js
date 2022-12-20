// const lib = require('../../src/app');
// import {fn1} from '../../src/app.js';
// import {foo, bar} from '../../src/app.js';
// const foo = require('../../src/app.js');

// console.log( bar );
// apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
//     console.log('API called successfully. Returned data: ' + JSON.stringify(data));
//   }, function(error) {
//     console.error(error);
//   });


// fn1.sendTransacEmail({
    
//      "sender":{ "email":"sandeepcsrao@gmail.com", "name":"ATM"},
//      "subject":"Alert! Someone tried to enter your account.",
//      "htmlContent":"<!DOCTYPE html><html><body><h1>Dear Customer,</h1><p>Someone tried to enter you bank account unsuccessfully. Due to exceeding your maximum invalid PIN attempts, your account has been frozen. Please contact us if it was not you or you wish to have your account unfrozen.</p></body></html>",
//      "params":{
//         "greeting":"Thanking you",
//         "headline":"This is the default headline"
//      },
//    "messageVersions":[
//      //Definition for Message Version 1 
//      {
//          "to":[
//             {
//                "email":"sandeep222002rao@gmail.com",
//                "name":"The Customer"
//             }
            
//          ],
         
//       }
//    ]

// }).then(function(data) {
//   console.log(data);
// }, function(error) {
//   console.error(error);
// });
// const {num} = require('../../src/app');
// console.log(num);
import {SibApiV3Sdk} from '../../src/app.js' 
var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

sendSmtpEmail = {
    to: [{
        email: 'testmail@example.com',
        name: 'John Doe'
    }],
    templateId: 59,
    params: {
        name: 'John',
        surname: 'Doe'
    },
    headers: {
        'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
    }
};

apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});