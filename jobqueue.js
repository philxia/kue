var kue = require('./')
    , express = require('express');
var cors = require('cors');
// create our job queue

var jobs = kue.createQueue();

// start the UI
var app = express();

// Authenticator

// I have to disable the basic auth because Chrome has a bug on this
// https://code.google.com/p/chromium/issues/detail?id=96007
// Issue 96007: CORS preflight AJAX request on page with self-signed certificate

// app.use(function(req, res, next) {
//     var auth;

//     // check whether an autorization header was send    
//     if (req.headers.authorization) {
//       // only accepting basic auth, so:
//       // * cut the starting "Basic " from the header
//       // * decode the base64 encoded username:password
//       // * split the string at the colon
//       // -> should result in an array
//       auth = new Buffer(req.headers.authorization.substring(6), 'base64').toString().split(':');
//     }

//     // checks if:
//     // * auth array exists 
//     // * first value matches the expected user 
//     // * second value the expected password
//     if (!auth || auth[0] !== 'foo' || auth[1] !== 'bar') {
//         // any of the tests failed
//         // send an Basic Auth request (HTTP Code: 401 Unauthorized)
//         res.statusCode = 401;
//         // MyRealmName can be changed to anything, will be prompted to the user
//         res.setHeader('WWW-Authenticate', 'Basic realm="MyRealmName"');
//         // this will displayed in the browser when authorization is cancelled
//         res.end('Unauthorized');
//     } else {
//         // continue with processing, user was authenticated
//         next();
//     }
// });

// Add headers
app.use(cors());
app.use(kue.app);
app.listen(3001);
console.log('UI started on port 3001');