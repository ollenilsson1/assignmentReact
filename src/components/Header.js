import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <>

        <nav>
           <Link to="/">Startsida</Link>
           <Link to="/barber">Frisör</Link>
           <Link to="/beauty">Skönhet</Link>
           <Link to="/mybookings">Mina bokningar</Link>
        </nav>
       
        </>
    )
}

export default Header;