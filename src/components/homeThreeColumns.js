import React from "react";
import Background from"../assets/assets/3-Columns-Background.png"

const HomeThreeColumns =()=>{
   
    return(
        <>
        <div className="threeColumnsContainer" id="section2" style={{backgroundImage: `url(${Background})`}}>
            <div className="singleColumn">
                <h1>10</h1>
                <h2>Oddanych worków</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="singleColumn">
                <h1>5</h1>
                <h2>WSPARTYCH ORGANIZACJI</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="singleColumn">
                <h1>7</h1>
                <h2>ZORGANIZOWANY ZBIÓREK</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            
        </div>
        </>
    )
};
export default HomeThreeColumns;