const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const flash = require('connect-flash')
var bodyParser = require('body-parser')


const PORT = process.env.PORT 

// Initialize express application 
const app = express();

let session = require('express-session')
// let passport = require('./helper/ppConfig')

app.use(session({
    secret: process.env.secret,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 360000}
}))

// app.use(passport.initialize())
// app.use(passport.session())

// app.use(flash());

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))

// const expressLayouts = require("express-ejs-layouts")

// look into views folder for a file named as layouts.ejs
// app.use(expressLayouts);


// Import Routes
const frontpageRoute = require('./routes/frontpage')
const mainRoute = require('./routes/main')

// mount routes
app.use('/', frontpageRoute)
app.use('/main', mainRoute)

// nodejs to look in a folder called views for all ejs files
app.set("view engine", "ejs")




mongoose.connect(process.env.mongoDBURL,{
    useNewURLParser: true,
    useUnifiedTopology: true,
},
() => {
    console.log("mongodb connected successfully")
});

app.listen(PORT, ()=> console.log(`App is running on ${PORT}`));