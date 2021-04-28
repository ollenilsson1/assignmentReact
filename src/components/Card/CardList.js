import React, {useState, useEffect} from 'react';
import axios from "axios";
import Card from './Card';
/* import barberimage from "../Images/barber.jpeg"; */

/* Använder inte barberimage i Card.js, men låter det vara kvar för ändå */

/* const barberServices = [
    { barberImg: { barberimage }, barberTitle: "Hårklippning 30min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "350kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 40min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "360kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 50min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "370kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 60min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "380kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 70min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "390kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 80min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "450kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 90min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "550kr" },
    { barberImg: { barberimage }, barberTitle: "Hårklippning 100min", barberDesc: "Med sax och maskin + Tvätt", barberPrice: "650kr" }
]; */

function CardList() {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        
        const fetchProducts = async()=>{
            const response = await axios.get("http://localhost:1337/products")
            console.log(response);

            setProducts(response.data)
        }

        fetchProducts();


    }, [])
    return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
                return (
                    
                   <Card img={product.img} title={product.name} desc={product.description} price={product.price} />
                   
                )
               
            })
            
            }
        </div>
    )
}

export default CardList;