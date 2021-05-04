import React, { useState } from 'react';
import axios from 'axios';

function ResetPassword() {

    const [EnteredPassword, setPassword] = useState('');
    const [EnteredConfirmedPassword, setConfirmedPassword] = useState('');

    function passwordChangeHandler(event) {
        setPassword(event.target.value);
    };

    function confirmedPasswordChangeHandler(event) {
        setConfirmedPassword(event.target.value);
    }


    function submitHandler(event) {
        event.preventDefault();

        axios.post('http://localhost:1337/auth/reset-password', {
                code: 'privateCode', // code contained in the reset link of step 3.
                password: EnteredPassword,
                passwordConfirmation: EnteredConfirmedPassword,
            })
            .then(response => {
                console.log("Your user's password has been reset.");
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

                        <label htmlFor="password" className="block text-xs font-semibold text-gray-600 uppercase">Nytt lösenord</label>
                        <input id="password" type="password" name="password" value={EnteredPassword} onChange={passwordChangeHandler} placeholder="Nytt lösenord" className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" required />
                        <input id="password" type="password" name="ConfirmedPassword" value={EnteredConfirmedPassword} onChange={confirmedPasswordChangeHandler} placeholder="Bekräfta lösenord.." className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" required />
                        <button type="submit" className="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">Skicka nytt lösenord</button>
                    </form>
                </div>
            </div>
        </div>
    )

}


export default ResetPassword;