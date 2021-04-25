import React from 'react';
import Card from './Card';
import barberimage from "../Images/barber.jpeg";

/* Använder inte barberimage i Card.js, men låter det vara kvar för ändå */

const barberServices = [
    { barberImg: { barberimage }, barberTitle: "Hårklippning 30min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "350kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 40min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "360kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 50min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "370kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 60min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "380kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 70min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "390kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 80min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "450kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 90min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "550kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 100min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "650kr" }
];
function CardList() {
    return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {barberServices.map((service) => {
                return (
                    
                   <Card img={service.barberImg} title={service.barberTitle} desc={service.barberDesc} price={service.barberPrice} />
                   
                )
               
            })
            
            }
        </div>
    )
}

export default CardList;