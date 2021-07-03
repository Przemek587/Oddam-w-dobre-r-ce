import React, { useEffect, useState } from "react";
import {Link, useHistory} from 'react-router-dom';
import HomeHeroImage from "../assets/assets/Home-Hero-Image.jpg";
import Decoration from "../assets/assets/Decoration.svg"
import NavBar from "./navBar";
import { useAuth } from "../contexts/AuthContext";


const HomeHeader =()=>{
    function changeBorder(e) {
        e.target.style.border = "0.75px solid #FAD648"
    };
    function changeBorderBack(e) {
        e.target.style.border = "0.75px solid transparent"
    }
    const{currentUser, logout} = useAuth()
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const[error,setError] = useState("")
    const history = useHistory()

    useEffect(()=>{
        if(currentUser){
            setIsLoggedIn(true)
        }
    })

    async function handleLogout() {
        setError("")

        try{
        await logout()
        history.push("/login")
        }catch{
            setError("nie udało sie wylogować")
        }
    }


    if(isLoggedIn===true){
        return(
            <>
        <div className="homeHeader" id="section1">
            <div className="homeImgContainer">
                <img className="homeImg" src={HomeHeroImage} alt="HomeImg"/>
            </div>
            <div className="homeHeaderContainer">
                <div className="logRegButtons">
                <h2>Cześć {currentUser.email}!</h2>
                    <Link to = "/" className="btn logRegBtn logBtn" style={{border:"0.75px solid transparent"}} onMouseOver={changeBorder} onMouseLeave={changeBorderBack}>Oddaj rzeczy</Link>
                    <Link to = "/logout" className="btn logRegBtn" style={{border:"0.75px solid transparent"}} onMouseOver={changeBorder} onMouseLeave={changeBorderBack} onClick={handleLogout}>Wyloguj</Link>
                </div>
            <NavBar/>
            <div className="homeTextContainer">
            <h2 className="homeHeaderText homeHeaderTextFirst">Zacznij pomagać</h2>      
            <h2 className="homeHeaderText">Oddaj niechciane rzeczy w zaufane ręce</h2>
            <img className="logRegImg" src={Decoration}/>
            <div className="homeHeaderBtns">
            <Link to="oddaj-rzeczy" className="homeLinks">Oddaj rzeczy</Link>
            <Link to="oddaj-rzeczy" className="homeLinks">Zorganizuj zbiórke</Link>
            </div>
            </div>
            </div>
        </div>
        </>
        )
    }else{

        return(
            <>
        <div className="homeHeader" id="section1">
            <div className="homeImgContainer">
                <img className="homeImg" src={HomeHeroImage} alt="HomeImg"/>
            </div>
            <div className="homeHeaderContainer">
                <div className="logRegButtons">
                    <Link to = "/login" className="btn logRegBtn logBtn" style={{border:"0.75px solid transparent"}} onMouseOver={changeBorder} onMouseLeave={changeBorderBack}>Zaloguj</Link>
                    <Link to = "/registration" className="btn logRegBtn" style={{border:"0.75px solid transparent"}} onMouseOver={changeBorder} onMouseLeave={changeBorderBack}>Załóż konto</Link>
                </div>
            <NavBar/>
            <div className="homeTextContainer">
            <h2 className="homeHeaderText homeHeaderTextFirst">Zacznij pomagać!</h2>      
            <h2 className="homeHeaderText">Oddaj niechciane rzeczy w zaufane ręce</h2>
            <img className="logRegImg" src={Decoration}/>
            <div className="homeHeaderBtns">
            <button >Oddaj rzeczy</button>
            <button>Zorganizuj zbiórke</button>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}
};
export default HomeHeader;