import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import FirebaseConfig from "../../FirebaseConfig";
import { AuthContext } from "../../Auth";
import SMAuth from "../SocialMedia/SMAuth";
import { githubProvider } from "../SocialMedia/authMethod";
import { googleProvider } from "../SocialMedia/authMethod";

const FireLogin = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await FirebaseConfig
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/barber");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/barber" />;
  }

  const handleOnClick = async (provider) => {
    const response = await SMAuth(provider);
    console.log(response);
  }

  return (


    <div className="flex flex-col h-screen bg-gray-100">

      <div className="grid place-items-center mx-2 my-20 sm:my-40">

        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
          <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">Logga in</h2>
          <form className="mt-10" onSubmit={handleLogin}>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
            <input id="email" type="email" name="email" placeholder="e-postadress.." autoComplete="email" className="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" required />
            <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Lösenord</label>
            <input id="password" type="password" name="password" placeholder="Lösenord.." autoComplete="current-password" className="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200" required />
            <button type="submit" className="w-full py-3 mt-10 bg-gray-800 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none">Logga in</button>

            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
              <Link className="flex-2 underline" to="/forgotpassword">Glömt lösenordet?</Link>
              <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">eller</p>
              <Link className="flex-2 underline" to="/register">Skapa ett konto</Link>
            </div>
          </form>
          <button onClick={() => handleOnClick(githubProvider)}>Github</button>
          <button onClick={() => handleOnClick(googleProvider)}>Google</button>
        </div>
      </div>
    </div>


  );
};

export default withRouter(FireLogin);