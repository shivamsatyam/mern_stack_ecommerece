import React,{useState} from 'react'
import {BsFillPersonFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {RiLockPasswordFill} from "react-icons/ri"


function Register() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    return (
        <div className="form">
            <div className="form_box">
                <BsFillPersonFill className="form_box_icon" size={25}/>
                <input placeholder="Name" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>   

             <div className="form_box">
                <AiOutlineMail className="form_box_icon" size={25}/>
                <input placeholder="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>   

             <div className="form_box">
                <RiLockPasswordFill className="form_box_icon" size={25}/>
                <input placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>    

             <div className="form_box">
                <BsFillPersonFill className="form_box_icon" size={31}/>
                <input placeholder="fil" type="file"/>
            </div>    

            
            <div className="form_btn">
                <button>Register</button>
            </div>


        </div>
    )
}

export default Register
