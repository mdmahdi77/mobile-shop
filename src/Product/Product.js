import { Button } from '../../node_modules/react-bootstrap';
import React from 'react';
import './Product.css'
import { useHistory } from 'react-router';

const Product = (props) => {
    const history = useHistory()
    const handleProduct = id => {
        history.push(`/productOrder/${id}`)
    }

    const {fname, img, lname, brand, price, id} = props.pd
    return (
        <div className="products">
            <img src={img} alt=""/>
            <h5>{fname} {lname}</h5>
            <p>{brand}</p>
            <div className="priceBtn">
                <h4>{price}</h4>
                <Button variant="dark" onClick={() => handleProduct(id)}>Dark</Button>
            </div>
        </div>
    );
};

export default Product;