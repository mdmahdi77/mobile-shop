import React from 'react';
import fakeData from '../../src/fakeData/MOCK_DATA.json'

const Inventory = () => {
    const handleAddProduct = () => {
        fetch('http://localhost:5000/addProducts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div>
            <button onClick={handleAddProduct}>Add product</button>
        </div>
    );
};

export default Inventory;