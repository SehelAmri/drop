let express = require('express')
let app = express()

app.listen("3000",console.log("WELCOME TO HOST 3000"))
app.use(express.static(__dirname+'/static'))
app.get('/',function(req,res){
    res.sendFile(__dirname + '/static/index.html')
})