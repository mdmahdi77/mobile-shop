import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../App';
import './CheckOut.css'

const CheckOut = () => {
    const {checkOutId} = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selectedDate, setSelectedDate] = useState({
        checkIn: new Date()
    });

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://boiling-earth-08705.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const productOrder = product.find(pd => pd.id == checkOutId)

    const history = useHistory()
    const handleOrder = checkOutId => {
        history.push(`/productOrder/${checkOutId}`)

        const newOrder = {...productOrder, ...loggedInUser, ...selectedDate}
        fetch('https://boiling-earth-08705.herokuapp.com/addOrders', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <h1>Checkout</h1>
            <div className="checkOut">
                <h3>{productOrder?.fname} {productOrder?.lname}</h3>
                <h5>{productOrder?.quantity}</h5>
                <h4>{productOrder?.price}</h4>
                <Button variant="dark" onClick={() => handleOrder(checkOutId)}>Orders</Button>
            </div>
        </div>
    );
};

export default CheckOut;