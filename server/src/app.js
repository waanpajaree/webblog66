let express = require('express')
let bodyParser = require('body-parser')
const {sequelize} = require('./models')

const config = require('./config/config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require('./route')(app)

app.get('/status', function (req, res){
  res.send('Hello nodejs server belong to me!')
})

app.get('/hello/:name', function (req, res) {
  console.log('Hello - ' + req.params.name)
  res.send('Say hello with ' + req.params.name)
})

app.get('/user/:userId', function(req,res){
    res.send('ดูข้อมูลผู้ใช้' + req.params.userId)
})

app.get('/users', function(req,res){
    res.send('ดูข้อมูลผู้ใช้ทั้งหมด')
})

app.post('/user', function (req,res){
    res.send('สร้างผู้ใช้' + JSON.stringify(req.body))
})

app.put('/user/:userId', function (req,res){
    res.send('แก้ไขข้อมูลผู้ใช้' + req.params.userId + " " + JSON.stringify(req.body.name))
})

app.delete('/user/:userId', function (req,res){
    res.send('ลบข้อมูลผู้ใช้' + req.params.userId + " " + JSON.stringify(req.body.name))
})




let port = process.env.PORT || config.port
sequelize.sync({ force: false }).then(() => {
  app.listen(port,function(){
    console.log('server running on ' + port)
})
})
