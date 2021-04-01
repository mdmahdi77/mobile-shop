import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'


const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null)

    const onSubmit = data => {
        const eventData = {
            id: parseFloat(data.id),
            quantity: parseFloat(data.quantity),
            fname: data.fname,
            lname: data.lname,
            brand: data.brandName,
            price: data.price,
            img: imageUrl
          }

        const uri = `https://boiling-earth-08705.herokuapp.com/addEvents`
        console.log(eventData)
        fetch(uri, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Your product is placed successfully')
            }
        })
           
    };

    const handleImageUrl = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '3fdc4394d2aa620592a552e98b379e1c');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
            setImageUrl(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    return (
        <div>
            <h1>Add To Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="id" defaultValue="Required for Unique id" ref={register} />
                <br/>
                <input name="fname" defaultValue="F_Name" ref={register} />
                <br/>
                <input name="lname" defaultValue="L_Name" ref={register} />
                <br/>
                <input name="brandName" defaultValue="Brand" ref={register} />
                <br/>
                <input name="price" defaultValue="Price" ref={register} />
                <br/>
                <input name="quantity" defaultValue="Quantity" ref={register} />
                <br/>
                <input name="exampleRequired" type="file" onChange={handleImageUrl} />
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;