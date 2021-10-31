import React, { useEffect, useState } from 'react';
import firebaseInit from '../../../Firebase/firebase.init';

firebaseInit()

const PlacedOrder = (props) => {
    const { _id, product } = props?.orders;
    const [services, setServices] = useState([])
    const [control, setControl] = useState(false)
    useEffect(() => {
        fetch('https://gentle-savannah-57371.herokuapp.com/addservices')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [control])

    const myProducts = services?.filter(item => item?._id === product)
    const projectDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const uri = `https://gentle-savannah-57371.herokuapp.com/placeOrder/${id}`
            // console.log(uri);
            fetch(uri, {
                method: 'DELETE',
                headers: { "content-type": "application/json" }
            })
                .then(response => response.json())
                .then(data => {
                    if (data?.deletedCount) {
                        setControl(!control);
                    } else {
                        setControl(false);
                    }
                    window.location.reload()
                })
        }
    }
    // console.log(myProducts);
    return (
        <div className='w-25'>
            <div className="p-2 mb-5 bg-body card checkout-details col-lg-3 bg-color w-100">
                <div>
                    <img src={myProducts[0]?.image} className="card-img-top" alt="" width="80" height="250" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{myProducts[0]?.title}</h2>
                </div>
                <div>
                <button onClick={() => projectDelete(_id)} className='btn btn-outline-danger w-50'>Cancel <i className="fas fa-times"></i></button>
                <button className='btn btn-outline-warning w-50'>Pending</button>
                </div>
            </div>
        </div>
    );
};

export default PlacedOrder;