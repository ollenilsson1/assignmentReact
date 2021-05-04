import React from 'react'


function LogOut() {

    localStorage.removeItem("token");

    //behöver window.location.reload i nått if statement


    return (
        <>
            <h1>Du är utloggad!</h1>
        </>
    )
}

export default LogOut;