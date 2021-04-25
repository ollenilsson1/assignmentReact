import React from 'react';
import { Link } from "react-router-dom";
import barberimage from "../Images/barber.jpeg";

function Mybookings() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
    <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">

      <img src={barberimage} alt="barber" className="overflow-hidden"></img>

      <div className="p-4">
        <h3 className="font-medium text-gray-600 text-lg my-2 uppercase text-center">Hårklippning 30min</h3>
        <p className="text-center">Med sax och maskin + Tvätt</p>
        <p className="text-center">350kr</p>
        <div className="mt-5 text-center">
          <Link className="hover:bg-gray-700 rounded-full uppercase py-2 px-4 font-semibold hover:text-white bg-gray-400 text-gray-100" to="/newbooking">Boka om</Link>
          <Link className="hover:bg-gray-700 rounded-full uppercase py-2 px-4 font-semibold hover:text-white bg-gray-400 text-gray-100" to="/deletebooking">Avboka</Link>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Mybookings;