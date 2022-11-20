//Load express module
var express = require('express');
var app = express();
const bodyParser  = require('body-parser');

//Put new Express app inside app variable
const axios = require('axios');

//Set views property and views engine
app.use(bodyParser.urlencoded());

app.set('view engine', 'ejs');


//!!!!!!HOME ROUTE, NOT STANDARD SETUP
//When user hits the home page, 'index' shows in browser
app.get('/index', function(req, res) {

    //public api to call api that delivers random users
        axios.get('https://randomuser.me/api/?result=0')
        .then((response)=>{
            let userData = response.data;
            console.log(userData);
            //use res.render to load up an ejs view file
            res.render('pages/index', {
                users: userData
            });
        });
});
//!!!!!!HOME ROUTE, NOT STANDARD SETUP


//Start the web server which is the express application on port 8080 and print server start message to console
app.listen(8081);
console.log('8081 is the magic port :)');