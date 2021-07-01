import React, { useState } from "react";
import {HashRouter,Route,Link,Switch,NavLink,} from 'react-router-dom';
import Decoration from "../assets/assets/Decoration.svg"

const Registration=()=>{

    const[email,setEmail]= useState("");
    const[password,setPassword]=useState("");
    const[password2,setPassword2]=useState("");

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    };
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    };
    const handlePassword2=(e)=>{
        setPassword2(e.target.value)
    }
    const handleRegValidation=(e)=>{
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regEmail.test(email)){
            alert( 'Niepoprawny Email');
        }
         else if(password.length<6){
            alert("Hasło musi mieć przynajmniej 6 znaków")
        }
        else if(password!==password2){
            alert("hasła nie są jednakowe")
        }else{
            alert("rejestracja przebiegła pomyślnie")
        }
    };

    function changeBorder(e) {
        e.target.style.border = "0.75px solid #FAD648"
    };
    function changeBorderBack(e) {
        e.target.style.border = "0.75px solid transparent"
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
                    <Link to = "/login" className="btn logRegBtn logBtn" style={{border:"0.75px solid transparent"}} onMouseOver={changeBorder} onMouseLeave={changeBorderBack}>Zaloguj</Link>
                    <Link to = "/registration" className="btn logRegBtn" style={{border:"0.75px solid transparent"}} onMouseOver={changeBorder} onMouseLeave={changeBorderBack}>Załóż konto</Link>
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
        <div className="logRegContainer">
            <h1 className="logRegHeader">Załóż konto</h1>
            <img className="logRegImg" src={Decoration}/>
            <form className="logRegForm" onSubmit={handleRegValidation}>
                <div className="logRegFormContainer">
                <label for="email">Email</label>
                <input type="text" name="Email" onChange={handleEmail}/>
                <label for="password">Hasło</label>
                <input type="password" onChange={handlePassword}/>
                <label for="password">Powtórz hasło</label>
                <input type="password" onChange={handlePassword2}/>
                </div>
                <div className="logRegButtonsContainer">
                    <Link to="login" onMouseOver={bordersButtons} onMouseLeave={changeBorderBack}>Zaloguj</Link>
                    <input type="submit" value="Załóż konto" onMouseOver={bordersButtons} onMouseLeave={changeBorderBack}></input>
                </div>
            </form>

        </div>
        </>
        
    )
};

export default Registration;