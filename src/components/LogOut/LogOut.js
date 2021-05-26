import React from 'react'
import { useHistory } from "react-router-dom";

function LogOut() {
    const history = useHistory();
    /*let token = localStorage.getItem("token");
     const [JWT, setJWT] = useState(token);

    useEffect(() => {
        const removeJWT = localStorage.removeItem("token");
        setJWT(removeJWT);
    }, [JWT]) */


    localStorage.removeItem("token");
    localStorage.removeItem('userid');
    localStorage.removeItem('role');
    history.push("/");
    window.location.reload();

    //behöver window.location.reload i nått if statement
    //Remove userid eller clear localstorage


    return (
        <>
            <h1>Du är utloggad!</h1>
        </>
    )
}

export default LogOut;