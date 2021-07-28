import React, { useContext } from "react";
import { AuthContext } from "../../Auth";


function UserProfile() {
   
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);

if (currentUser !== null) {
  currentUser.providerData.forEach((profile) => {
      console.log(profile);
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}


    return (
        <div>

        </div>
    )
}

export default UserProfile

