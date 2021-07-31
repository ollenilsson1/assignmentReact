import React, { useState, useEffect, useContext } from "react";
import FirebaseConfig, { db } from '../../FirebaseConfig';
import { AuthContext } from "../../Auth";


function UserProfile() {

    const { currentUser } = useContext(AuthContext);
    let userID = null;

    if (currentUser !== null) {
        userID = currentUser.uid;
    }

    const [loading, setLoading] = useState(true);
    const [UserInfo, setUserInfo] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const response = await db.doc(`/users/${userID}`).get()

                console.log('response', response);

                let data = { title: 'not found' };

                if (response.exists) {
                    data = response.data();
                }

                setUserInfo(data);
                setLoading(false);


            } catch (err) {
                console.error(err);
            }

        };

        fetchData();

    }, []);
    /*  useEffect(() => {
         let userData = {};
         db.doc(`/users/${userID}`).get()
         .then(doc =>{
             if(doc.exists){
                 userData.credentials = doc.data();
                 setUserInfo(userData)
             } else {
                 // doc.data() will be undefined in this case
                 console.log("No such document!");
             }
         }).catch(function(error) {
             console.log("Error getting document:", error);
       });
     },[]);   */



    console.log(userID)
    console.log(currentUser)
    console.log(UserInfo.email)
    console.log(loading);


    function handleProfileUpdate() {

    }

    function imageChangeHandler() {

    }

    function uploadImage(req, res) {
        const BusBoy = require('busboy');
        const path = require('path');
        const os = require('os');
        const fs = require('fs');

        const busboy = new BusBoy({headers : req.headers})

    }


    return (
        <div className="flex flex-col h-screen bg-gray-100">

            <div className="grid place-items-center mx-2 my-20 sm:my-40">

                <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
                    <img src={UserInfo.imageUrl} alt="" className="overflow-hidden"></img>

                    <form className="mt-10" onSubmit={uploadImage}>
                        <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Byt profilbild</label>
                        <input type="file" name="file" onChange={imageChangeHandler} />
                        <button type="submit" className="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">Byt bild</button>
                        

                    </form>
                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">Ändra uppgifter</h2>

                    <form className="mt-10" onSubmit={handleProfileUpdate}>

                        <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase">Nuvarande email: {UserInfo.email}</label>
                        <input id="email" type="email" name="email" placeholder="Ny e-postadress.." autoComplete="email" className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" />

                        <label htmlFor="name" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Nuvarande namn: {UserInfo.name}</label>
                        <input id="name" type="text" name="name" placeholder="Nytt För och efternamn.." autoComplete="name" className="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" />

                        <button type="submit" className="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">Uppdatera info</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;

