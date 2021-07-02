import React from "react";
import {Link} from 'react-router-dom';
import Decoration from "../assets/assets/Decoration.svg";
import Icon1 from "../assets/assets/Icon-1.svg";
import Icon2 from "../assets/assets/Icon-2.svg";
import Icon3 from "../assets/assets/Icon-3.svg";
import Icon4 from "../assets/assets/Icon-4.svg";


const HomeSimpleSteps =()=>{
    function changeBorder(e){
        e.target.style.border = "0.75px solid #3C3C3C;"
    };
    function changeBorderBack(e) {
        e.target.style.border = "none"
    };
    return(
        <>
        <div className="simpleStepsContainer" id="section2">
            <h1>Wystarczą 4 proste kroki</h1>
            <img className="logRegImg" src={Decoration}/>
            <div className="simpleStepsContent">
                <div className="simpleStepsSingle">
                    <img className="firstIcon" src={Icon1}/>
                    <h2>Wybierz rzeczy</h2>
                    <span></span>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="simpleStepsSingle">
                    <img className="secondIcon" src={Icon2}/>
                    <h2>Spakuj je</h2>
                    <span></span>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="simpleStepsSingle">
                    <img className="thirdIcon" src={Icon3}/>
                    <h2>Zdecyduj komu chcesz pomóc</h2>
                    <span></span>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="simpleStepsSingle">
                    <img className="fourthIcon" src={Icon4}/>
                    <h2>Zamów kuriera</h2>
                    <span></span>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="singleStepsButton">
                <Link to="/login" className="singleStepsBtn" onMouseOver={changeBorder} onMouseLeave={changeBorderBack}>ODDAJ RZECZY</Link>
            </div>
        </div>
        </>
    )
};

export default HomeSimpleSteps;