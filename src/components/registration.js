import React, { useState, useRef } from "react";
import {Link, useHistory} from 'react-router-dom';
import Decoration from "../assets/assets/Decoration.svg"
import { useAuth } from "../contexts/AuthContext";

export default function Registration(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth();
    const[error,setError] = useState("")
    const[loading,setLoading] = useState(false)
    const history = useHistory()

  
    async function handleSubmit(e){
        e.preventDefault()          

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("hasła nie sa takie same")
        }

        try{
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/oddam-rzeczy")
        }catch{
            setError("nie udało się założyć konta")
        }
        setLoading(false)
    }
  
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
            <h2>{error}</h2>
            <form className="logRegForm" onSubmit={handleSubmit} >
                <div className="logRegFormContainer">
                <label for="email">Email</label>
                <input type="text" name="Email" ref={emailRef}/>
                <label for="password">Hasło</label>
                <input type="password"ref={passwordRef}/>
                <label for="password">Powtórz hasło</label>
                <input type="password" ref={passwordConfirmRef}/>
                </div>
                <div className="logRegButtonsContainer">
                    <Link to="login" onMouseOver={bordersButtons} onMouseLeave={changeBorderBack}>Zaloguj</Link>
                    <input type="submit" value="Załóż konto" disabled={loading} onMouseOver={bordersButtons} onMouseLeave={changeBorderBack}></input>
                </div>
            </form>

        </div>
        </>
        
    )
};

// export default Registration;