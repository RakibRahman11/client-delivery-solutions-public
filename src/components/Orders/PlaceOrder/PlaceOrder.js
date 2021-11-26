import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { id } = useParams()
    const { register, handleSubmit, reset } = useForm();
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://gentle-savannah-57371.herokuapp.com/products')
            .then(response => response.json())
            .then(data => setOrder(data))
    })
    const find = order?.find(item => item._id === id)

    const onSubmit = (data) => {
        axios.post('https://gentle-savannah-57371.herokuapp.com/placeOrder', data)
            .then(res => {
                alert('sure to add?');
                reset();
            })
    };
    return (
        <div>
            <div className="p-3 mx-auto my-5 rounded shadow bg-body card checkout-details col-lg-4">
                <div>
                    <img src={find?.image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{find?.title}</h5>
                    <p className="card-text">{find?.description}</p>
                    <p>Price: ${find?.price}</p>
                </div>
            </div>
            <div className="m-auto mt-5 w-25">
                <h5 className='mb-3'>Please provide the information</h5>
                <div className="d-flex justify-content-center align-items-center">
                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2 w-100' defaultValue={id} {...register("product")} />
                        <input className='mb-2 w-100' defaultValue={user.displayName} {...register("name")} />
                        <input className='mb-2 w-100' defaultValue={user.email} {...register("email", { required: true })} />
                        <input className='mb-2 w-100' placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                        <input className='mb-2 w-100' placeholder="City" defaultValue="" {...register("city", { required: true })} />
                        <input className='mb-2 w-100' placeholder="Contact" defaultValue="" {...register("phone", { required: true })} />
                        <select {...register("status")}>
                            <option value="Pending">Pending</option>
                        </select>
                        <br />

                        <input className="mt-2 w-50 btn btn-outline-primary" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;