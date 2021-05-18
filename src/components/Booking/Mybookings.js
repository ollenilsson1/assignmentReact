import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Mybookings() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const userid = localStorage.getItem('userid');

    const fetchProducts = async () => {
      const response = await axios.get(`http://localhost:1337/bookings?_where[1][user.id]=${userid}`);


      setProducts(response.data)
    }

    fetchProducts();
  }, [products])

  return (

    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => {
        return (

          <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
            <img src={`http://localhost:1337${product.product.img.url}`} alt="barber" className="overflow-hidden"></img>
            <div className="p-4">
              <h3 className="font-medium text-gray-600 text-lg my-2 uppercase text-center">{product.product.title}</h3>
              <p className="text-center">{product.product.description}</p>
              <p className="text-center">{product.product.price}kr</p>
              <div className="mt-5 text-center">
                <Link className="hover:bg-gray-700 rounded-full uppercase py-2 px-4 font-semibold hover:text-white bg-gray-400 text-gray-100" to="/newbooking">Boka om</Link>
                <Link className="hover:bg-gray-700 rounded-full uppercase py-2 px-4 font-semibold hover:text-white bg-gray-400 text-gray-100" to="/deletebooking">Avboka</Link>
              </div>
            </div>
          </div>


        )
      })}

    </div>

  );
}

export default Mybookings;