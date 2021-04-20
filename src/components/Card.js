import React from 'react';
import barberimage from "./Images/barber.jpeg";

function Card(){
    return (
        <div class="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
        
        <img src={barberimage} alt="" class="overflow-hidden"></img>
       
        <div class="p-4">
          <h3 class="font-medium text-gray-600 text-lg my-2 uppercase text-center">Hårklippning 30min</h3>
          <p class="text-center">Med sax och maskin + Tvätt</p>
          <div class="mt-5 text-center">
            <a href="" class="hover:bg-gray-700 rounded-full uppercase py-2 px-4 font-semibold hover:text-white bg-gray-400 text-gray-100">Boka tid</a>
          </div>
        </div>
      </div>
     
    );
}

export default Card;

