import React, { useState } from 'react'
import axios from 'axios';

function ForgotPassword() {

    const [EnteredEmail, setEmail] = useState('');

    function emailChangeHandler(event) {
        setEmail(event.target.value);
    };

    
    async function submitHandler(event) {
        event.preventDefault();
        console.log(EnteredEmail);
        // Request API.
         await axios.post('http://localhost:1337/auth/forgot-password', {
                email: EnteredEmail, 
            })
            .then(response => {
                console.log('Your user received an email');
                console.log(response);
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
            });
    }


    return (
        <div className="flex flex-col h-screen bg-gray-100">

            <div className="grid place-items-center mx-2 my-20 sm:my-40">

                <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">

                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">Nytt lösenord</h2>

                    <form className="mt-10" onSubmit={submitHandler}>

                        <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input id="email" type="email" name="email" value={EnteredEmail} onChange={emailChangeHandler} placeholder="e-postadress.." autoComplete="email" className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" required />

                        <button type="submit" className="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">Skicka nytt lösenord</button>
                    </form>
                </div>
            </div>
        </div>
    )

}


export default ForgotPassword;