import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {Link, useHistory} from 'react-router-dom';
import NavBar from "./navBar";
import Decoration from "../assets/assets/Decoration.svg";
import FormHeroImage from "../assets/assets/Form-Hero-Image.jpg";

const Dashboard = () =>{
    const[error,setError] = useState("")
    const{currentUser, logout} = useAuth()
    const history = useHistory()

    function changeBorder(e) {
        e.target.style.border = "0.75px solid #FAD648"
    };
    function changeBorderBack(e) {
        e.target.style.border = "0.75px solid transparent"
    }


    async function handleLogout() {
        setError("")

        try{
        await logout()
        history.push("/login")
        }catch{
            setError("nie udało sie wylogować")
        }
    }


    return(
        <>
        <div className="homeHeader" id="section1">
            <div className="homeImgContainer">
                <img className="homeImg" src={FormHeroImage} alt="HomeImg"/>
            </div>
            <div className="homeHeaderContainer">
                <div className="logRegButtons">
                    <h2>Cześć {currentUser.email}!</h2>
                    <Link to = "/login" className="btn logRegBtn logBtn" style={{border:"0.75px solid transparent"}} onMouseOver={changeBorder} onMouseLeave={changeBorderBack}>Oddaj rzeczy</Link>
                    <Link to = "/logout" className="btn logRegBtn" style={{border:"0.75px solid transparent"}} onMouseOver={changeBorder} onMouseLeave={changeBorderBack} onClick={handleLogout}>Wyloguj</Link>
                </div>
            <NavBar/>
            <div className="homeTextContainer">
            <h2 className="homeHeaderText homeHeaderTextFirst">Oddaj rzeczy, których już nie chcesz</h2>      
            <h2 className="homeHeaderText">POTRZEBUJĄCYM</h2>
            <img className="logRegImg" src={Decoration}/>
            <h3>Wystarczą 4 proste kroki: </h3>
            <div className="homeHeaderBtns">
            <button >Oddaj rzeczy</button>
            <button>Zorganizuj zbiórke</button>
            </div>
            </div>
            </div>
        </div>
        </>
    )
};

export default Dashboard