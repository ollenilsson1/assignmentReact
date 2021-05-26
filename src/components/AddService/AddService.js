import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function AddService(){

    const [EnteredTitle, setTitle] = useState('');
    const [EnteredDescription, setDescription] = useState('');
    const [EnteredPrice, setPrice] = useState('');
    const [EnteredImage, setImage] = useState('');
    
    const token = localStorage.getItem('token');
    const history = useHistory();

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    };

    function descriptionChangeHandler(event) {
        setDescription(event.target.value);
    };

    function priceChangeHandler(event) {
        setPrice(event.target.value);
    };

    function imageChangeHandler(event) {
        setImage(event.target.files[0]);
    }

    function submitHandler(event){
        event.preventDefault();

        axios.post("http://localhost:1337/products", {
            title: EnteredTitle,
            description: EnteredDescription,
            price: EnteredPrice
        },
        {headers: {
            Authorization: `Bearer ${token}`,
          }  
        }).then( (response)=>{
            const data = new FormData();

            data.append("files" , EnteredImage);
            data.append("ref", "product");
            data.append("refId", response.data.id);
            data.append("field", "img");

            axios.post("http://localhost:1337/upload", data)
            .then(() => history.push('/barber'))
            .catch((error) => console.log(error))

        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
            <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                <div className="text-center">
                    <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Lägg till en ny tjänst!</h1>
                </div>
                <div className="m-7">
                    <form id="form" onSubmit={submitHandler}>
                        <div className="mb-6">
                            <label htmlFor="title" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Titel på tjänst</label>
                            <input type="text" name="title" id="title" value={EnteredTitle} onChange={titleChangeHandler} placeholder="Title.." required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="description" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Beskrivning</label>
                            <input type="text" name="description" id="description" value={EnteredDescription} onChange={descriptionChangeHandler} placeholder="Beskrivning.." required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="price" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Pris </label>
                            <input type="number" name="price" id="price" value={EnteredPrice} onChange={priceChangeHandler} placeholder="Pris.." required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Ladda upp en bild</label>
                            <input type="file" name="file" onChange={imageChangeHandler} />   
                        </div>
                        <div className="mb-6">
                            <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Ladda upp!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddService;
