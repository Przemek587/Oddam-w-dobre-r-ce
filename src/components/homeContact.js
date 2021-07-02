import React, {useState, useEffect} from "react";
import BackgroundContact from "../assets/assets/Background-Contact-Form.jpg";
import Decoration from "../assets/assets/Decoration.svg";
import FacebookImg from "../assets/assets/Facebook.svg";
import InstagramImg from "../assets/assets/Instagram.svg";
const HomeContact =()=>{
    
    const[name,setName] = useState("");
    const[email,setEmail]  = useState("");
    const[message,setMessage] = useState("");

    const handleName=(e)=>{
        setName(e.target.value)
    };
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    };
    const handleMessage=(e)=>{
        setMessage(e.target.value)
    }

    const handleSendMessage=()=>{
        const msg = document.querySelector(".msgSuccess")
        const msgErr = document.querySelector(".msgError")
        const messages = {
            name: name,
            email: email,
            message: message
        }    
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact",{
            method: "POST",
            body: JSON.stringify(messages),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
        .then(messages => {
            if(messages.status==="success"){
                msg.style.display="flex"
                msgErr.style.display="none"
            }else
            if(messages.status==="error"){
                msgErr.style.display="flex"
                msg.style.display="none"
            }
        })
        .catch(error => {
            console.log(error);
        });
    }
    return(
        <>
        <div className="contactContainer" id="section5" style={{backgroundImage: `url(${BackgroundContact})`}}>
            <div className="formContainer">
                <h1>Skontakuj się z nami</h1>
                <img className="logRegImg" src={Decoration}/>
                <h2 className="msgSuccess">Twoja wiadomość została wysłana</h2>
                <h2 className="msgError">Twoja wiadomość nie została wysłana, niepoprawne imie, mail, albo wiadomość jest za krótka(min 120znakow)</h2>
                <form className="contactUsForm">
                    <div className="contactNameEmail">
                        <div className="contactName">
                            <label for="name">Wpisz swoje imie</label>
                            <input type="text" onChange={e=>{handleName(e)}}></input>
                        </div>
                        <div className="contactEmail">
                            <label for="email" >Wpisz swój email</label>
                            <input type="email" onChange={e=>{handleEmail(e)}}></input>
                        </div>
                    </div>
                    <div className="contactMsg">
                        <label for="message">Wpisz swoją wiadomość</label>
                        <textarea className="contactMessage" rows="5" minLength="120" onChange={e=>{handleMessage(e)}}></textarea>
                    </div>
                    <div className="contactBtnBox">
                        <input type="submit" value="Wyślij" className="contactBtn" onClick={()=>{handleSendMessage()}}></input>
                    </div>
                </form>
            </div>
        </div>
            <div className="footerContainer">
                <div className="footerContent">
                    <div className="footerHeader">
                    <h2>Copyright by Coders Lab</h2>
                    </div>
                    <div className="footerImg">
                    <img className="facebookimg" src={FacebookImg}/>
                    <img className="instagramImg" src={InstagramImg}/>
                </div>
                </div>
            </div>
        </>
    )
    
};

export default HomeContact;