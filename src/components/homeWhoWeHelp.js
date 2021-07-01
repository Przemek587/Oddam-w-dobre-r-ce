import React, {useState, useEffect} from "react";
import Decoration from "../assets/assets/Decoration.svg";


const HomeWhoWeHelp =()=>{
    
    const[showContent1_1,setShowContent1_1]=useState(true);
    const[showContent1_2,setShowContent1_2]=useState(false);
    const[showContent1_3,setShowContent1_3]=useState(false);
    const[showContent2_1,setShowContent2_1]=useState(false);
    const[showContent2_2,setShowContent2_2]=useState(false);
    const[showContent3,setShowContent3]=useState(false);

    function changeBorder(e) {
        e.target.style.border = "0.75px solid #3C3C3C"
    };
    function changeBorderBack(e) {
        e.target.style.border = "0.75px solid transparent"
    };

    const handleShowContent1_1=()=>{
        setShowContent1_1(true);
        setShowContent1_2(false);
        setShowContent1_3(false);
        setShowContent2_1(false);
        setShowContent2_2(false);
        setShowContent3(false);
    };
    const handleShowContent1_2=()=>{
        setShowContent1_1(false);
        setShowContent1_2(true);
        setShowContent1_3(false);
        setShowContent2_1(false);
        setShowContent2_2(false);
        setShowContent3(false);
    };
    const handleShowContent1_3=()=>{
        setShowContent1_1(false);
        setShowContent1_2(false);
        setShowContent1_3(true);
        setShowContent2_1(false);
        setShowContent2_2(false);
        setShowContent3(false);
    };
    const handleShowContent2_1=()=>{
        setShowContent1_1(false);
        setShowContent1_2(false);
        setShowContent1_3(false);
        setShowContent2_1(true);
        setShowContent2_2(false);
        setShowContent3(false);
    };
    const handleShowContent2_2=()=>{
        setShowContent1_1(false);
        setShowContent1_2(false);
        setShowContent1_3(false);
        setShowContent2_1(false);
        setShowContent2_2(true);
        setShowContent3(false);
    };
    const handleShowContent3=()=>{
        setShowContent1_1(false);
        setShowContent1_2(false);
        setShowContent1_3(false);
        setShowContent2_1(false);
        setShowContent2_2(false);
        setShowContent3(true);
    };

    if(showContent1_1==true){
        return(
            <>
        <div className="whoWeHelpContainer" id="section4">
            <div className="whoWeHelpHeader">
                <h1>Komu Pomagamy</h1>
                <img className="logRegImg" src={Decoration}/>
                <div className="whoWeHelpBtns">
                    <button className="whoWeHelBtn" onClick={handleShowContent1_1} style={{border:"1px solid #707070"}}>Fundacjom</button>
                    <button className="whoWeHelBtn" onClick={handleShowContent2_1}>Organizacjom pozarządowym</button>
                    <button className="whoWeHelBtn" onClick={handleShowContent3}>Lokalnym zbiórkom</button>
                </div>
            </div>
            <div className="whoWeHelpContent1 whoWeHelpBox">
                <h2>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h2>
                <div className="whoWeHelpContent1-1 whoWeHelpContent">
                    <h3>Fundacja “Dbam o Zdrowie”</h3>
                    <p className="rightPar">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    <p className="withBorder">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    <span></span>
                    <h3>Fundacja “Dla dzieci”</h3>
                    <p className="rightPar">ubrania, meble, zabawki</p>
                    <p className="withBorder">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    <span></span>
                    <h3>Fundacja “Bez domu”</h3>
                    <p className="rightPar">ubrania, jedzenie, ciepłe koce</p>
                    <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                </div>
            </div>
            <div className="whoWeHelpContent1Btns">
                <button className="content1btn1" onClick={handleShowContent1_1} style={{border:"1px solid #707070"}}>1</button>
                <button className="content1btn2" onClick={handleShowContent1_2}>2</button>
                <button className="content1btn3" onClick={handleShowContent1_3}>3</button>
            </div>
        </div>
        </>
    )
}if(showContent1_2==true){
    return(
        <>
    <div className="whoWeHelpContainer" id="section4">
        <div className="whoWeHelpHeader">
            <h1>Komu Pomagamy</h1>
            <img className="logRegImg" src={Decoration}/>
            <div className="whoWeHelpBtns">
                <button className="whoWeHelBtn" onClick={handleShowContent1_1} style={{border:"1px solid #707070"}}>Fundacjom</button>
                <button className="whoWeHelBtn" onClick={handleShowContent2_1} >Organizacjom pozarządowym</button>
                <button className="whoWeHelBtn" onClick={handleShowContent3}>Lokalnym zbiórkom</button>
            </div>
        </div>
        <div className="whoWeHelpContent1 whoWeHelpBox">
            <h2>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h2>
            <div className="whoWeHelpContent1-2 whoWeHelpContent">
                <h3>Fundacja “Bez domu”</h3>
                <p className="rightPar">ubrania, jedzenie, ciepłe koce</p>
                <p  className="withBorder">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                <span></span>
                <h3>Fundacja “Dbam o Zdrowie”</h3>
                <p className="rightPar">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                <p  className="withBorder">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                <span></span>
                <h3>Fundacja “Dla dzieci”</h3>
                <p className="rightPar">ubrania, meble, zabawki</p>
                <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
            </div>
        </div>
        <div className="whoWeHelpContent1Btns">
            <button className="content1btn1" onClick={handleShowContent1_1}>1</button>
            <button className="content1btn2" onClick={handleShowContent1_2} style={{border:"1px solid #707070"}}>2</button>
            <button className="content1btn3" onClick={handleShowContent1_3}>3</button>
        </div>
    </div>
    </>
)
}if(showContent1_3==true){
    return(
        <>
    <div className="whoWeHelpContainer" id="section4">
        <div className="whoWeHelpHeader">
            <h1>Komu Pomagamy</h1>
            <img className="logRegImg" src={Decoration}/>
            <div className="whoWeHelpBtns">
                <button className="whoWeHelBtn" onClick={handleShowContent1_1} style={{border:"1px solid #707070"}}>Fundacjom</button>
                <button className="whoWeHelBtn" onClick={handleShowContent2_1} >Organizacjom pozarządowym</button>
                <button className="whoWeHelBtn" onClick={handleShowContent3}>Lokalnym zbiórkom</button>
            </div>
        </div>
        <div className="whoWeHelpContent1 whoWeHelpBox">
            <h2>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h2>
            <div className="whoWeHelpContent1-2 whoWeHelpContent">
                <h3>Fundacja “Dla dzieci”</h3>
                <p className="rightPar">ubrania, meble, zabawki</p>
                <p className="withBorder">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                <span></span>
                <h3>Fundacja “Bez domu”</h3>
                <p className="rightPar">ubrania, jedzenie, ciepłe koce</p>
                <p className="withBorder">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                <span></span>
                <h3>Fundacja “Dbam o Zdrowie”</h3>
                <p className="rightPar">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
            </div>
        </div>
        <div className="whoWeHelpContent1Btns">
            <button className="content1btn1" onClick={handleShowContent1_1}>1</button>
            <button className="content1btn2" onClick={handleShowContent1_2}>2</button>
            <button className="content1btn3" onClick={handleShowContent1_3} style={{border:"1px solid #707070"}}>3</button>
        </div>
    </div>
    </>
)
}if(showContent2_1==true){
    return(
        <>
    <div className="whoWeHelpContainer" id="section4">
        <div className="whoWeHelpHeader">
            <h1>Komu Pomagamy</h1>
            <img className="logRegImg" src={Decoration}/>
            <div className="whoWeHelpBtns">
                <button className="whoWeHelBtn" onClick={handleShowContent1_1}>Fundacjom</button>
                <button className="whoWeHelBtn" onClick={handleShowContent2_1} style={{border:"1px solid #707070"}}>Organizacjom pozarządowym</button>
                <button className="whoWeHelBtn" onClick={handleShowContent3} >Lokalnym zbiórkom</button>
            </div>
        </div>
        <div className="whoWeHelpContent1 whoWeHelpBox">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</h2>
            <div className="whoWeHelpContent1-2 whoWeHelpContent">
                <h3>Organizacja “Lorem Ipsum 1”</h3>
                <p className="rightPar">Egestas, sed, tempus</p>
                <p className="withBorder">Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                <span></span>
                <h3>Organizacja “Lorem Ipsum 2”</h3>
                <p className="rightPar">Ut, aliquam, purus, sit, amet</p>
                <p className="withBorder">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                <span></span>
                <h3>Organizacja “Lorem Ipsum 3”</h3>
                <p className="rightPar">Mi, quis, hendrerit, dolor</p>
                <p>Scelerisque in dictum non consectetur a erat nam.</p>
            </div>
        </div>
        <div className="whoWeHelpContent1Btns">
            <button className="content1btn1" onClick={handleShowContent2_1} style={{border:"1px solid #707070"}}>1</button>
            <button className="content1btn2" onClick={handleShowContent2_2}>2</button>
        </div>
    </div>
    </>
)
}if(showContent2_2==true){
    return(
        <>
    <div className="whoWeHelpContainer" id="section4">
        <div className="whoWeHelpHeader">
            <h1>Komu Pomagamy</h1>
            <img className="logRegImg" src={Decoration}/>
            <div className="whoWeHelpBtns">
                <button className="whoWeHelBtn" onClick={handleShowContent1_1} >Fundacjom</button>
                <button className="whoWeHelBtn" onClick={handleShowContent2_1} style={{border:"1px solid #707070"}}>Organizacjom pozarządowym</button>
                <button className="whoWeHelBtn" onClick={handleShowContent3}>Lokalnym zbiórkom</button>
            </div>
        </div>
        <div className="whoWeHelpContent1 whoWeHelpBox">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</h2>
            <div className="whoWeHelpContent1-2 whoWeHelpContent">
                <h3>Organizacja “Lorem Ipsum 4”</h3>
                <p className="rightPar">Egestas, sed, tempus</p>
                <p className="withBorder">Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                <span></span>
                <h3>Organizacja “Lorem Ipsum 5”</h3>
                <p className="rightPar">Ut, aliquam, purus, sit, amet</p>
                <p className="withBorder">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                <span></span>
                <h3>Organizacja “Lorem Ipsum 6”</h3>
                <p className="rightPar">Mi, quis, hendrerit, dolor</p>
                <p>Scelerisque in dictum non consectetur a erat nam.</p>
            </div>
        </div>
        <div className="whoWeHelpContent1Btns">
            <button className="content1btn1" onClick={handleShowContent2_1}>1</button>
            <button className="content1btn2" onClick={handleShowContent2_2} style={{border:"1px solid #707070"}}>2</button>
        </div>
    </div>
    </>
)
}if(showContent3==true){
    return(
        <>
    <div className="whoWeHelpContainer" id="section4">
        <div className="whoWeHelpHeader">
            <h1>Komu Pomagamy</h1>
            <img className="logRegImg" src={Decoration}/>
            <div className="whoWeHelpBtns">
                <button className="whoWeHelBtn whoWeHelBtn1" onClick={handleShowContent1_1}>Fundacjom</button>
                <button className="whoWeHelBtn" onClick={handleShowContent2_1} >Organizacjom pozarządowym</button>
                <button className="whoWeHelBtn" onClick={handleShowContent3} style={{border:"1px solid #707070"}}>Lokalnym zbiórkom</button>
            </div>
        </div>
        <div className="whoWeHelpContent1 whoWeHelpBox">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</h2>
            <div className="whoWeHelpContent1-2 whoWeHelpContent">
                <h3>Zbiórka “Lorem Ipsum 1”</h3>
                <p className="rightPar">Egestas, sed, tempus</p>
                <p className="withBorder">Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                <span></span>
                <h3>Zbiórka “Lorem Ipsum 2”</h3>
                <p className="rightPar">Ut, aliquam, purus, sit, amet</p>
                <p className="withBorder">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                <span></span>
                <h3>Zbiórka “Lorem Ipsum 3”</h3>
                <p className="rightPar">Mi, quis, hendrerit, dolor</p>
                <p>Scelerisque in dictum non consectetur a erat nam.</p>
            </div>
        </div>
    </div>
    </>
)
}
};
export default HomeWhoWeHelp;