import React from 'react';

const OrderDetails = (props) => {
    const {fname, lname, price, description, checkIn} = props.order
    return (
        <div>
            <h3>{fname} {lname}</h3>
            <h4>{price}</h4>
            <p>{description}</p>
            <h5>{(new Date(checkIn).toDateString("dd/MM/yyyy"))}</h5>
        </div>
    );
};

export default OrderDetails;