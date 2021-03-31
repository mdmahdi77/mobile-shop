import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:7000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    return (
        <div className="home">
            {
                products.map(pd => <Product pd={pd.key} pd={pd}></Product>)
            }
        </div>
    );
};

export default Home;