import React,{useState} from 'react'
import {BsFillPersonFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import {RiLockPasswordFill} from "react-icons/ri"


function Register() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [cpassword,setCPassword] = useState("")
    const [file,setFile] = useState(null)

    const register = ()=>{
        let xhr = new XMLHttpRequest()
        let formData = new FormData()
        formData.append("name",name)
        formData.append("email",email)
        formData.append("password",password)
        formData.append("cpassword",cpassword)
        formData.append("file",file)

        xhr.open("POST","https://5000-purple-cougar-r1k5cjvu.ws-us17.gitpod.io/register",true)
        
        xhr.upload.addEventListener("progress",(e)=>{
            console.log(e)
        })

        xhr.onload = function (){
                if(this.status==200){
                    console.log(this.responseText.json())
                }
        }


        xhr.setRequestHeader("Content-Type","application/json")


        xhr.send(JSON.stringify(formData))    

    }

    return (
        <form className="form" onSubmit={(e)=>e.preventDefault()} method="post" encType="multipart/form-data">
            <div className="form_box">
                <BsFillPersonFill className="form_box_icon" size={25}/>
                <input name="name" placeholder="Name" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>   

             <div className="form_box">
                <AiOutlineMail className="form_box_icon" size={25}/>
                <input name="password" placeholder="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>   

             <div className="form_box">
                <RiLockPasswordFill className="form_box_icon" size={25}/>
                <input name="password" placeholder="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>   
            <div className="form_box">
                <RiLockPasswordFill className="form_box_icon" size={25}/>
                <input name="cpassword" placeholder="confirm password" type="password" value={cpassword} onChange={(e)=>setCPassword(e.target.value)}/>
            </div>    

             <div className="form_box">
                <BsFillPersonFill className="form_box_icon" size={31}/>
                <input name="file" onChange={(e)=>setFile(e.target.files[0])} placeholder="fil" type="file" name="file" encyptr/>
            </div>    

            
            <div className="form_btn">
                <button onClick={register}>Register</button>
            </div>


        </form>
    )
}

export default Register
