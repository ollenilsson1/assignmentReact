import React, { useState, useEffect } from 'react';
import axios from "axios";
import Card from './Card';


function CardList() {

    const [products, setProducts] = useState([]);
    const [loadPage, setLoadPage] = useState(2);

    useEffect(() => {

        const fetchProducts = async () => {
            const response = await axios.get(`http://localhost:1337/products?_limit=${loadPage}`);

            setProducts(response.data)
        }

        fetchProducts();


    }, [loadPage], [products])

    function showMore() {
        let moreProducts = loadPage + 2;
        setLoadPage(moreProducts)
    }

    function showLess() {
        let lessProducts = loadPage - 2;
        setLoadPage(lessProducts)
    }
    return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => {
                return (

                    <Card key={product.id} img={product.img} title={product.title} desc={product.description} price={product.price} />

                )

            })

            }

            <button onClick={showMore}>Load more</button>
            
            <button onClick={showLess}>Show less</button> 
        </div>
    )
}

export default CardList;