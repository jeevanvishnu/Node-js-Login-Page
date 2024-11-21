const esxpress = require("express")
const router = esxpress.Router()

router.get('/',(req,res)=>{
   if(req.session.userName){

       res.render('home')
   }else{
    res.redirect('/')
   }
})

module.exports= router