import React, { useState, useEffect, useContext } from "react";
import { db } from "../../FirebaseConfig";
import { AuthContext } from "../../Auth";
import Mybookings from "./Mybookings";

function BookingList() {
  const [products, setProducts] = useState([]);
  const { currentUser } = useContext(AuthContext);

  let userid = null;

  if (currentUser !== null) {
    userid = currentUser.uid;
  }

  useEffect(() => {
    const getProducts = [];
    const subscriber = db
      .collection("booking")
      .where("userid", "==", userid)
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
    <>
      {products.map((product) => {
        return (
          <Mybookings
            key={product.key}
            id={product.key}
            title={product.title}
            time={product.timeToAppointment}
            image={product.imgUrl}
            price={product.price}
          ></Mybookings>
        );
      })}
    </>
  );
}

export default BookingList;
