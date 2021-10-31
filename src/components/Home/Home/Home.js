import React, { useEffect, useState } from 'react';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import Worker from '../Worker/Worker';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://gentle-savannah-57371.herokuapp.com/addservices')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className='mt-5 bg-color'>
                <h1 className='mt-5 mb-3'>All services</h1>
                <div className="container">
                    <div className="row">
                        {
                            services.map(service => <Services key={service._id} service={service}></Services>)
                        }
                    </div>
                </div>
            </div>
            <Clients></Clients>
            <Worker></Worker>
        </div>
    );
};

export default Home;