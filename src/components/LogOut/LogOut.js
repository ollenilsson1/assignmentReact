import React, { useState, useEffect} from 'react'


function LogOut() {

    let token = localStorage.getItem("token");
    const [JWT, setJWT] = useState(token);

    useEffect(() => {
        const removeJWT = localStorage.removeItem("token");
        setJWT(removeJWT);
    }, [JWT])


    localStorage.removeItem("token");

    //behöver window.location.reload i nått if statement


    return (
        <>
            <h1>Du är utloggad!</h1>
        </>
    )
}

export default LogOut;