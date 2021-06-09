import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Ix6SLCSB2UR4oqqhLqBhMH9V60bqzrQlXMYmVtROqUMthfXbyFoTV5eUM24EQjGtoTFVhMu0ASOMnDlYrdA466g00DBzN8jgx');

function Mybookings(bookingid, img, title, time, price) {
  

  /* Ska vara annan props när den är färdig men det här är det som fungerar nu */

  const token = localStorage.getItem('token');

  /* för modal, fungerar inte ännu ska fixa så man kan byta bokad tid */
  const [modalIsOpen, setIsOpen] = useState(false);
  const [EnteredDateTime, setDateTime] = useState('');
  const [EnteredMessage, setMessage] = useState('');

  Modal.setAppElement('#root');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    }
  };

  function openModal() {
    setIsOpen(true)

  }

  function closeModal() {
    setIsOpen(false)
  }

  function dateTimeChangeHandler(event) {
    setDateTime(event.target.value);
  };

  function messageChangeHandler(event) {
    setMessage(event.target.value);
  };

  function submitHandler() {
    console.log("hej");
  }


  //stripe
  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await axios.post("http://localhost:4242/create-checkout-session", {name:bookingid.title, price:bookingid.price})
    
    const sessionID = await response.data.id

    const result = await stripe.redirectToCheckout({
      sessionId: sessionID,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };


  /* delete request */
  async function cancelBooking(id) {
    const response = await axios.delete(`https://boiling-dusk-80419.herokuapp.com/bookings/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
    if (response.status === 200) {
      window.location.reload();
    }
  }

  return (

          <div key={bookingid} className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
            <img src={`https://boiling-dusk-80419.herokuapp.com${bookingid.img.url}`} alt="barber" className="overflow-hidden"></img>
            <div className="p-4">
              <h3 className="font-medium text-gray-600 text-lg my-2 uppercase text-center">{bookingid.title}</h3>
              <p className="text-center">{bookingid.time.toString().slice(0, 10)}</p>
              <p className="text-center">{bookingid.time.toString().slice(11, 16)}</p> 
              <p className="text-center">{bookingid.price}kr</p>
              <div className="mt-5 text-center">
                <button className="hover:bg-gray-700 rounded-full uppercase py-2 px-4 font-semibold hover:text-white bg-gray-400 text-gray-100" onClick={openModal}>Boka om</button>
                <button className="hover:bg-gray-700 rounded-full uppercase py-2 px-4 font-semibold hover:text-white bg-gray-400 text-gray-100" onClick={() => cancelBooking(bookingid)}>Avboka</button>
                <button className="hover:bg-gray-700 rounded-full uppercase py-2 px-4 font-semibold hover:text-white bg-gray-400 text-gray-100" role="link" onClick={handleClick}>Betala direkt</button>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                  <button onClick={closeModal}>close</button>
                  <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div className="text-center">
                      <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Boka ny klipptid</h1>
                      <p className="text-gray-400 dark:text-gray-400">Du får en bekräftelse på mail direkt!</p>
                    </div>
                    <div className="m-7">
                      <form id="form" onSubmit={submitHandler}>
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
              </div>
            </div>
          </div>
        )
}

export default Mybookings;