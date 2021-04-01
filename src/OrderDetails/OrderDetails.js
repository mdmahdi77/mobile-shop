import React from 'react';
import './OrderDetails.css'

const OrderDetails = (props) => {
    const {fname, lname, price, brand, checkIn, id} = props.order

    return (
        <div className="orderList">
            <h2>{fname} {lname}</h2>
            <h3>{brand}</h3>
            <h5>{price}</h5>
            <h6>{(new Date(checkIn).toDateString("dd/MM/yyyy"))}</h6>
        </div>
    );
};

export default OrderDetails;