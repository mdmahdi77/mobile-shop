import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../App';
import OrderDetails from '../OrderDetails/OrderDetails';

const Order = () => {
    const {orderId} = useParams()
    const [orders, setOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:7000/orders', {
            method: 'GET',
            headers: {'Content-type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <h1>Your total Orders {orders.length}</h1>
            {
                orders.map(order => <OrderDetails order={order.id} order={order}></OrderDetails>)
            }
        </div>
    );
};

export default Order;