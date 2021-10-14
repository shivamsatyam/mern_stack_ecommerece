import React from 'react'
import {BiMouse} from "react-icons/bi"
import "../css/Home.css"

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <p>Welcome to Ecommerce</p>
                <h2>Find amazing products below</h2>

                <button className="home__header__button">
                    <p>Scroll</p>
                    <BiMouse color={"#000"} size={12}/>
                </button>
            </div>    
        </div>
    )
}

export default Home
