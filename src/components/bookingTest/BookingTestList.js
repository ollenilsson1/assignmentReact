import React, { useState, useEffect, useContext } from 'react';


import { db } from '../../FirebaseConfig';
import { AuthContext } from "../../Auth";
import BookingTest from './BookingTest';
import dotenv from 'dotenv';

dotenv.config();

function BookingTestList() {

    const [products, setProducts] = useState([]);

    const { currentUser } = useContext(AuthContext);

    let userid = null;
    
    if ( currentUser  !== null) {
        userid = currentUser.uid;
    }

    console.log(products)

    /* get request 
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

    */

    useEffect(() => {
        const getProducts = [];
        const subscriber = db
            .collection("booking").where("userid", "==", userid)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    getProducts.push({
                        ...doc.data(), //spread operator
                        key: doc.id, // `id` given to us by Firebase
                    });
                });
                setProducts(getProducts);
            });

        // return cleanup function
        return () => subscriber();
    }, []);

    return (

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
                return (
                    console.log(product)
                //    <BookingTest key={product.key} bookingid={product.key} title={product.title} time={product.timeToAppointment} price={product.price} />
                   
                )
            }





            )}
        </div>
    )
}





export default BookingTestList;