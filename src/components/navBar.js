import React from "react";
import { Link } from "react-scroll";


const NavBar=()=>{
    function changeBorder(e) {
        e.target.style.border = "0.75px solid #3C3C3C"
    };
    function changeBorderBack(e) {
        e.target.style.border = "0.75px solid transparent"
    };
    return(
        <>
        <nav className="nav" id="navbar">
                <div className="navContent">
                <ul className="navItems">
                    <Link to="section1" className="navItem" style={{border:"0.75px solid transparent"}} onMouseOver={changeBorder} onMouseLeave={changeBorderBack}>Start</Link>
                    <Link to="section2" className="navItem" style={{border:"0.75px solid transparent"}} onMouseOver={changeBorder} onMouseLeave={changeBorderBack}>O co chodzi?</Link>
                    <Link to="section3" className="navItem" style={{border:"0.75px solid transparent"}} onMouseOver={changeBorder} onMouseLeave={changeBorderBack}>O nas</Link>
                    <Link to="section4" className="navItem" style={{border:"0.75px solid transparent"}} onMouseOver={changeBorder} onMouseLeave={changeBorderBack}>Fundacja i organizacje</Link>
                    <Link to="section5" className="navItem" style={{border:"0.75px solid transparent"}} onMouseOver={changeBorder} onMouseLeave={changeBorderBack}>Kontakt</Link>
                </ul>
                </div>
            </nav>  
        </>
    )
};

export default NavBar;