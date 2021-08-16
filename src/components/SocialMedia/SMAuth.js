import firebase from "firebase";

function SMAuth(provider) {
    return firebase
    .auth()
    .signInWithPopup(provider)
    .then((response) => {
        return response.user;
    })
    .catch((error) => {
        return error;
    });
}

export default SMAuth;