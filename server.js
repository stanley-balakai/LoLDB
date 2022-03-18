const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const flash = require('connect-flash')
var bodyParser = require('body-parser')


const PORT = process.env.PORT 


const app = express();

let session = require('express-session')


app.use(session({
    secret: process.env.secret,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 360000}
}))



app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))


const frontpageRoute = require('./routes/frontpage')
const mainRoute = require('./routes/main')


app.use('/', frontpageRoute)
app.use('/main', mainRoute)


app.set("view engine", "ejs")




mongoose.connect(process.env.mongoDBURL,{
    useNewURLParser: true,
    useUnifiedTopology: true,
},
() => {
    console.log("mongodb connected successfully")
});

app.listen(PORT, ()=> console.log(`App is running on ${PORT}`));


