import React, { useState } from 'react'
import MenuBar from "../screens/MenuBar"
import Login from "../components/Login"
import Register from '../components/Register'
import "../css/contact.css"

function Contact() {
    const [loginColor, setLoginColor] = useState("#fff")
    const [registerColor, setRegisterColor] = useState("orange")
    const [showLogin, setShowLogin] = useState(false)

    const setLColor = () => {
        setLoginColor("orange")
        setRegisterColor("#fff")
        setShowLogin(!showLogin)
    }

    const setRColor = () => {
        setLoginColor("#fff")
        setRegisterColor("orange")
        setShowLogin(!showLogin)
    }

    return (
        <>
            <MenuBar />
            <div className="contact">
                <div className="contact_title">
                    <div onClick={() => setLColor()} style={{ "borderBottom": `4px solid ${loginColor}` }} className="contact_title_box" >
                        Login
                    </div>
                    <div onClick={() => setRColor()} style={{ "borderBottom": `4px solid ${registerColor}` }} className="contact_title_box" >
                        Register
                    </div>


                </div>

                <div className="contact_window">
                    {
                        showLogin ? <Login /> : <Register />
                    }

                </div>


            </div>
        </>
    )
}

export default Contact
