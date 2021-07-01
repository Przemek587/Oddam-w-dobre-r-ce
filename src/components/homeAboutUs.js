import React from "react";
import Decoration from "../assets/assets/Decoration.svg";
import Signature from "../assets/assets/Signature.svg";
import People from "../assets/assets/People.jpg"

 const HomeAboutUs =()=>{
     return(
         <>
         <div className="aboutUsContainer" id="section3">
            <div className="aboutUsText">
                <h1>O nas</h1>
                <img className="logRegImg" src={Decoration}/>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>   
                <img className="signature" src={Signature}/>
            </div>
            <div className="aboutUsImg">
                <img className="peopleImg" src={People}/>
            </div>
         </div>
         </>
     )
 };

 export default HomeAboutUs;