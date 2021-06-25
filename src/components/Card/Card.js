import React, { useState } from 'react';
import axios from "axios";
import Modal from "react-modal";
import { useHistory } from 'react-router';

import { db } from '../../FirebaseConfig';

import dotenv from 'dotenv';
dotenv.config();

function Card({ productid, title, price, desc, img }) {


  const [modalIsOpen, setIsOpen] = useState(false);
  const [EnteredName, setName] = useState('');
  const [EnteredEmail, setEmail] = useState('');
  const [EnteredMobileNumber, setMobileNumber] = useState('');
  const [EnteredDateTime, setDateTime] = useState('');
  const [EnteredMessage, setMessage] = useState('');

  const history = useHistory();

  const userid = localStorage.getItem('userid');
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  let isAdmin = false;


  if (role === 'admin') {
    isAdmin = true;
  }

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

  function nameChangeHandler(event) {
    setName(event.target.value);
  };

  function emailChangeHandler(event) {
    setEmail(event.target.value);
  };

  function mobileNumberChangeHandler(event) {
    setMobileNumber(event.target.value);
  };

  function dateTimeChangeHandler(event) {
    setDateTime(event.target.value);
  };

  function messageChangeHandler(event) {
    setMessage(event.target.value);
  };

 /*  function submitHandler(event) {
    event.preventDefault();

    axios.post('https://boiling-dusk-80419.herokuapp.com/bookings', {
      name: EnteredName,
      email: EnteredEmail,
      phone: EnteredMobileNumber,
      timeToAppointment: new Date(EnteredDateTime),
      message: EnteredMessage,
      user: userid,
      product: productid,
    },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((res) => {

        if (res.status === 200) {
          history.push("/mybookings");
        }

      })
      .catch(error => {
        console.log('Error message: ', error);
        history.push("/login");
      })
  } */

  function submitHandler(event) {
    event.preventDefault();

    db.collection("booking").add({
      productID: productid,
      userID: userid,
      title: title,
      description: desc,
      price: price,
      timeToAppointment: new Date(EnteredDateTime),
      message: EnteredMessage,
    }).then((docRef) =>{
      console.log("Document written with ID: ", docRef.id);
      console.log("Document written with ID: ", docRef);
    }).catch((error) => {
      console.log("Errror:", error);
    })

  }



  /* för admin update product */
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);

  const [EnteredTitle, setTitle] = useState('');
  const [EnteredDescription, setDescription] = useState('');
  const [EnteredPrice, setPrice] = useState('');
  const [EnteredImage, setImage] = useState('');


  function openUpdateModal() {
    setUpdateModalIsOpen(true)

  }

  function closeUpdateModal() {
    setUpdateModalIsOpen(false)
  }



  function titleChangeHandler(event) {
    setTitle(event.target.value);
  };

  function descriptionChangeHandler(event) {
    setDescription(event.target.value);
  };

  function priceChangeHandler(event) {
    setPrice(event.target.value);
  };

  function imageChangeHandler(event) {
    setImage(event.target.files[0]);
  }


  function updateSubmitHandler(event) {

    event.preventDefault();
    axios.put(`https://boiling-dusk-80419.herokuapp.com/products/${productid}`, {
      title: EnteredTitle,
      description: EnteredDescription,
      price: EnteredPrice
    },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then((response) => {
        const data = new FormData();

        data.append("files", EnteredImage);
        data.append("ref", "product");
        data.append("refId", response.data.id);
        data.append("field", "img");

        axios.post("https://boiling-dusk-80419.herokuapp.com/products/upload", data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          })
          .then(() => history.push('/barber'))
          .catch((error) => console.log(error))

      }).catch((error) => {
        console.log(error);
      })
  }

  

  /* delete request */
  async function deleteProduct(id) {
    const response = await axios.delete(`https://boiling-dusk-80419.herokuapp.com/products/${id}`,
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
    <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8" id={productid}>

      <img src={`https://boiling-dusk-80419.herokuapp.com${img.url}`} alt="" className="overflow-hidden"></img>
      <div className="p-4">
        <h3 className="font-medium text-gray-600 text-lg my-2 uppercase text-center">{title}</h3>
        <p className="text-center">{desc}</p>
        <p className="text-center">{price}</p>
        <div className="mt-5 text-center">

          {/* <button className="hover:bg-gray-700 rounded-full uppercase py-2 px-4 font-semibold hover:text-white bg-gray-400 text-gray-100" onClick={openModal} >boka</button> */}
          {isAdmin ? <button className="hover:bg-gray-700 rounded-full uppercase py-2 px-4 font-semibold hover:text-white bg-gray-400 text-gray-100" onClick={() => deleteProduct(productid)}>Radera produkt</button> : <button className="hover:bg-gray-700 rounded-full uppercase py-2 px-4 font-semibold hover:text-white bg-gray-400 text-gray-100" onClick={openModal} >boka</button>}
          {isAdmin ? <button className="hover:bg-gray-700 rounded-full uppercase py-2 px-4 font-semibold hover:text-white bg-gray-400 text-gray-100" onClick={() => openUpdateModal(productid)}>Ändra produkt</button> : null}

          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
            <button onClick={closeModal}>close</button>
            <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
              <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Boka klipptid</h1>
                <p className="text-gray-400 dark:text-gray-400">Du får en bekräftelse på mail direkt!</p>
              </div>
              <div className="m-7">
                <form id="form" onSubmit={submitHandler}>
                  {/* <div className="mb-6">
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
                  </div> */}
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
          {/* admin update modal */}
          <Modal isOpen={updateModalIsOpen} onRequestClose={closeUpdateModal} style={customStyles} contentLabel="Update product Modal">
            <button onClick={closeUpdateModal}>close</button>
            <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
              <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Uppdatera produktinformation</h1>
              </div>
              <div className="m-7">
                <form id="form" onSubmit={updateSubmitHandler}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Rubrik</label>
                    <input type="text" name="name" id="name" value={EnteredTitle} onChange={titleChangeHandler} placeholder="Rubrik.." required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="description" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Beskrivning</label>
                    <input type="text" name="description" id="description" value={EnteredDescription} onChange={descriptionChangeHandler} placeholder="Beskrivning.." required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                  </div>
                  <div className="mb-6">

                    <label htmlFor="price" className="text-sm text-gray-600 dark:text-gray-400">Pris</label>
                    <input type="number" name="price" id="price" value={EnteredPrice} onChange={priceChangeHandler} placeholder="Pris.." required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Ladda upp en bild</label>
                    <input type="file" name="file" onChange={imageChangeHandler} />
                  </div>

                  <div className="mb-6">
                    <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Uppdatera produkt</button>
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

  );
}

export default Card;

