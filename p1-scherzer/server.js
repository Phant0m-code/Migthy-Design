/**
 * This is the server which is responsible for the starting/controlling the Web App. Cheers
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const dotenv = require('dotenv');


// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
/*Engine Type is ejs*/
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('router'));
dotenv.config({ path: './.env' });

// Set up static folder for public assets
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'router')));
app.use(express.static(path.join(__dirname, 'img')));


// Import the router module
const router = require('./router/pages');

// Use the router middleware
app.use('/', router);


app.listen(3070, () => {
    console.log('Scherzer Landingpage started successfully on port 3070 !');
});