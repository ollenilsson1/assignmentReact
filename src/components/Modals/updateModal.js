import React, { useState } from 'react';
import Modal from "react-modal";

function updateModal(){
    const [modalIsOpen, setIsOpen] = useState(false);
    Modal.setAppElement('#root');

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
      };
    
      function openModal() {
        setIsOpen(true)
      }
    
      function closeModal() {
        setIsOpen(false)
      }
    return(
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
            <button onClick={closeModal}>close</button>
            <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
              <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Boka klipptid</h1>
                <p className="text-gray-400 dark:text-gray-400">Du får en bekräftelse på mail direkt!</p>
              </div>
              <div className="m-7">
                <form id="form" onSubmit={submitHandler}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">För och efternamn</label>
                    <input type="text" name="name" id="name" value={EnteredName} onChange={nameChangeHandler} placeholder="För och efternamn.." required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email</label>
                    <input type="email" name="email" id="email" value={EnteredEmail} onChange={emailChangeHandler} placeholder="Email.." required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                  </div>
                  <div className="mb-6">

                    <label htmlFor="phone" className="text-sm text-gray-600 dark:text-gray-400">Telefonnummer</label>
                    <input type="text" name="phone" id="phone" value={EnteredMobileNumber} onChange={mobileNumberChangeHandler} placeholder="079 331 48 77" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                  </div>
                  <div className="mb-6">

                    <label htmlFor="date" className="text-sm text-gray-600 dark:text-gray-400">Datum</label>
                    <input type="datetime-local" name="date" id="date" value={EnteredDateTime} onChange={dateTimeChangeHandler} required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Meddelande</label>

                    <textarea rows="5" name="message" id="message" value={EnteredMessage} onChange={messageChangeHandler} placeholder="Om du önskar en speciell frisör eller funderar över något annat, vi svarar så fort det går!" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"></textarea>
                  </div>
                  <div className="mb-6">
                    <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Boka tid</button>
                  </div>
                  <p className="text-base text-center text-gray-400" id="result">
                  </p>
                </form>
              </div>
            </div>
          </Modal>
    )
}

export default updateModal;