import React from 'react';
import Card from './Card';
import barberimage from "../Images/barber.jpeg";

const barberServices = [
    { barberImg: require("../Images/barber.jpeg"), barberTitle: "Hårklippning 30min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "350kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 40min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "350kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 50min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "350kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 60min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "350kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 70min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "350kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 80min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "350kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 90min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "350kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 100min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "350kr" }
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