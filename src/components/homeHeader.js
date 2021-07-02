import React from "react";
import {Link} from 'react-router-dom';
import HomeHeroImage from "../assets/assets/Home-Hero-Image.jpg";
import Decoration from "../assets/assets/Decoration.svg"
import NavBar from "./navBar";

const HomeHeader =()=>{
    function changeBorder(e) {
        e.target.style.border = "0.75px solid #FAD648"
    };
    function changeBorderBack(e) {
        e.target.style.border = "0.75px solid transparent"
    }
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
};
export default HomeHeader;