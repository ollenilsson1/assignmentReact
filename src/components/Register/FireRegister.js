import React, { useCallback } from "react";
import { withRouter } from "react-router";
import FirebaseConfig, { db } from '../../FirebaseConfig';
import dotenv from 'dotenv';
dotenv.config();

const FireRegister = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        /* standard profilbild */
        const noImg = 'no-img.png'
        const { email, password, name, phonenumber} = event.target.elements;
        try {
            await FirebaseConfig
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value).then(cred => {
                    const UserId = cred.user.uid;
                    return db.collection('users').doc(cred.user.uid).set({
                        name: name.value,
                        email: email.value,
                        phonenumber: phonenumber.value,
                        imageUrl: `https://firebasestorage.googleapis.com/v0/b/${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}/o/${noImg}?alt=media`, 
                        UserId,
                    })
                }).then(() =>{
                    history.push("/barber");
                })
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
        

<div className="flex flex-col h-screen bg-gray-100">

<div className="grid place-items-center mx-2 my-20 sm:my-40">

    <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
        <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">Skapa konto</h2>

        <form className="mt-10" onSubmit={handleSignUp}>

            <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
            <input id="email" type="email" name="email" placeholder="e-postadress.." autoComplete="email" className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" required />

            <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">L??senord</label>
            <input id="password" type="password" name="password" placeholder="L??senord.." autoComplete="current-password" className="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" required />

            <label htmlFor="name" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Namn</label>
            <input id="name" type="text" name="name" placeholder="F??r och efternamn" autoComplete="name" className="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" required />

            <label htmlFor="phonenumber" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Namn</label>
            <input id="phonenumber" type="number" name="phonenumber" placeholder="Telefonnummer.." autoComplete="phonenumber" className="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" required />

            <button type="submit" className="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">Skapa konto</button>

        </form>
    </div>
</div>
</div>
    );
};

export default withRouter(FireRegister);