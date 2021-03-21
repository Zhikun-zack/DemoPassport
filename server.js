const express = require('express')
const app = express();

//set engine to ejs, default path will be "./views"
app.set('view-engine', 'ejs')

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
app.post('/register', (req, res) => {

})

app.listen(3000)