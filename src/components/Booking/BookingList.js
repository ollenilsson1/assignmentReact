import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyBookings from './Mybookings';

function BookingList() {

    const [products, setProducts] = useState([]);

    /* get request */
    useEffect(() => {

        const userid = localStorage.getItem('userid');
        const token = localStorage.getItem('token');

        const fetchProducts = async () => {
            const response = await axios.get(`https://boiling-dusk-80419.herokuapp.com/bookings?_where[1][user.id]=${userid}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })


            setProducts(response.data)
        }

        fetchProducts();
    }, [])

    return (

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
                return (
                    <MyBookings key={product.id} bookingid={product.id} img={product.product.img} title={product.product.title} time={product.timeToAppointment} price={product.product.price} />
                )
            }





            )}
        </div>
    )
}





export default BookingList;