const express = require("express")
const app = express()
const port = 5000 || process.env.PORT
const mongoose = require("mongoose")
const session = require("express-session")
const validator = require("validator")
const MongoStore = require('connect-mongo')(session)
const path = require("path")
const Users = require("./Users")
const bcrypt = require('bcryptjs')
const multer = require('multer')
const cors = require("cors")

app.use(cors())

app.use(session({
    secret:"shivamGmail",
    resave:false,
    saveUninitialized:true,
    store:new MongoStore({
        url:'mongodb+srv://shivamsatyam:shivamsatyam123@cluster0.hrigk.mongodb.net/shivamecommerce?retryWrites=true&m=majority',
        mongooseConnection:mongoose.connection,
        ttl:14*24*60*60
    })
}))



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



const Storage = multer.diskStorage({
	destination:'./public/upload',
	filename:(req,file,cb)=>{
		cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
	}
})

const upload = multer({
	storage:Storage
}).single('file')

app.get("/register",(req,res)=>{
    res.send("register")
})

app.post("/register",upload,(req,res,next)=>{
    res.set("Access-Control-Allow-Origin","*")
    Users.findOne({email:req.body.email}).then((data)=>{
         const isEmail = validator.isEmail(req.body.email)
         const checkPassword = req.body.password == req.body.cpassword   
        if (data){
            res.json({
                success:false,
                message:"Account is already created"
            })
        }

        if(!checkPassword){
            res.json({
                success:false,
                message:"password and confirm password does not match"
            })
        }

        if(!isEmail){
            res.json({
                success:false,
                message:"Please enter a valid email"
            })
        }

        const hash = bcrypt.hashSync(req.body.password,10)
        new User({
            name:req.body.name,
            email:req.body.email,
            password:hash,
            image:req.file.filename

        }).save((data,err)=>{
            if (err){
                throw err;
            }else{
                res.status(200).json({
                    success:true
                })
            }
        })



    })
})



app.listen(port,(req,res)=>{
    console.log("app is running")
})



