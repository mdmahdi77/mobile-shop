import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './CheckOut.css'

const CheckOut = () => {
    const {productId} = useParams()
    
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const productOrder = product.find(pd => pd.id == productId)
    return (
        <div className="checkOut">
            <h3>{productOrder?.fname} {productOrder?.lname}</h3>
            <h5>{productOrder?.quantity}</h5>
            <h4>{productOrder?.price}</h4>
        </div>
    );
};

export default CheckOut;