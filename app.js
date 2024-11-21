const express = require("express")
const session = require('express-session')
require('dotenv').config()
// import routes
const authRoute = require('./Routing/login')
const homeRoute = require('./Routing/home')
// use app
const app = express()

app.use(function(req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
  });

app.use(
    session({
        secret: 'keys', 
        resave: false,
        saveUninitialized: true,
        cookie:{secure:false}
    })
);

// set veiw engine
app.set('view engine', 'ejs');

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use('/',authRoute)
app.use('/home',homeRoute)


app.u
// error status

app.use((req,res)=>{
    res.status(404).send('Page Not Found!')
})

// set port value

const PORT = process.env.PORT || 3001

// connect to sever

app.listen(PORT, () => console.log(`The Port Has Running on ${PORT}`))


