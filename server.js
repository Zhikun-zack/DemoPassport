const express = require('express')
const app = express();
//a library to help you hash passwords
const bcrypt = require('bcrypt')
//a middleware for authentication
const passport = require('passport')

const initializePassport = require('./passport-config')
initializePassport(passport)

const users = []

//set engine to ejs, default path will be "./views"
app.set('view-engine', 'ejs')
//parse the incoming requests with urlencoded payload, based on body-parser(a node.js three-party model)
//so you can get the body based on the input tag's name attribute
//extended false means using querystring model to handle this process otherwise using qs model
app.use(express.urlencoded( { extended: false}))

//router for home page
app.get('/', (req,res) => {
    res.render('index.ejs')
})

//router for login page
app.get('/login', (req, res) => {
    res.render('login.ejs')
})

//router for register page
app.get('/register', (req, res) => {
    res.render('register.ejs')
})

//router for register form post
app.post('/register', async (req, res) => {
    try{
        //using bcrypt to secret your password, using urlencoded to get the body content, 10 is how many time you hash this password
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    }catch{
        res.redirect('/register')
    }
    //console.log(users)
})

app.listen(3000)