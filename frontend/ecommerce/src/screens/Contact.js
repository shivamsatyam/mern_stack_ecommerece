import React,{useState} from 'react'
import MenuBar from "../screens/MenuBar"
import Login from "../components/Login"
import Register  from '../components/Register'
import "../css/register.css"

function Contact() {
    const [loginColor,setLoginColor] = useState("black")
    const [registerColor,setRegisterColor] = useState("orange")
    const [showLogin,setShowLogin] = useState(false)

    const setLColor = ()=>{
        setLoginColor("orange")
        setRegisterColor("black")
        setShowLogin(!showLogin)
    }

    const setRColor = ()=>{
        setLoginColor("black")
        setRegisterColor("orange")
        setShowLogin(!showLogin)
    }

    return (
        <>
            <MenuBar />
            <div className="contact">
               <div className="contact_title">
                   <div onClick={()=>setLColor()} style={{"color":{loginColor}}} className="contact_title_box" >
                       Login
                   </div>
                   <div onClick={()=>setRColor()} style={{"color":{registerColor}}} className="contact_title_box" >
                       Register
                   </div>
               </div>

               {
                   showLogin?<Login/>:<Register/>
               }

            </div>
        </>
    )
}

export default Contact
