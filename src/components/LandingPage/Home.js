import React from 'react'
import backgroundImage from "../Images/landingPage.jpg";
import backgroundImageSmall from "../Images/landingPageSmall.jpg";

function Home (){
    return(
        
        <div className="">
            <img className="hidden lg:block" src={backgroundImage} alt="big background"/>
            <img className="lg:hidden" src={backgroundImageSmall} alt="small background"/>
        </div>
    )
}

export default Home;