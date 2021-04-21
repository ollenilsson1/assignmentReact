import React from 'react'
import backgroundImage from "../Images/landingPage.jpg";
import backgroundImageSmall from "../Images/landingPageSmall.jpg";

function Home (){
    return(
        
        <div className="">
            <img className="hidden lg:block" src={backgroundImage} />
            <img className="lg:hidden" src={backgroundImageSmall} />
        </div>
    )
}

export default Home;