let express = require("express")
let login = express()

login.get("/login",function(req,res){
res.send('ok')
})
module.exports = login;