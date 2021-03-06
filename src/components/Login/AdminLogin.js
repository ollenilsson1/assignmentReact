import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";


function Login() {

    const history = useHistory();
    const [EnteredEmail, setEmail] = useState('');
    const [EnteredPassword, setPassword] = useState('');
    const [JWT, setJWT] = useState("");
    const [UserId, setUserId] = useState("");


    function emailChangeHandler(event) {
        setEmail(event.target.value);
    };

    function passwordChangeHandler(event) {
        setPassword(event.target.value);
    };

    useEffect(() => {
        const jwt = localStorage.getItem("token");
        setJWT(jwt);

        const userid = localStorage.getItem('userid');
        setUserId(userid);

    }, [JWT], [UserId])

    /* Måste man ha async när det är i ett event submit? */
    async function submitHandler(event) {
        event.preventDefault();

        await axios.post('https://boiling-dusk-80419.herokuapp.com/auth/local', {
            identifier: EnteredEmail,
            password: EnteredPassword,
        })
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data.jwt);
                localStorage.setItem('userid', res.data.user.id);
                localStorage.setItem('role', res.data.user.role.type);
                history.push("/addservice");
                window.location.reload();
            })
            .catch(error => {
                console.log('Error Message: ', error);
            })
    }

    return (

        <div className="flex flex-col h-screen bg-gray-100">

            <div className="grid place-items-center mx-2 my-20 sm:my-40">

                <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">Logga in</h2>
                    <form className="mt-10" onSubmit={submitHandler}>
                        <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input id="email" type="email" name="email" value={EnteredEmail} onChange={emailChangeHandler} placeholder="e-postadress.." autoComplete="email" className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" required />
                        <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Lösenord</label>
                        <input id="password" type="password" name="password" value={EnteredPassword} onChange={passwordChangeHandler} placeholder="Lösenord.." autoComplete="current-password" className="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" required />
                        <button type="submit" className="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">Logga in</button>


                        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                            <Link className="flex-2 underline" to="/forgotpassword">Glömt lösenordet?</Link>
                            <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">eller</p>
                            <Link className="flex-2 underline" to="/register">Skapa ett konto</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;