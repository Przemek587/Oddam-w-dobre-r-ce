import React, {useState, useEffect} from "react";
import {HashRouter,Route,Link,Switch,NavLink,} from 'react-router-dom';
import Decoration from "../assets/assets/Decoration.svg"

const Login=()=>{

    const[email,setEmail]= useState("");
    const[password,setPassword]=useState("");

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    };
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    };
    const handleLoginValidation=(e)=>{
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regEmail.test(email)){
            alert( 'Niepoprawny Email');
        }else if(password.length<6){
            alert("Hasło musi mieć przynajmniej 6 znaków")
        }else{
            alert("udało się zalogować")
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
        <div className="logRegContainer">
            <h1 className="logRegHeader">Zaloguj się</h1>
            <img className="logRegImg" src={Decoration}/>
            <form className="logRegForm" onSubmit={handleLoginValidation}>
                <div className="logRegFormContainer">
                <label for="email" >Email</label>
                <input type="text" name="Email" onChange={handleEmail}/>
                <label for="password">Hasło</label>
                <input type="password" onChange={handlePassword} />
                </div>
                <div className="logRegButtonsContainer">
                    <input type="submit" value="Zaloguj" onMouseOver={bordersButtons} onMouseLeave={changeBorderBack}></input>
                    <Link to="/registration"  onMouseOver={bordersButtons} onMouseLeave={changeBorderBack}>Załóż konto</Link>
                </div>
            </form>

        </div>
        </>
        
    )
};

export default Login;