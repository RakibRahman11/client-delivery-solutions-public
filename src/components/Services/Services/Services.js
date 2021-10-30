import React from 'react';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const { _id, title, description, price, image } = props.service;
    return (
        <div className="p-2 mb-5 bg-body card checkout-details col-lg-3 bg-color">
            <div>
                <img src={image} className="card-img-top" alt="" width="80" height="250" />
            </div>
            <div className="card-body">
                <h2 className="card-title">Delivery: {title}</h2>
                <p className="card-title">Details: {description}</p>
                <p className="card-title">Price: {price} BDT</p>
                <Link to={`/PlaceOrders/${_id}`}><button type="button" className="btn btn-outline-dark">Order <i className="fas fa-angle-right"></i></button></Link>
            </div>
        </div>
    );
};

export default Services;