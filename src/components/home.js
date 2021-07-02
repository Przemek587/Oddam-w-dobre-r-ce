import React from "react";

import HomeHeader from "./homeHeader";
import HomeThreeColumns from "./homeThreeColumns";
import HomeSimpleSteps from "./homeSimpleSteps";
import HomeAboutUs from "./homeAboutUs";
import HomeWhoWeHelp from "./homeWhoWeHelp";
import HomeContact from "./homeContact";

const Home =()=>{
    return(
        <>
        <HomeHeader/>
        <HomeThreeColumns/>
        <HomeSimpleSteps/>
        <HomeAboutUs/>
        <HomeWhoWeHelp/>
        <HomeContact/>
        </>
    )
};

export default Home;