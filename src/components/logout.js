import React from "react";
import {Link} from 'react-router-dom';
import Decoration from "../assets/assets/Decoration.svg"


const Logout=()=>{

    function changeBorder(e) {
        e.target.style.border = "0.75px solid #FAD648"
    };
    function changeBorderBack(e) {
        e.target.style.border = "none"
    };
    function bordersButtons(e) {
        e.target.style.border = "0.75px solid #3C3C3C"
    };

    return(
        <>
        <div className="homeHeader">
            <div className="homeImgContainer">
            </div>
            <div className="homeHeaderContainer">
                <div className="logRegButtons">
                    <Link to = "/login" className="btn logRegBtn logBtn" onMouseOver={changeBorder} onMouseLeave={changeBorderBack}>Zaloguj</Link>
                    <Link to = "/registration" className="btn logRegBtn" onMouseOver={changeBorder} onMouseLeave={changeBorderBack}>Załóż konto</Link>
                </div>
            <nav className="nav" id="navbar">
                <div className="navContent">
                <ul className="navItems">
                    <Link to="/" className="navItem">Start</Link>
                    <li className="navItem">O co chodzi?</li>
                    <li className="navItem">O nas</li>
                    <li className="navItem">Fundacja i organizacje</li>
                    <li className="navItem">Kontakt</li>
                </ul>
                </div>
            </nav>        
            </div>
        </div>
        <div className="logoutContainer">
            <h1 className="logRegHeader">Wylogowanie nastąpiło</h1>
            <h1 className="logRegHeader">pomyślnie!</h1>
            <img className="logRegImg" src={Decoration}/>
            <Link to="/" className="logoutBtn   ">Strona Główna</Link>
        </div>
        </>
    )
};

export default Logout;