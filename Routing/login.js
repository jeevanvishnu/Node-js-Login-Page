const express = require('express')
const router = express.Router()
const userName = "Jeevan"
const passwardDb = "admin"

// Middleware to prevent access to login page after login

function isLogged (req,res,next){
    if(req.session.userName){
        res.redirect('/home')
    }else{
        next()
    }
}
// Login page routing

router.get('/',isLogged,(req,res)=>{
        res.render('index',{name:'',message:''})
})


router.post('/login',isLogged,(req,res)=>{
    const {name , password } = req.body  
    if(userName == name && passwardDb === password){
        req.session.userName = userName 
        res.redirect('home');
    }else{
        res.render('index',{name:'',message:'Invalid passward'})
    }
})


// logout session 
router.get('/logout',(req,res)=>{
        req.session.destroy((err)=>{
            if(err){
                res.redirect('/home')
            }else{
                res.redirect('/')
            }
        })
   
    
})

module.exports = router