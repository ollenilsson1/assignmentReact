import React from 'react';
import { Link } from "react-router-dom";
/* import barberimage from "../Images/barber.jpeg"; */

/* hårdkodade bilder, ska komma från loopen/backend i framtiden */

function Card({title, price, desc, img}) {
  return (
    <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">

      <img src={`http://localhost:1337${img.url}`} alt="" className="overflow-hidden"></img>
      <div className="p-4">
        <h3 className="font-medium text-gray-600 text-lg my-2 uppercase text-center">{title}</h3>
        <p className="text-center">{desc}</p>
        <p className="text-center">{price}</p>
        <div className="mt-5 text-center">
          <Link className="hover:bg-gray-700 rounded-full uppercase py-2 px-4 font-semibold hover:text-white bg-gray-400 text-gray-100" to="/booking">Boka tid</Link>
        </div>
      </div>
    </div>

  );
}

export default Card;

