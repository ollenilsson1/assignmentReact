import React from 'react';
import { useHistory } from "react-router-dom";

function LogOut() {
    const history = useHistory();

    localStorage.removeItem("token");
    localStorage.removeItem('userid');
    localStorage.removeItem('role');
    history.push("/");
    window.location.reload();

    return (
        <>
            <h1>Du är utloggad!</h1>
        </>
    )
}

export default LogOut;