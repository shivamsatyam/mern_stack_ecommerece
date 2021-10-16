const express = require("express")
const app = express()
const port = 5000 || process.env.PORT
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const validator = require("validator")

mongoose.connect('mongodb+srv://shivamsatyam:shivamsatyam123@cluster0.hrigk.mongodb.net/shivamecommerce?retryWrites=true&m=majority',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
	console.log('the connection is succesfully established')
}).then(()=>{
    console.log("connection succesfully established")
}).catch((err)=>{
	console.log(err)
})



const static_path = path.join(__dirname,'public')
app.use(express.static(static_path))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use("/",(req,res)=>{
    res.send("Hello")
})




app.listen(port,(req,res)=>{
    console.log("app is running")
})



