let express = require("express")
let login = express()
const  bodyParser = require('body-parser');

login.use(bodyParser.json());
login.use(bodyParser.urlencoded({extended: false}))

login.set('view engine','ejs');
login.use('/views', express.static('views'))

login.get("/login",function(req,res){
res.render("Login")
})

login.post('/login',function(req,res){
console.log(req.body.email)
console.log(req.body.password)
})
module.exports = login;