const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const artistrgtn = require('./routes/artistregstn');
const bandrgtn = require('./routes/bandregistration');
const adminrgtn = require('./routes/adminregtn');
const comedianrgtn = require('./routes/comedianrgtn');
const contactF = require('./routes/contactus');
const dashb = require('./routes/dash')
const sign = require('./routes/auth');
const About = require('./routes/about');
const Postb = require('./routes/blogpost');
const comed = require('./routes/comedian');
const bandb = require('./routes/band');
const artists = require('./routes/artists');
const Band = require('./routes/bandprofile');
const Update = require('./routes/update');


const User = require('./models/usermodel');

const passport = require('passport');


const expressSession = require("express-session")({
    secret: "secret",
    resave: false,
    saveUninitialized: false
});

require('dotenv').config();
const app = express();


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
});

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/images', express.static(__dirname + '/public/images'))
    //configeration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')



app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());


passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//admin



//routes
app.use('/registerartist', artistrgtn);
app.use('/registerband', bandrgtn);
app.use('/registeradmin', adminrgtn);
app.use('/registercomedian', comedianrgtn);
app.use('/contactUS', contactF);
app.use('/signinpage', sign);
app.use('/aboutuspage', About);
app.use('/postblogpage', Postb);
app.use('/comedianspage', comed);
app.use('/bandpage', bandb);
app.use('/artistspage', artists);
app.use('/bandprofile', Band);
app.use('/clarkdashboard', dashb);
app.use('/updateprofile', Update);


//home page    
app.get('/', (req, res) => {
    res.render('index');
});
//blog page
app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/views/blogp.html');
});
//vinka route
app.get('/vinka', (req, res) => {
    res.sendFile(__dirname + '/views/vinka.html');
});
//kenzo route
app.get('/kenzo', (req, res) => {
    res.sendFile(__dirname + '/views/kenzo.html');
});
//mpamile route
app.get('/mpamile', (req, res) => {
    res.sendFile(__dirname + '/views/mpamile.html');
});
//afrigo route
app.get('/afrigo', (req, res) => {
    res.sendFile(__dirname + '/views/afrigo.html');
});
//admin welcom
app.get('/welcomeadmin', (req, res) => {
    res.sendFile(__dirname + '/views/welcom.html');
});



app.get('*', (req, res) => {
    res.status(404).send('page not found');
});
//server
app.listen(3000, function() {
    console.log('listening on 3000');
});