import React, { useState } from "react";
import { db } from "../../FirebaseConfig";

function Contact() {
  const [EnteredName, setName] = useState("");
  const [EnteredEmail, setEmail] = useState("");
  const [EnteredPhone, setPhone] = useState("");
  const [EnteredMessage, setMessage] = useState("");

  function nameChangeHandler(event) {
    setName(event.target.value);
  }

  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }

  function phoneChangeHandler(event) {
    setPhone(event.target.value);
  }

  function messageChangeHandler(event) {
    setMessage(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    db.collection("message")
      .add({
        name: EnteredName,
        email: EnteredEmail,
        phone: EnteredPhone,
        message: EnteredMessage,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        console.log("Document written with ID: ", docRef);
      })
      .catch((error) => {
        console.log("Errror:", error);
      });
  }

  return (
    <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Kontakta oss!
            </h1>
            <p className="text-gray-400 dark:text-gray-400">
              Vi svarar så fort det går, inom 5 arbetsdagar
            </p>
          </div>
          <div className="m-7">
            <form id="form" onSubmit={submitHandler}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  För och efternamn
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={EnteredName}
                  onChange={nameChangeHandler}
                  placeholder="För och efternamn.."
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Email Adress
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={EnteredEmail}
                  onChange={emailChangeHandler}
                  placeholder="Fyll i din email adress.."
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Telefonnummer
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={EnteredPhone}
                  onChange={phoneChangeHandler}
                  placeholder="079 331 48 77"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Meddelande
                </label>

                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  value={EnteredMessage}
                  onChange={messageChangeHandler}
                  placeholder="Skriv ditt meddelande här, vi svarar så fort det går!"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                ></textarea>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                >
                  Skicka meddelande
                </button>
              </div>
              <p
                className="text-base text-center text-gray-400"
                id="result"
              ></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
