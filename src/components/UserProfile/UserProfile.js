import React, { useState, useEffect, useContext } from "react";
import FirebaseConfig, { db, Firebase } from '../../FirebaseConfig';
import { AuthContext } from "../../Auth";
import dotenv from 'dotenv';
dotenv.config();


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

        console.log(image.name)
        console.log(image)

        // Create the file metadata
        var metadata = {
            contentType: 'image/jpeg'
        };

        // Upload file and metadata to the object 'images/mountains.jpg'
        var uploadTask = storageRef.child(image.name).put(image, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(Firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case Firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case Firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    return db.doc(`/users/${userID}`).update({ imageUrl: downloadURL });
                });
            }
        )




    }

    function uploadImage() {
        console.log("hej");
    }

    /*     function uploadImage(req, res) {
            const BusBoy = require('busboy');
            const path = require('path');
            const os = require('os');
            const fs = require('fs');
    
            const busboy = new BusBoy({ headers: req.headers });
    
            let imageFileName;
            let imageToBeUploaded = {};
    
            busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    
                console.log(fieldname);
                console.log(filename);
                console.log(mimetype)
    
                const imageExtension = filename.split('.')[filename.split('.').length - 1];
                imageFileName = `${Math.round(Math.random() * 1000000000000).toString()}.${imageExtension}`;
                const filepath = path.join(os.tmpdir(), imageFileName);
                imageToBeUploaded = { filepath, mimetype };
                file.pipe(fs.createWriteStream(filepath));
            })
            busboy.on('finish', () => {
                Firebase.storage().bucket().upload(imageToBeUploaded.filepath, {
                    resumable: false,
                    metadata: {
                        metadata: {
                            contentType: imageToBeUploaded.mimetype
                        }
                    }
                })
                    .then(()=> {
                        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}/o/${imageFileName}?alt=media`;
                        return db.doc(`/users/${userID}`).update({ imageUrl });
                    })
                    .then(() => {
                        return res.json({ message: 'Image uploaded successfully'});
                    })
                    .catch( err => {
                        console.log(err);
                        return res.status(500).json({ error: err.code});
                    })
            })
            busboy.end(req.rawBody);
    
        } */


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
                </div>
            </div>
        </div>
    )
}

export default UserProfile;

