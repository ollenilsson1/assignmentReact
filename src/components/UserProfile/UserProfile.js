import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router';
import { db, Firebase } from '../../FirebaseConfig';
import { AuthContext } from "../../Auth";
import dotenv from 'dotenv';
dotenv.config();


function UserProfile() {

    const history = useHistory();
    const { currentUser } = useContext(AuthContext);
    let userID = null;

    if (currentUser !== null) {
        userID = currentUser.uid;
    }

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


            } catch (err) {
                console.error(err);
            }

        };

        fetchData();

    }, []);


    function handleProfileUpdate(event) {
        event.preventDefault();
        /* standard profilbild */
        const { phonenumber, name, } = event.target.elements;
        db.doc(`/users/${userID}`).update({
            name: name.value,
            phonenumber: phonenumber.value
        });
    }

    function imageChangeHandler(event) {
        const image = event.target.files[0];
        var storageRef = Firebase.storage().ref();

        var metadata = {
            contentType: 'image/jpeg'
        };

        var uploadTask = storageRef.child(image.name).put(image, metadata);

        uploadTask.on(Firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case Firebase.storage.TaskState.PAUSED:
                        console.log('Upload is paused');
                        break;
                    case Firebase.storage.TaskState.RUNNING:
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;

                    case 'storage/unknown':
                        break;
                }
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    return db.doc(`/users/${userID}`).update({ imageUrl: downloadURL });
                });
            }
        )

    }

    function uploadImage() {
        history.push("/barber");
    }

    function deleteAccount() {
        Firebase.auth().currentUser.delete();
        history.push("/barber");
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

                        <label htmlFor="phonenumber" className="block text-xs font-semibold text-gray-600 uppercase">Nuvarande telefonnummer: {UserInfo.phonenumber}</label>
                        <input id="phonenumber" type="number" name="phonenumber" placeholder="Nytt telefonnummer.." autoComplete="phonenumber" className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" />

                        <label htmlFor="name" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Nuvarande namn: {UserInfo.name}</label>
                        <input id="name" type="text" name="name" placeholder="Nytt För och efternamn.." autoComplete="name" className="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" />

                        <button type="submit" className="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">Uppdatera info</button>

                    </form>

                    <button onClick={() => deleteAccount()}>Radera konto</button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;

